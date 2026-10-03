/**
 * University of Kurdistan Hewlêr (UKH) - Main Application Script
 * Universal script powering Home, Programmes, Programme Details, Admissions, Research, and Student Life pages.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Global State
  const state = {
    searchQuery: '',
    selectedLevels: new Set(),
    selectedSchools: new Set(),
    currentProgramme: null,
    currentNews: null,
    applicationStep: 1
  };

  // Permanently clear dark mode & ensure crisp light mode
  try {
    localStorage.removeItem('ukh-theme');
    document.documentElement.removeAttribute('data-theme');
  } catch (e) {}

  // Setup Modals across all pages (Inject if placeholder)
  ensureModalsExist();

  // DOM Elements
  const programmesGrid = document.getElementById('programmesGrid');
  const programmeSearchInput = document.getElementById('programmeSearchInput');
  const resultsCountEl = document.getElementById('resultsCount');
  const activeTagsContainer = document.getElementById('activeFilterTags');
  const btnResetFilters = document.getElementById('btnResetFilters');
  const levelCheckboxes = document.querySelectorAll('input[name="study-level"]');
  const schoolCheckboxes = document.querySelectorAll('input[name="school"]');

  // Modals
  const progModal = document.getElementById('programmeModal');
  const applyModal = document.getElementById('applyModal');
  const searchModal = document.getElementById('searchModal');
  const newsModal = document.getElementById('newsModal');

  /* ==========================================================================
     URL Query Parameters Handling (for Programmes page)
     ========================================================================== */
  const urlParams = new URLSearchParams(window.location.search);
  const paramLevel = urlParams.get('level');
  const paramSchool = urlParams.get('school');
  const paramSearch = urlParams.get('search');

  if (paramLevel) {
    state.selectedLevels.add(paramLevel);
  }
  if (paramSchool) {
    state.selectedSchools.add(paramSchool);
  }
  if (paramSearch) {
    state.searchQuery = paramSearch;
    if (programmeSearchInput) programmeSearchInput.value = paramSearch;
  }

  /* ==========================================================================
     Programmes Discovery Filter & Rendering (Programmes Page)
     ========================================================================== */
  if (programmesGrid) {
    // Initial sync of checkboxes from URL state
    syncCheckboxes();
    updateFilterCounts();

    function updateFilterCounts() {
      levelCheckboxes.forEach(cb => {
        const val = cb.value;
        const count = UKH_PROGRAMMES.filter(p => p.level === val).length;
        const badge = cb.parentElement.querySelector('.filter-count');
        if (badge) badge.textContent = count;
      });

      schoolCheckboxes.forEach(cb => {
        const val = cb.value;
        const count = UKH_PROGRAMMES.filter(p => p.school === val).length;
        const badge = cb.parentElement.querySelector('.filter-count');
        if (badge) badge.textContent = count;
      });
    }

    function renderProgrammes() {
      const query = state.searchQuery.trim().toLowerCase();

      const filtered = UKH_PROGRAMMES.filter(prog => {
        const matchesSearch = !query || 
          prog.title.toLowerCase().includes(query) ||
          prog.degree.toLowerCase().includes(query) ||
          prog.school.toLowerCase().includes(query) ||
          prog.shortDesc.toLowerCase().includes(query) ||
          prog.level.toLowerCase().includes(query);

        const matchesLevel = state.selectedLevels.size === 0 || state.selectedLevels.has(prog.level);
        const matchesSchool = state.selectedSchools.size === 0 || state.selectedSchools.has(prog.school);

        return matchesSearch && matchesLevel && matchesSchool;
      });

      if (resultsCountEl) {
        resultsCountEl.innerHTML = `Showing <strong>${filtered.length}</strong> of ${UKH_PROGRAMMES.length} programmes`;
      }

      renderActiveFilterTags();

      if (filtered.length === 0) {
        programmesGrid.innerHTML = `
          <div class="empty-programmes-state">
            <div class="empty-state-icon">🔍</div>
            <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--text-primary);">No matching programmes found</h3>
            <p style="color: var(--text-secondary); max-width: 450px; margin: 0 auto 1.5rem;">
              We couldn't find any programmes matching your selected criteria. Try adjusting your search query or clearing some filters.
            </p>
            <button class="btn btn-navy" id="btnClearAllNoMatch">Clear All Filters</button>
          </div>
        `;

        const btnClearNoMatch = document.getElementById('btnClearAllNoMatch');
        if (btnClearNoMatch) {
          btnClearNoMatch.addEventListener('click', resetAllFilters);
        }
        return;
      }

      programmesGrid.innerHTML = filtered.map(prog => `
        <article class="programme-card" data-id="${prog.id}">
          <div class="card-top-meta">
            <span class="degree-badge">${prog.degree}</span>
            <span class="school-tag ${getSchoolClass(prog.school)}">
              ● ${prog.school}
            </span>
          </div>

          <h3 class="programme-title">${prog.title}</h3>
          <div class="programme-school-name">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            School of ${prog.school}
          </div>

          <p class="programme-desc">${prog.shortDesc}</p>

          <div class="card-info-chips">
            <span class="info-chip">⏱️ ${prog.duration}</span>
            <span class="info-chip">🌐 ${prog.language}</span>
            <span class="info-chip">📅 Intake: ${prog.intake.split('&')[0]}</span>
          </div>

          <div class="card-actions-row">
            <a href="programme-detail.html?id=${prog.id}" class="btn-view-programme">
              View Programme
            </a>
            <button class="btn btn-sm btn-primary" data-action="apply" data-id="${prog.id}">
              Apply Now
            </button>
          </div>
        </article>
      `).join('');

      programmesGrid.querySelectorAll('[data-action="apply"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = e.currentTarget.dataset.id;
          openApplyModal(id);
        });
      });
    }

    function renderActiveFilterTags() {
      if (!activeTagsContainer) return;
      activeTagsContainer.innerHTML = '';

      if (state.searchQuery) {
        const tag = createTag(`Search: "${state.searchQuery}"`, () => {
          state.searchQuery = '';
          if (programmeSearchInput) programmeSearchInput.value = '';
          renderProgrammes();
        });
        activeTagsContainer.appendChild(tag);
      }

      state.selectedLevels.forEach(lvl => {
        const tag = createTag(lvl, () => {
          state.selectedLevels.delete(lvl);
          syncCheckboxes();
          renderProgrammes();
        });
        activeTagsContainer.appendChild(tag);
      });

      state.selectedSchools.forEach(sch => {
        const tag = createTag(`School: ${sch}`, () => {
          state.selectedSchools.delete(sch);
          syncCheckboxes();
          renderProgrammes();
        });
        activeTagsContainer.appendChild(tag);
      });
    }

    function createTag(text, onRemove) {
      const span = document.createElement('span');
      span.className = 'active-tag';
      span.innerHTML = `
        ${text}
        <button type="button" aria-label="Remove filter">&times;</button>
      `;
      span.querySelector('button').addEventListener('click', onRemove);
      return span;
    }

    function resetAllFilters() {
      state.searchQuery = '';
      state.selectedLevels.clear();
      state.selectedSchools.clear();
      if (programmeSearchInput) programmeSearchInput.value = '';
      syncCheckboxes();
      renderProgrammes();
    }

    if (btnResetFilters) {
      btnResetFilters.addEventListener('click', resetAllFilters);
    }

    levelCheckboxes.forEach(cb => {
      cb.addEventListener('change', (e) => {
        if (e.target.checked) {
          state.selectedLevels.add(e.target.value);
        } else {
          state.selectedLevels.delete(e.target.value);
        }
        renderProgrammes();
      });
    });

    schoolCheckboxes.forEach(cb => {
      cb.addEventListener('change', (e) => {
        if (e.target.checked) {
          state.selectedSchools.add(e.target.value);
        } else {
          state.selectedSchools.delete(e.target.value);
        }
        renderProgrammes();
      });
    });

    if (programmeSearchInput) {
      programmeSearchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderProgrammes();
      });
    }

    // Render initially on programmes.html
    renderProgrammes();
  }

  function syncCheckboxes() {
    levelCheckboxes.forEach(cb => {
      cb.checked = state.selectedLevels.has(cb.value);
    });
    schoolCheckboxes.forEach(cb => {
      cb.checked = state.selectedSchools.has(cb.value);
    });
  }

  function getSchoolClass(school) {
    switch (school) {
      case 'Medicine': return 'school-med';
      case 'Science & Engineering': return 'school-se';
      case 'Management & Economics': return 'school-me';
      case 'Social Sciences': return 'school-ss';
      default: return 'school-se';
    }
  }

  /* ==========================================================================
     Homepage Programme Search Bar (Section 2)
     ========================================================================== */
  const homeSearchInput = document.getElementById('homeSearchInput');
  const btnHomeSearch = document.getElementById('btnHomeSearch');
  const homeLevelTabs = document.querySelectorAll('[data-home-level]');
  const homeProgrammeResults = document.getElementById('homeProgrammeResults');

  if (homeSearchInput && btnHomeSearch) {
    let currentHomeLevel = 'All';

    homeLevelTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        homeLevelTabs.forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');
        currentHomeLevel = e.currentTarget.dataset.homeLevel;
        filterHomeProgrammes();
      });
    });

    btnHomeSearch.addEventListener('click', filterHomeProgrammes);
    homeSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') filterHomeProgrammes();
    });
    homeSearchInput.addEventListener('input', filterHomeProgrammes);

    function filterHomeProgrammes() {
      const q = homeSearchInput.value.trim().toLowerCase();
      if (!homeProgrammeResults) return;

      const filtered = UKH_PROGRAMMES.filter(p => {
        const matchesQuery = !q || p.title.toLowerCase().includes(q) || p.school.toLowerCase().includes(q) || p.degree.toLowerCase().includes(q);
        const matchesLevel = currentHomeLevel === 'All' || p.level === currentHomeLevel;
        return matchesQuery && matchesLevel;
      }).slice(0, 3); // show top 3 results preview

      homeProgrammeResults.style.display = 'block';

      if (filtered.length === 0) {
        homeProgrammeResults.innerHTML = `
          <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); background: var(--bg-secondary); border-radius: var(--radius-md);">
            No matching programmes found for "${homeSearchInput.value}". <a href="programmes.html" style="color:var(--ukh-blue); font-weight:700;">Explore all programmes in our catalog →</a>
          </div>
        `;
        return;
      }

      homeProgrammeResults.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
          ${filtered.map(p => `
            <div style="background:var(--bg-secondary); border:1px solid var(--border-light); border-radius:var(--radius-sm); padding:1rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
                <span class="degree-badge" style="font-size:0.75rem;">${p.degree}</span>
                <span style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">School of ${p.school}</span>
              </div>
              <h4 style="font-size:1.05rem; font-weight:800; color:var(--text-primary); margin-bottom:0.35rem;">${p.title}</h4>
              <p style="font-size:0.82rem; color:var(--text-secondary); line-height:1.4; margin-bottom:0.75rem;">${p.shortDesc.slice(0, 110)}...</p>
              <div style="display:flex; gap:0.5rem;">
                <a href="programme-detail.html?id=${p.id}" class="btn btn-sm btn-navy" style="flex:1;">View Details</a>
                <button class="btn btn-sm btn-primary" onclick="openApplyModal('${p.id}')">Apply</button>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="text-align: right;">
          <a href="programmes.html?search=${encodeURIComponent(q)}" style="font-size:0.9rem; font-weight:700; color:var(--ukh-blue);">
            View all matching programmes in full directory →
          </a>
        </div>
      `;
    }
  }

  /* ==========================================================================
     Global Search Dialog (Ctrl+K)
     ========================================================================== */
  function openSearchModal() {
    if (!searchModal) return;
    searchModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const globalSearchInput = document.getElementById('globalSearchInput');
    setTimeout(() => {
      if (globalSearchInput) {
        globalSearchInput.focus();
        globalSearchInput.value = '';
        renderGlobalSearchResults('');
      }
    }, 100);
  }

  document.querySelectorAll('.btn-open-search').forEach(btn => {
    btn.addEventListener('click', openSearchModal);
  });

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearchModal();
    }
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  const globalSearchInput = document.getElementById('globalSearchInput');
  const globalSearchResults = document.getElementById('globalSearchResults');

  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', (e) => {
      renderGlobalSearchResults(e.target.value);
    });
  }

  function renderGlobalSearchResults(query) {
    if (!globalSearchResults) return;
    const q = query.trim().toLowerCase();
    if (!q) {
      globalSearchResults.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
          Type to ask any question or search programmes, entry requirements, admissions, and campus facilities...
        </div>
      `;
      return;
    }

    // Check if query is conversational or natural language question
    let aiCardHtml = '';
    if (window.ukhAIEngine) {
      const isQuestion = q.includes('how') || q.includes('what') || q.includes('which') || 
                         q.includes('where') || q.includes('can i') || q.includes('i want') || 
                         q.includes('apply') || q.includes('scholarship') || q.includes('gpa') ||
                         q.includes('ai') || q.includes('degree') || q.length > 15;
      if (isQuestion) {
        const aiRes = window.ukhAIEngine.askAssistant(query);
        if (aiRes && aiRes.answer) {
          aiCardHtml = `
            <div style="background:var(--bg-secondary); border:1.5px solid var(--ukh-ice-border); border-radius:12px; padding:1.25rem; margin-bottom:1.25rem; box-shadow:var(--shadow-sm);">
              <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.6rem;">
                <div style="display:flex; align-items:center; gap:0.45rem;">
                  <span style="font-size:1.25rem;">🤖</span>
                  <strong style="color:var(--ukh-blue); font-size:0.85rem; text-transform:uppercase; letter-spacing:0.04em;">UKH AI Institutional Answer</strong>
                </div>
                <span class="badge badge-azure" style="font-size:0.7rem;">Verified Answer</span>
              </div>
              <p style="font-size:0.92rem; color:var(--text-primary); line-height:1.6; margin-bottom:0.75rem;">
                ${aiRes.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>')}
              </p>
              ${aiRes.linkUrl ? `
                <a href="${aiRes.linkUrl}" class="btn btn-navy btn-sm" style="display:inline-flex; align-items:center; gap:0.4rem;">
                  ${aiRes.linkText || 'Open Details'} →
                </a>
              ` : ''}
            </div>
          `;
        }
      }
    }

    const matches = UKH_PROGRAMMES.filter(p => 
      p.title.toLowerCase().includes(q) ||
      p.degree.toLowerCase().includes(q) ||
      p.school.toLowerCase().includes(q) ||
      (p.tags && p.tags.some(t => t.toLowerCase().includes(q)))
    );

    if (!aiCardHtml && matches.length === 0) {
      globalSearchResults.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--text-muted);">
          No results found for "${query}". Try asking "Which programmes in AI?", "How to apply?", or "Scholarships".
        </div>
      `;
      return;
    }

    const listHtml = matches.map(p => `
      <div class="search-result-item" data-id="${p.id}" style="padding: 0.9rem 1rem; border-bottom: 1px solid var(--border-light); cursor: pointer; display: flex; align-items: center; justify-content: space-between; border-radius:8px; transition: background 0.15s ease;">
        <div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 0.98rem;">
            ${p.title} <span class="degree-badge" style="font-size:0.7rem; margin-left:0.4rem;">${p.degree}</span>
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted);">
            School of ${p.school} • ${p.level}
          </div>
        </div>
        <span style="font-size: 0.85rem; color: var(--ukh-blue); font-weight: 700;">View →</span>
      </div>
    `).join('');

    globalSearchResults.innerHTML = aiCardHtml + listHtml;

    globalSearchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        window.location.href = `programme-detail.html?id=${id}`;
      });
    });
  }

  /* ==========================================================================
     Application Wizard Modal Logic
     ========================================================================== */
  window.openApplyModal = function(preselectedProgId = null) {
    if (!applyModal) return;
    state.applicationStep = 1;
    updateWizardUI();

    const applyLevelSelect = document.getElementById('applyLevelSelect');
    const applyProgSelect = document.getElementById('applyProgSelect');

    populateApplyProgrammes();

    if (preselectedProgId) {
      const prog = UKH_PROGRAMMES.find(p => p.id === preselectedProgId);
      if (prog) {
        if (applyLevelSelect) applyLevelSelect.value = prog.level;
        populateApplyProgrammes(prog.level);
        if (applyProgSelect) applyProgSelect.value = prog.id;
      }
    }

    applyModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function populateApplyProgrammes(filterLevel = null) {
    const applyProgSelect = document.getElementById('applyProgSelect');
    if (!applyProgSelect) return;
    const progs = filterLevel 
      ? UKH_PROGRAMMES.filter(p => p.level === filterLevel)
      : UKH_PROGRAMMES;

    applyProgSelect.innerHTML = progs.map(p => `
      <option value="${p.id}">${p.degree} - ${p.title} (${p.school})</option>
    `).join('');
  }

  const applyLevelSelect = document.getElementById('applyLevelSelect');
  if (applyLevelSelect) {
    applyLevelSelect.addEventListener('change', (e) => {
      populateApplyProgrammes(e.target.value);
    });
  }

  const btnWizardNext = document.getElementById('btnWizardNext');
  const btnWizardBack = document.getElementById('btnWizardBack');
  const btnWizardSubmit = document.getElementById('btnWizardSubmit');
  const applyForm = document.getElementById('ukhApplicationForm');

  if (btnWizardNext) {
    btnWizardNext.addEventListener('click', () => {
      if (validateCurrentStep()) {
        state.applicationStep++;
        updateWizardUI();
      }
    });
  }

  if (btnWizardBack) {
    btnWizardBack.addEventListener('click', () => {
      if (state.applicationStep > 1) {
        state.applicationStep--;
        updateWizardUI();
      }
    });
  }

  function validateCurrentStep() {
    const applyProgSelect = document.getElementById('applyProgSelect');
    if (state.applicationStep === 1) {
      if (applyProgSelect && !applyProgSelect.value) {
        showToast('Please select an academic programme.', 'error');
        return false;
      }
      return true;
    }
    if (state.applicationStep === 2) {
      const name = document.getElementById('applicantFullName')?.value.trim();
      const email = document.getElementById('applicantEmail')?.value.trim();
      const phone = document.getElementById('applicantPhone')?.value.trim();

      if (!name || !email || !phone) {
        showToast('Please complete your full name, email, and phone number.', 'error');
        return false;
      }
      return true;
    }
    return true;
  }

  function updateWizardUI() {
    const stepIndicators = document.querySelectorAll('.wizard-step');
    stepIndicators.forEach((ind, idx) => {
      const stepNum = idx + 1;
      ind.classList.remove('active', 'completed');
      if (stepNum === state.applicationStep) {
        ind.classList.add('active');
      } else if (stepNum < state.applicationStep) {
        ind.classList.add('completed');
      }
    });

    const stepPanes = document.querySelectorAll('.wizard-step-pane');
    stepPanes.forEach((pane, idx) => {
      pane.style.display = (idx + 1 === state.applicationStep) ? 'block' : 'none';
    });

    if (btnWizardBack) {
      btnWizardBack.style.display = state.applicationStep === 1 ? 'none' : 'inline-flex';
    }
    if (btnWizardNext) {
      btnWizardNext.style.display = state.applicationStep === 3 ? 'none' : 'inline-flex';
    }
    if (btnWizardSubmit) {
      btnWizardSubmit.style.display = state.applicationStep === 3 ? 'inline-flex' : 'none';
    }
  }

  if (applyForm) {
    applyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const appId = 'UKH-' + Math.floor(100000 + Math.random() * 900000);
      const applyProgSelect = document.getElementById('applyProgSelect');
      const chosenProg = UKH_PROGRAMMES.find(p => p.id === applyProgSelect?.value);

      const indicator = document.querySelector('.wizard-steps-indicator');
      if (indicator) indicator.style.display = 'none';

      const step3 = document.getElementById('wizardStep3');
      if (step3) step3.style.display = 'none';

      if (btnWizardBack) btnWizardBack.style.display = 'none';
      if (btnWizardSubmit) btnWizardSubmit.style.display = 'none';

      const successBox = document.getElementById('wizardSuccessBox');
      if (successBox) successBox.style.display = 'block';

      const genIdEl = document.getElementById('generatedAppId');
      if (genIdEl) genIdEl.textContent = appId;

      const confirmedProgEl = document.getElementById('confirmedProgTitle');
      if (confirmedProgEl) {
        confirmedProgEl.textContent = chosenProg ? `${chosenProg.degree} in ${chosenProg.title}` : 'Selected Programme';
      }

      showToast(`Application successfully submitted! Ref: ${appId}`, 'success');
    });
  }

  const btnCloseAppSuccess = document.getElementById('btnCloseAppSuccess');
  if (btnCloseAppSuccess) {
    btnCloseAppSuccess.addEventListener('click', () => {
      closeModal(applyModal);
      setTimeout(() => {
        applyForm?.reset();
        const indicator = document.querySelector('.wizard-steps-indicator');
        if (indicator) indicator.style.display = 'flex';
        const successBox = document.getElementById('wizardSuccessBox');
        if (successBox) successBox.style.display = 'none';
        state.applicationStep = 1;
        updateWizardUI();
      }, 400);
    });
  }

  document.querySelectorAll('.btn-open-apply').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const progId = e.currentTarget.dataset.applyProg || null;
      openApplyModal(progId);
    });
  });

  /* ==========================================================================
     News Reader Modal
     ========================================================================== */
  function openNewsModal(newsId) {
    const article = UKH_NEWS.find(n => n.id === parseInt(newsId));
    if (!article || !newsModal) return;

    document.getElementById('modalNewsCategory').textContent = article.category;
    document.getElementById('modalNewsTitle').textContent = article.title;
    document.getElementById('modalNewsMeta').textContent = `${article.date} • ${article.readTime}`;
    document.getElementById('modalNewsImg').src = article.image;
    document.getElementById('modalNewsContent').innerHTML = `
      <p style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 1.25rem; font-weight: 600; color: var(--text-primary);">
        ${article.excerpt}
      </p>
      <p style="font-size: 1rem; line-height: 1.7; color: var(--text-secondary);">
        ${article.content}
      </p>
    `;

    newsModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  document.querySelectorAll('.news-read-more').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = e.currentTarget.dataset.newsId;
      openNewsModal(id);
    });
  });

  /* ==========================================================================
     Mobile Navigation Drawer
     ========================================================================== */
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const btnCloseDrawer = document.getElementById('btnCloseDrawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (btnCloseDrawer && mobileDrawer) {
    btnCloseDrawer.addEventListener('click', () => {
      mobileDrawer.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) {
        mobileDrawer.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  /* ==========================================================================
     General Modal Handling
     ========================================================================== */
  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function closeAllModals() {
    document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.btn-close-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.currentTarget.closest('.modal-backdrop');
      closeModal(modal);
    });
  });

  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeModal(backdrop);
      }
    });
  });

  /* ==========================================================================
     Toast Notifications Engine
     ========================================================================== */
  window.showToast = function(message, type = 'info') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    const icon = type === 'success' ? '✅' : type === 'error' ? '⚠️' : 'ℹ️';

    toast.innerHTML = `
      <span>${icon}</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  };

  /* ==========================================================================
     Ensure Modals Exist on Every Page
     ========================================================================== */
  function ensureModalsExist() {
    const applyModalEl = document.getElementById('applyModal');
    if (applyModalEl && !applyModalEl.querySelector('.modal-dialog')) {
      applyModalEl.setAttribute('role', 'dialog');
      applyModalEl.setAttribute('aria-modal', 'true');
      applyModalEl.innerHTML = `
        <div class="modal-dialog">
          <div class="modal-header">
            <div class="modal-title-box">
              <span class="badge badge-gold">Admissions Portal 2026–2027</span>
              <h3 id="applyModalTitle">Apply to UKH</h3>
            </div>
            <button class="btn-close-modal" aria-label="Close dialog">&times;</button>
          </div>
          <div class="modal-body">
            <div class="wizard-steps-indicator">
              <div class="wizard-step active" id="stepIndicator1">
                <div class="step-circle">1</div>
                <span class="step-label">Programme</span>
              </div>
              <div class="wizard-step" id="stepIndicator2">
                <div class="step-circle">2</div>
                <span class="step-label">Applicant Info</span>
              </div>
              <div class="wizard-step" id="stepIndicator3">
                <div class="step-circle">3</div>
                <span class="step-label">Requirements</span>
              </div>
            </div>
            <form id="ukhApplicationForm">
              <div class="wizard-step-pane" id="wizardStep1">
                <h4 style="font-size:1.15rem; font-weight:700; margin-bottom:1rem; color:var(--text-primary);">
                  Select Your Target Degree & Programme
                </h4>
                <div class="form-group">
                  <label class="form-label" for="applyLevelSelect">Study Level</label>
                  <select class="form-select" id="applyLevelSelect">
                    <option value="">All Study Levels</option>
                    <option value="Undergraduate">Undergraduate (BSc, BA, MBBS)</option>
                    <option value="Postgraduate">Postgraduate (MSc, MBA)</option>
                    <option value="PhD">Doctoral Research (PhD)</option>
                    <option value="Short Courses">Short Courses & Executive</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label" for="applyProgSelect">Select Academic Programme *</label>
                  <select class="form-select" id="applyProgSelect" required></select>
                </div>
                <div class="form-group">
                  <label class="form-label">Preferred Intake</label>
                  <select class="form-select">
                    <option>Fall Intake (October 2026)</option>
                    <option>Spring Intake (February 2027)</option>
                  </select>
                </div>
              </div>
              <div class="wizard-step-pane" id="wizardStep2" style="display:none;">
                <h4 style="font-size:1.15rem; font-weight:700; margin-bottom:1rem; color:var(--text-primary);">
                  Personal & Academic Profile
                </h4>
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label" for="applicantFullName">Full Name *</label>
                    <input type="text" class="form-input" id="applicantFullName" placeholder="e.g. Heja Ahmed" required>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="applicantEmail">Email Address *</label>
                    <input type="email" class="form-input" id="applicantEmail" placeholder="heja@example.com" required>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label" for="applicantPhone">Phone / WhatsApp *</label>
                    <input type="tel" class="form-input" id="applicantPhone" placeholder="+964 750 000 0000" required>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Nationality</label>
                    <input type="text" class="form-input" placeholder="Kurdistan Region / Iraq / International">
                  </div>
                </div>
              </div>
              <div class="wizard-step-pane" id="wizardStep3" style="display:none;">
                <h4 style="font-size:1.15rem; font-weight:700; margin-bottom:1rem; color:var(--text-primary);">
                  English Proficiency & Declaration
                </h4>
                <div class="form-group">
                  <label class="form-label">English Language Status</label>
                  <select class="form-select">
                    <option>Official IELTS Academic score (6.0+)</option>
                    <option>Official TOEFL iBT score (75+)</option>
                    <option>I will sit the UKH English Language Placement Test</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="filter-checkbox-label">
                    <input type="checkbox" required checked>
                    <span>I declare that all submitted academic records are genuine.</span>
                  </label>
                </div>
              </div>
              <div id="wizardSuccessBox" style="display:none; text-align:center; padding:2rem 1rem;">
                <div style="font-size:3.5rem; margin-bottom:1rem;">🎉</div>
                <h3 style="font-size:1.5rem; font-weight:800; color:var(--text-primary); margin-bottom:0.5rem;">Application Logged!</h3>
                <p style="color:var(--text-secondary); max-width:450px; margin:0 auto 1.5rem;">
                  Your application has been received by UKH Admissions. Ref: <strong id="generatedAppId">UKH-2026-928120</strong>
                </p>
                <button type="button" class="btn btn-navy" id="btnCloseAppSuccess">Close</button>
              </div>
            </form>
          </div>
          <div class="modal-footer" id="wizardFooter">
            <button type="button" class="btn btn-outline" id="btnWizardBack" style="display:none;">Back</button>
            <button type="button" class="btn btn-navy" id="btnWizardNext">Next Step →</button>
            <button type="submit" form="ukhApplicationForm" class="btn btn-primary" id="btnWizardSubmit" style="display:none;">Submit Application</button>
          </div>
        </div>
      `;
    }

    const searchModalEl = document.getElementById('searchModal');
    if (searchModalEl && !searchModalEl.querySelector('.modal-dialog')) {
      searchModalEl.setAttribute('role', 'dialog');
      searchModalEl.setAttribute('aria-modal', 'true');
      searchModalEl.innerHTML = `
        <div class="modal-dialog" style="max-width:650px;">
          <div class="modal-header">
            <h3 style="font-size:1.15rem; display:flex; align-items:center; gap:0.5rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Search UKH Academic Portal
            </h3>
            <button class="btn-close-modal" aria-label="Close search">&times;</button>
          </div>
          <div class="modal-body" style="padding:1.5rem;">
            <div class="search-input-wrapper" style="margin-bottom:1rem;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" id="globalSearchInput" class="search-input" placeholder="Type a programme, degree, school, or keyword...">
            </div>
            <div id="globalSearchResults" style="max-height:360px; overflow-y:auto;"></div>
          </div>
        </div>
      `;
    }

    // Attach close listeners to newly injected modal elements
    document.querySelectorAll('.btn-close-modal').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const modal = e.currentTarget.closest('.modal-backdrop');
        closeModal(modal);
      });
    });
  }

  /* ==========================================================================
     UKH AI INTEGRATION & EXPERIENCES
     ========================================================================== */

  // 1. Initialize Floating UKH AI Assistant
  function initAIAssistant() {
    if (!document.getElementById('ukhAIFloatingBtn')) {
      const floatBtn = document.createElement('button');
      floatBtn.id = 'ukhAIFloatingBtn';
      floatBtn.className = 'ukh-ai-floating-btn';
      floatBtn.setAttribute('aria-label', 'Open UKH AI Assistant');
      floatBtn.innerHTML = `
        <div class="ai-btn-icon-wrap">
          <span style="font-size:1.05rem;">🤖</span>
          <span class="ai-online-dot"></span>
        </div>
        <span>Ask UKH AI</span>
      `;
      document.body.appendChild(floatBtn);
    }

    if (!document.getElementById('ukhAIDrawer')) {
      const drawer = document.createElement('div');
      drawer.id = 'ukhAIDrawer';
      drawer.className = 'ukh-ai-drawer';
      drawer.setAttribute('role', 'dialog');
      drawer.setAttribute('aria-label', 'UKH AI Assistant');
      drawer.innerHTML = `
        <div class="ai-drawer-header">
          <div class="ai-header-left">
            <div class="ai-header-avatar">
              <span style="font-size:1.3rem;">🤖</span>
            </div>
            <div>
              <div class="ai-header-title">UKH AI Assistant</div>
              <div class="ai-header-subtitle">Online • Institutional Intelligence</div>
            </div>
          </div>
          <div class="ai-header-actions">
            <button class="ai-header-btn" id="btnCloseAIDrawer" title="Close AI Assistant" aria-label="Close Assistant">&times;</button>
          </div>
        </div>

        <div class="ai-suggested-row">
          <div class="ai-suggested-label">Recommended Queries</div>
          <div class="ai-suggested-chips" id="aiSuggestedChips">
            <button type="button" class="ai-prompt-chip" data-prompt="Which programmes are available in Artificial Intelligence?">🎓 AI Programmes</button>
            <button type="button" class="ai-prompt-chip" data-prompt="What are the admission requirements for undergraduate studies?">📋 Admissions Req</button>
            <button type="button" class="ai-prompt-chip" data-prompt="What scholarships and financial aid does UKH offer?">💰 Scholarships</button>
            <button type="button" class="ai-prompt-chip" data-prompt="Tell me about campus facilities and student clubs.">🏛️ Campus Life</button>
            <button type="button" class="ai-prompt-chip" data-prompt="How do I contact UKH Admissions?">📞 Contact Info</button>
          </div>
        </div>

        <div class="ai-chat-messages" id="aiChatMessages">
          <div class="chat-bubble ai">
            <p>Hello! 👋 I am your <strong>UKH AI Assistant</strong>. Ask me anything about studying at the University of Kurdistan Hewlêr — degrees, entry criteria, scholarships, or campus life.</p>
          </div>
        </div>

        <form class="ai-chat-input-row" id="aiChatForm">
          <input type="text" id="aiChatInput" class="ai-input-field" placeholder="Ask anything about UKH..." autocomplete="off">
          <button type="submit" class="ai-send-btn" aria-label="Send query">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </form>
      `;
      document.body.appendChild(drawer);
    }

    const floatingBtn = document.getElementById('ukhAIFloatingBtn');
    const drawer = document.getElementById('ukhAIDrawer');
    const closeBtn = document.getElementById('btnCloseAIDrawer');
    const chatForm = document.getElementById('aiChatForm');
    const chatInput = document.getElementById('aiChatInput');
    const chatMessages = document.getElementById('aiChatMessages');
    const suggestedChipsContainer = document.getElementById('aiSuggestedChips');

    function toggleAIDrawer() {
      const isActive = drawer.classList.contains('active');
      if (isActive) {
        drawer.classList.remove('active');
      } else {
        drawer.classList.add('active');
        setTimeout(() => chatInput && chatInput.focus(), 200);
      }
    }

    if (floatingBtn) floatingBtn.addEventListener('click', toggleAIDrawer);
    if (closeBtn) closeBtn.addEventListener('click', () => drawer.classList.remove('active'));

    function sendAIMessage(text) {
      const q = text.trim();
      if (!q) return;

      // 1. User Bubble
      const userBubble = document.createElement('div');
      userBubble.className = 'chat-bubble user';
      userBubble.textContent = q;
      chatMessages.appendChild(userBubble);
      chatMessages.scrollTop = chatMessages.scrollHeight;

      if (chatInput) chatInput.value = '';

      // 2. Typing Indicator
      const typingEl = document.createElement('div');
      typingEl.className = 'ai-typing-indicator';
      typingEl.innerHTML = `
        <span class="ai-typing-dot"></span>
        <span class="ai-typing-dot"></span>
        <span class="ai-typing-dot"></span>
      `;
      chatMessages.appendChild(typingEl);
      chatMessages.scrollTop = chatMessages.scrollHeight;

      // 3. Process AI Response with realistic typing latency
      setTimeout(() => {
        if (typingEl.parentNode) typingEl.parentNode.removeChild(typingEl);

        let aiAnswerData;
        if (window.ukhAIEngine) {
          aiAnswerData = window.ukhAIEngine.askAssistant(q);
        } else {
          aiAnswerData = {
            answer: `Thank you for asking about UKH. UKH offers world-class British-benchmarked education across our faculties.`,
            linkText: "Explore Programmes",
            linkUrl: "programmes.html"
          };
        }

        const aiBubble = document.createElement('div');
        aiBubble.className = 'chat-bubble ai';
        
        let formattedAnswer = aiAnswerData.answer
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\n• /g, '<br>• ')
          .replace(/\n/g, '<br>');

        let actionHtml = '';
        if (aiAnswerData.linkUrl && aiAnswerData.linkText) {
          actionHtml = `
            <div>
              <a href="${aiAnswerData.linkUrl}" class="chat-bubble-action">
                ${aiAnswerData.linkText} <span>→</span>
              </a>
            </div>
          `;
        }

        aiBubble.innerHTML = `<p>${formattedAnswer}</p>${actionHtml}`;
        chatMessages.appendChild(aiBubble);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Dynamic suggested prompts update
        if (window.ukhAIEngine && suggestedChipsContainer) {
          const newSuggestions = window.ukhAIEngine.getSuggestedPrompts(q);
          if (newSuggestions && newSuggestions.length > 0) {
            suggestedChipsContainer.innerHTML = newSuggestions.map(s => `
              <button type="button" class="ai-prompt-chip" data-prompt="${s}">${s.length > 25 ? s.substring(0, 24) + '...' : s}</button>
            `).join('');
            bindChipEvents();
          }
        }
      }, 420);
    }

    function bindChipEvents() {
      if (!suggestedChipsContainer) return;
      suggestedChipsContainer.querySelectorAll('.ai-prompt-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          const prompt = chip.getAttribute('data-prompt');
          if (prompt) sendAIMessage(prompt);
        });
      });
    }

    bindChipEvents();

    if (chatForm) {
      chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        sendAIMessage(chatInput.value);
      });
    }
  }

  // 2. Initialize AI Programme Finder
  function initAIProgrammeFinder() {
    const interestChips = document.querySelectorAll('#aiInterestChips .ai-select-chip');
    const levelChips = document.querySelectorAll('#aiLevelChips .ai-select-chip');
    const btnFind = document.getElementById('btnFindMyProgramme');
    const resultsGrid = document.getElementById('aiResultsGrid');
    const leadText = document.getElementById('aiRecommendationLead');

    if (!resultsGrid) return;

    let selectedInterest = "Artificial Intelligence";
    let selectedLevel = "All";

    interestChips.forEach(chip => {
      chip.addEventListener('click', () => {
        interestChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        selectedInterest = chip.getAttribute('data-interest') || 'All';
        renderAIRecommendations();
      });
    });

    levelChips.forEach(chip => {
      chip.addEventListener('click', () => {
        levelChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        selectedLevel = chip.getAttribute('data-level') || 'All';
        renderAIRecommendations();
      });
    });

    if (btnFind) {
      btnFind.addEventListener('click', renderAIRecommendations);
    }

    function renderAIRecommendations() {
      if (!window.ukhAIEngine) return;
      const resultsWrapper = document.getElementById('aiResultsWrapper');
      if (resultsWrapper) resultsWrapper.classList.add('active');
      const progs = window.ukhAIEngine.recommendProgrammes(selectedInterest, selectedLevel);

      if (leadText) {
        leadText.innerHTML = `Based on your interest in <strong>${selectedInterest}</strong> (${selectedLevel === 'All' ? 'all levels' : selectedLevel}), our AI recommends:`;
      }

      if (progs.length === 0) {
        resultsGrid.innerHTML = `
          <div style="grid-column: 1 / -1; padding: 2.5rem; text-align: center; color: var(--text-muted); background: var(--bg-card); border-radius: 12px; border: 1px dashed var(--border-medium);">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔍</div>
            <p>No programmes exactly match that criteria. Showing all related degrees:</p>
            <a href="programmes.html" class="btn btn-navy btn-sm" style="margin-top: 1rem;">View All UKH Programmes</a>
          </div>
        `;
        return;
      }

      resultsGrid.innerHTML = progs.slice(0, 4).map(p => {
        return `
          <article class="ai-match-card">
            <div class="ai-match-header">
              <span class="ai-match-score">⚡ ${p.matchScore || 96}% AI Fit</span>
              <span class="degree-badge">${p.degree.split(' ')[0]}</span>
            </div>
            <h3 class="programme-title" style="font-size:1.15rem; margin-top:0.4rem;">${p.title}</h3>
            <div class="programme-school-name" style="font-size:0.8rem; margin-bottom:0.75rem;">${p.school}</div>
            <p class="programme-desc" style="font-size:0.85rem; line-height:1.5; margin-bottom:1rem;">
              ${p.summary}
            </p>
            <div class="card-info-chips" style="margin-bottom:1.25rem;">
              <span class="info-chip">⏱️ ${p.duration}</span>
              <span class="info-chip">🌐 English</span>
            </div>
            <div style="margin-top:auto; display:flex; gap:0.5rem;">
              <a href="programme-detail.html?id=${p.id}" class="btn btn-navy btn-sm" style="flex:1;">
                View Programme →
              </a>
              <button type="button" class="btn btn-primary btn-sm btn-open-apply">Apply</button>
            </div>
          </article>
        `;
      }).join('');

      // Re-attach apply listeners to newly rendered cards
      resultsGrid.querySelectorAll('.btn-open-apply').forEach(b => {
        b.addEventListener('click', openApplyModal);
      });
    }

    // Initial render
    renderAIRecommendations();
  }

  // 3. Initialize AI Personalization ("Your UKH Journey")
  function initAIPersonalization() {
    const tabs = document.querySelectorAll('#journeyPersonaTabs .persona-tab-btn');
    const cardsGrid = document.getElementById('journeyCardsGrid');

    if (!cardsGrid || tabs.length === 0) return;

    function renderPersona(personaKey) {
      if (!window.ukhKnowledgeBase || !window.ukhKnowledgeBase.personalization) return;
      const list = window.ukhKnowledgeBase.personalization[personaKey] || window.ukhKnowledgeBase.personalization.prospective;

      cardsGrid.innerHTML = list.map(item => `
        <div class="journey-card">
          <div class="journey-icon-wrap">${item.icon}</div>
          <h3 class="journey-card-title">${item.title}</h3>
          <p class="journey-card-desc">${item.desc}</p>
          <button type="button" class="journey-card-cta" data-action="${item.ctaAction}">
            ${item.ctaText} <span>→</span>
          </button>
        </div>
      `).join('');

      cardsGrid.querySelectorAll('.journey-card-cta').forEach(btn => {
        btn.addEventListener('click', () => {
          const action = btn.getAttribute('data-action');
          if (action === 'finder') {
            const finderSection = document.getElementById('aiProgrammeFinder');
            if (finderSection) finderSection.scrollIntoView({ behavior: 'smooth' });
          } else if (action === 'admissions' || action === 'scholarships') {
            window.location.href = 'admissions.html';
          } else if (action === 'research') {
            window.location.href = 'research.html';
          } else if (action === 'postgrad') {
            window.location.href = 'programmes.html?level=Postgraduate';
          } else {
            showToast(`${btn.textContent.trim()} service initiated for this persona.`, 'info');
          }
        });
      });
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const persona = tab.getAttribute('data-persona');
        renderPersona(persona);
      });
    });

    // Default to prospective
    renderPersona('prospective');
  }

  // 4. Initialize AI Admissions Guide Wizard
  function initAIAdmissionsGuide() {
    const guideRoot = document.getElementById('aiAdmissionsGuide');
    if (!guideRoot) return;

    let selectedLevel = 'Undergraduate';
    let selectedField = 'Artificial Intelligence & Computing';
    let selectedQual = 'yes';

    const stepNodes = [
      document.getElementById('wizardNode1'),
      document.getElementById('wizardNode2'),
      document.getElementById('wizardNode3'),
      document.getElementById('wizardNode4')
    ];

    const panels = [
      document.getElementById('aiStep1'),
      document.getElementById('aiStep2'),
      document.getElementById('aiStep3'),
      document.getElementById('aiStep4')
    ];

    function showWizardStep(stepNum) {
      panels.forEach((p, idx) => {
        if (p) p.style.display = (idx + 1 === stepNum) ? 'block' : 'none';
      });

      stepNodes.forEach((node, idx) => {
        if (!node) return;
        if (idx + 1 < stepNum) {
          node.className = 'wizard-step-node completed';
        } else if (idx + 1 === stepNum) {
          node.className = 'wizard-step-node active';
        } else {
          node.className = 'wizard-step-node';
        }
      });
    }

    // Step 1 buttons
    const levelBtns = document.querySelectorAll('#aiAdmissLevel .ai-select-chip');
    levelBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        levelBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedLevel = btn.getAttribute('data-val') || 'Undergraduate';
      });
    });

    const btnStep1Next = document.getElementById('btnAiStep1Next');
    if (btnStep1Next) {
      btnStep1Next.addEventListener('click', () => showWizardStep(2));
    }

    // Step 2 buttons
    const fieldBtns = document.querySelectorAll('#aiAdmissField .ai-select-chip');
    fieldBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        fieldBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedField = btn.getAttribute('data-val') || 'Artificial Intelligence & Computing';
      });
    });

    const btnStep2Back = document.getElementById('btnAiStep2Back');
    const btnStep2Next = document.getElementById('btnAiStep2Next');
    if (btnStep2Back) btnStep2Back.addEventListener('click', () => showWizardStep(1));
    if (btnStep2Next) btnStep2Next.addEventListener('click', () => showWizardStep(3));

    // Step 3 buttons
    const qualBtns = document.querySelectorAll('#aiAdmissQual .ai-select-chip');
    qualBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        qualBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedQual = btn.getAttribute('data-val') || 'yes';
      });
    });

    const btnStep3Back = document.getElementById('btnAiStep3Back');
    const btnGeneratePath = document.getElementById('btnAiGeneratePath');
    if (btnStep3Back) btnStep3Back.addEventListener('click', () => showWizardStep(2));

    if (btnGeneratePath) {
      btnGeneratePath.addEventListener('click', () => {
        const resultContainer = document.getElementById('aiRecommendationContent');
        if (resultContainer && window.ukhAIEngine) {
          const guidance = window.ukhAIEngine.getAdmissionsGuidance(selectedLevel, selectedField, selectedQual);
          resultContainer.innerHTML = guidance
            .replace(/### (.*?)\n\n/g, '<h4 style="font-size:1.15rem; font-weight:800; color:var(--ukh-navy); margin-bottom:0.75rem;">$1</h4>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/• (.*?)\n/g, '<div style="margin-bottom:0.4rem; display:flex; align-items:flex-start; gap:0.5rem;"><span style="color:var(--ukh-cyan-dark); font-weight:bold;">✓</span> <span>$1</span></div>')
            .replace(/\n\n/g, '<div style="height:0.8rem;"></div>');
        }
        showWizardStep(4);
      });
    }

    const btnRestart = document.getElementById('btnAiRestartWizard');
    if (btnRestart) {
      btnRestart.addEventListener('click', () => showWizardStep(1));
    }
  }

  // 5. Initialize Programme Detail AI Widget
  function initProgrammeDetailAI() {
    const chips = document.querySelectorAll('.programme-ai-chip');
    const responseBox = document.getElementById('programmeAiResponse');
    if (!responseBox || chips.length === 0) return;

    const urlParams = new URLSearchParams(window.location.search);
    const progId = urlParams.get('id') || 'msc-ai';

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const qType = chip.getAttribute('data-q') || 'study';

        responseBox.style.opacity = '0.5';
        setTimeout(() => {
          if (window.ukhAIEngine) {
            const answer = window.ukhAIEngine.getProgrammeAIAnswer(progId, qType);
            responseBox.innerHTML = answer
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/• /g, '<br>• ');
          }
          responseBox.style.opacity = '1';
        }, 150);
      });
    });

    // Default trigger first chip
    if (chips[0]) chips[0].click();
  }

  // 6. Initialize Campus Life & Research AI
  function initCampusAndResearchAI() {
    // Campus Life AI
    const campusChips = document.querySelectorAll('#campusAIChips .ai-select-chip');
    const campusBox = document.getElementById('campusAIAnswerBox');
    if (campusChips.length > 0 && campusBox) {
      campusChips.forEach(chip => {
        chip.addEventListener('click', () => {
          campusChips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          const qType = chip.getAttribute('data-q');
          
          let query = "Tell me about student accommodation at UKH";
          if (qType === 'clubs') query = "Which student clubs can I join?";
          if (qType === 'sports') query = "What sports facilities are on campus?";
          if (qType === 'library') query = "Tell me about the UKH library and study spaces";
          if (qType === 'safety') query = "How safe is the campus?";

          if (window.ukhAIEngine) {
            const res = window.ukhAIEngine.askAssistant(query);
            campusBox.innerHTML = `<strong>🤖 UKH Campus AI:</strong> ${res.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>')}`;
          }
        });
      });
      // Initial trigger
      if (campusChips[0]) campusChips[0].click();
    }

    // Research AI
    const researchChips = document.querySelectorAll('#researchAIChips .ai-select-chip');
    const researchBox = document.getElementById('researchAIAnswerBox');
    if (researchChips.length > 0 && researchBox) {
      researchChips.forEach(chip => {
        chip.addEventListener('click', () => {
          researchChips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          const qType = chip.getAttribute('data-q');

          let query = "Kurdish Language Models and KurdishGPT research";
          if (qType === 'computing') query = "What are UKH's High-Performance Computing GPU cluster capabilities?";
          if (qType === 'water') query = "Tell me about Erbil Aquifer and sustainability research";
          if (qType === 'citadel') query = "Tell me about the Erbil Citadel 3D Digital Twin project";
          if (qType === 'fellowships') query = "Are there PhD research fellowships available at UKH?";

          if (window.ukhAIEngine) {
            const res = window.ukhAIEngine.askAssistant(query);
            researchBox.innerHTML = `<strong>🔬 UKH Research AI:</strong> ${res.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>')}`;
          }
        });
      });
      // Initial trigger
      if (researchChips[0]) researchChips[0].click();
    }
  }

  // 7. Initialize Reusable Parallax Scrolling Effect
  function initParallaxSections() {
    const parallaxSections = document.querySelectorAll('.ukh-parallax-section');
    if (parallaxSections.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || window.innerWidth <= 768;

    parallaxSections.forEach(section => {
      const bg = section.querySelector('.ukh-parallax-bg');
      if (!bg) return;

      if (isTouch) {
        bg.style.transform = 'none';
        return;
      }

      let isVisible = false;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isVisible = entry.isIntersecting;
          if (isVisible) updateParallax();
        });
      }, { rootMargin: '100px 0px' });

      observer.observe(section);

      function updateParallax() {
        if (!isVisible) return;
        const rect = section.getBoundingClientRect();
        const winHeight = window.innerHeight;
        const sectionCenter = rect.top + rect.height * 0.5;
        const screenCenter = winHeight * 0.5;
        // Controlled, smooth parallax movement: factor 0.22
        const offset = (sectionCenter - screenCenter) * 0.22;
        
        bg.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      }

      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!isVisible) return;
        if (!ticking) {
          window.requestAnimationFrame(() => {
            updateParallax();
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });

      // Initial alignment
      updateParallax();
    });
  }

  // 8. Initialize Hero AI Academic Discovery Console
  function initHeroAIConsole() {
    const heroAiForm = document.getElementById('heroAiForm');
    const heroAiInput = document.getElementById('heroAiInput');
    const heroAiResponseBox = document.getElementById('heroAiResponseBox');
    const heroAiAnswerText = document.getElementById('heroAiAnswerText');
    const heroAiAnswerAction = document.getElementById('heroAiAnswerAction');
    const btnCloseHeroAiAnswer = document.getElementById('btnCloseHeroAiAnswer');
    const promptChips = document.querySelectorAll('#heroAiPromptChips .hero-ai-prompt-chip');

    if (!heroAiForm || !heroAiInput || !heroAiResponseBox) return;

    function handleHeroAIQuery(query) {
      if (!query || !query.trim()) return;
      heroAiInput.value = query;

      if (!window.ukhAIEngine) return;

      heroAiResponseBox.classList.add('active');
      heroAiAnswerText.innerHTML = '<span style="display:inline-flex; align-items:center; gap:0.5rem; color:var(--text-muted);"><span style="display:inline-block; width:14px; height:14px; border:2px solid var(--ukh-blue); border-top-color:transparent; border-radius:50%; animation:spin 0.6s linear infinite;"></span> Consulting UKH Academic Intelligence...</span>';
      heroAiAnswerAction.innerHTML = '';

      setTimeout(() => {
        const response = window.ukhAIEngine.askAssistant(query);
        const formattedAnswer = response.answer
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>')
          .replace(/\n\n/g, '<br><br>')
          .replace(/\n/g, '<br>');

        heroAiAnswerText.innerHTML = formattedAnswer;

        let actionsHtml = '<div style="display:flex; gap:0.75rem; flex-wrap:wrap; margin-top:0.75rem;">';
        if (response.linkUrl && response.linkText) {
          actionsHtml += `<a href="${response.linkUrl}" class="btn btn-navy btn-sm">${response.linkText} →</a>`;
        }
        actionsHtml += `<button type="button" class="btn btn-primary btn-sm btn-open-assistant" data-query="${encodeURIComponent(query)}">Chat in UKH AI Assistant 💬</button>`;
        actionsHtml += '</div>';

        heroAiAnswerAction.innerHTML = actionsHtml;

        const chatBtn = heroAiAnswerAction.querySelector('.btn-open-assistant');
        if (chatBtn) {
          chatBtn.addEventListener('click', () => {
            const assistantModal = document.getElementById('ukhAiAssistantModal');
            if (assistantModal) {
              assistantModal.classList.add('active');
              const chatInput = document.getElementById('aiChatInput');
              if (chatInput) {
                chatInput.value = query;
              }
              const chatForm = document.getElementById('aiChatForm');
              if (chatForm) {
                chatForm.dispatchEvent(new Event('submit'));
              }
            }
          });
        }
      }, 300);
    }

    heroAiForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleHeroAIQuery(heroAiInput.value);
    });

    promptChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const q = chip.getAttribute('data-query') || chip.textContent.trim();
        handleHeroAIQuery(q);
      });
    });

    if (btnCloseHeroAiAnswer) {
      btnCloseHeroAiAnswer.addEventListener('click', () => {
        heroAiResponseBox.classList.remove('active');
      });
    }
  }

  // 9. Initialize Back to Top Buttons (Floating & Footer)
  function initBackToTop() {
    const floatingBtn = document.getElementById('backToTopBtn');
    const footerBtns = document.querySelectorAll('.btn-footer-back-to-top');

    if (floatingBtn) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 320) {
          floatingBtn.classList.add('visible');
        } else {
          floatingBtn.classList.remove('visible');
        }
      }, { passive: true });

      floatingBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    footerBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    });
  }

  // Invoke all feature initializers
  initAIAssistant();
  initAIProgrammeFinder();
  initAIPersonalization();
  initAIAdmissionsGuide();
  initProgrammeDetailAI();
  initCampusAndResearchAI();
  initParallaxSections();
  initHeroAIConsole();
  initBackToTop();
});

