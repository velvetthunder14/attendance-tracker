// Default Seed Data
const DEFAULT_CATEGORIES = [
  {
    id: 'cat-1',
    title: 'Tuitions',
    schedule: 'Upcoming: Tomorrow, 7:00 PM',
    icon: 'school',
    status: 'active'
  },
  {
    id: 'cat-2',
    title: 'Gym',
    schedule: 'Upcoming: Sat 25 Apr, 7:00 PM',
    icon: 'fitness_center',
    status: 'active'
  },
  {
    id: 'cat-3',
    title: 'Maid',
    schedule: 'Upcoming: Tomorrow, 11:00 AM',
    icon: 'cleaning_services',
    status: 'inactive'
  }
];

const DEFAULT_MEMBERS = [
  {
    id: 'mem-1',
    categoryId: 'cat-1',
    name: 'Sarah Jenkins',
    subtitle: 'Chemistry XI',
    schedule: 'Upcoming: Tomorrow, 7:00 PM',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    schedules: [{ day: 'Thu', startTime: '19:00', endTime: '20:00' }]
  },
  {
    id: 'mem-2',
    categoryId: 'cat-1',
    name: 'Michael Ross',
    subtitle: 'Physics X',
    schedule: 'Upcoming: Today, 6:30 PM',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    schedules: [{ day: 'Wed', startTime: '18:30', endTime: '19:30' }]
  },
  {
    id: 'mem-3',
    categoryId: 'cat-1',
    name: 'Elena Gilbert',
    subtitle: 'Biology XII',
    schedule: 'Upcoming: Sat 25 Apr, 7:00 PM',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    schedules: [{ day: 'Sat', startTime: '19:00', endTime: '20:00' }]
  },
  {
    id: 'mem-4',
    categoryId: 'cat-1',
    name: 'Robert Quinn',
    subtitle: 'Advance Math XII',
    schedule: 'Upcoming: Sun 26 Apr, 11:00 AM',
    status: 'inactive',
    avatar: '',
    schedules: [{ day: 'Sun', startTime: '11:00', endTime: '12:00' }]
  },
  {
    id: 'mem-5',
    categoryId: 'cat-2',
    name: 'John Doe',
    subtitle: 'Cardio Training',
    schedule: 'Upcoming: Sat 25 Apr, 7:00 PM',
    status: 'active',
    avatar: '',
    schedules: [{ day: 'Sat', startTime: '19:00', endTime: '20:00' }]
  },
  {
    id: 'mem-6',
    categoryId: 'cat-3',
    name: 'Jane Smith',
    subtitle: 'Cleaning',
    schedule: 'Upcoming: Tomorrow, 11:00 AM',
    status: 'active',
    avatar: '',
    schedules: [{ day: 'Thu', startTime: '11:00', endTime: '12:00' }]
  }
];


// SVG Icons Mapping for dynamic rendering
const ICONS = {
  school: `<svg viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91v6.27h2V9L12 3z"/></svg>`,
  fitness_center: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z" /><path d="m2.5 21.5 1.4-1.4" /><path d="m20.1 3.9 1.4-1.4" /><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z" /><path d="m9.6 14.4 4.8-4.8" /></svg>`,
  cleaning_services: `<svg viewBox="0 0 24 24"><path d="M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-2.76-2.24-5-5-5zm-5-8h2v8h-2V3zm7 17H6v-4c0-1.65 1.35-3 3-3h6c1.65 0 3 1.35 3 3v4z"/></svg>`,
  language: `<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56-.6 1.11-1.06 2.31-1.38 3.56zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>`,
  shopping_cart: `<svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>`,
  restaurant: `<svg viewBox="0 0 24 24"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>`,
  language: `<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56-.6 1.11-1.06 2.31-1.38 3.56zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>`,
  work: `<svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>`,
  music_note: `<svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>`,
  favorite: `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
  directions_bus: `<svg viewBox="0 0 24 24"><path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/></svg>`
};

// Application State class
class App {
  constructor() {
    this.categories = [];
    this.members = [];
    this.currentView = 'categories'; // 'categories' or 'members'
    this.currentCategoryId = null;

    this.currentFilter = 'all';
    this.selectedIcon = 'school';
    this.selectedStatus = 'active';
    this.editingCategoryId = null;

    this.memberFilter = 'all';
    this.memberSearchQuery = '';
    this.memberStatus = 'active';
    this.editingMemberId = null;

    // Attendance View State
    this.attendanceLogs = [];
    this.attendanceActiveDate = new Date();
    this.attendanceActiveMemberId = null;
    this.sessionSelectedStatus = 'present';
    this.calendarInitialized = false;
    this.calendarExpanded = false;

    this.init();
  }

  init() {
    // Register Service Worker for PWA
    this.registerServiceWorker();

    // Load or Seed local data
    this.loadData();

    // Cache DOM references
    this.categoriesGrid = document.getElementById('categories-grid');
    this.filterChips = document.querySelectorAll('#categories-view .filter-chip');
    this.addCategoryFab = document.getElementById('add-category-fab');
    this.modalOverlay = document.getElementById('modal-overlay');
    this.closeModalBtn = document.getElementById('close-modal-btn');
    this.addCategoryForm = document.getElementById('add-category-form');
    this.iconOptions = document.querySelectorAll('.icon-option');
    this.navItems = document.querySelectorAll('.nav-item');
    this.toast = document.getElementById('toast');

    // Status Selector References
    this.statusCardActive = document.getElementById('status-card-active');
    this.statusCardInactive = document.getElementById('status-card-inactive');
    this.statusDotActive = document.getElementById('status-dot-active');
    this.statusDotInactive = document.getElementById('status-dot-inactive');

    // Custom Scrollbar References
    this.customScrollbar = document.getElementById('custom-scrollbar');
    this.customScrollbarThumb = document.getElementById('custom-scrollbar-thumb');
    this.scrollTimeout = null;

    // Members view DOM references
    this.categoriesView = document.getElementById('categories-view');
    this.membersView = document.getElementById('members-view');
    this.membersGrid = document.getElementById('members-grid');
    this.backBtn = document.getElementById('back-btn');
    this.menuBtn = document.getElementById('menu-btn');
    this.profileBtn = document.getElementById('profile-btn');
    this.addMemberFab = document.getElementById('add-member-fab');

    this.categorySwitcherTitle = document.getElementById('category-switcher-title');
    this.switcherDropdown = document.getElementById('switcher-dropdown');
    this.memberSearchInput = document.getElementById('member-search-input');
    this.clearSearchBtn = document.getElementById('clear-search-btn');

    // Profile Editor References (now inside bottom sheet modal)
    this.profileEditorView = document.getElementById('profile-editor-view');
    this.memberModalOverlay = document.getElementById('member-modal-overlay');
    this.closeMemberModalBtn = document.getElementById('close-member-modal-btn');
    this.memberModalTitle = document.getElementById('member-modal-title');
    this.profileEditorForm = document.getElementById('profile-editor-form');
    this.profileAvatarInput = document.getElementById('profile-avatar-input');
    this.avatarPreviewContainer = document.getElementById('avatar-preview-container');
    this.profileNameInput = document.getElementById('profile-name-input');
    this.profileSubtitleInput = document.getElementById('profile-subtitle-input');
    this.profileCategoryInput = document.getElementById('profile-category-input');
    this.scheduleRowsContainer = document.getElementById('schedule-rows-container');
    this.addScheduleRowBtn = document.getElementById('add-schedule-row-btn');
    this.profileTogglesList = document.getElementById('profile-toggles-list');
    this.addToggleInput = document.getElementById('add-toggle-input');
    this.profileTagsList = document.getElementById('profile-tags-list');
    this.addTagBtn = document.getElementById('add-tag-btn');
    this.createProfileBtn = document.getElementById('create-profile-btn');
    this.headerSaveBtn = document.getElementById('header-save-btn');

    // Member Activity Status References
    this.memberStatusCardActive = document.getElementById('profile-status-active');
    this.memberStatusCardInactive = document.getElementById('profile-status-inactive');
    this.memberStatusDotActive = document.getElementById('profile-dot-active');
    this.memberStatusDotInactive = document.getElementById('profile-dot-inactive');

    // Attendance View DOM references
    this.attendanceView = document.getElementById('attendance-view');
    this.attendanceAvatar = document.getElementById('attendance-avatar');
    this.attendanceMemberName = document.getElementById('attendance-member-name');
    this.attendanceMemberSubtitle = document.getElementById('attendance-member-subtitle');
    this.attendanceTotalValue = document.getElementById('attendance-total-value');
    this.attendanceUpcomingDate = document.getElementById('attendance-upcoming-date');
    this.attendanceUpcomingSubtext = document.getElementById('attendance-upcoming-subtext');
    this.attendanceCalendarMonthYear = document.getElementById('attendance-calendar-month-year');
    this.calendarTodayBtn = document.getElementById('calendar-today-btn');
    this.calendarPrevBtn = document.getElementById('calendar-prev-btn');
    this.calendarNextBtn = document.getElementById('calendar-next-btn');
    this.calendarDaysStrip = document.getElementById('calendar-days-strip');
    this.calendarGridView = document.getElementById('calendar-grid-view');
    this.calendarChevronToggle = document.querySelector('.calendar-chevron-toggle');
    this.sessionLogCard = document.getElementById('session-log-card');
    this.sessionLogTitle = document.getElementById('session-log-title');
    this.sessionLogSubtext = document.getElementById('session-log-subtext');
    this.sessionLogDetailsContainer = document.getElementById('session-log-details-container');
    this.sessionLogActionBtn = document.getElementById('session-log-action-btn');
    this.sessionLogDropdown = document.getElementById('session-log-dropdown');

    // Session Log Modal references
    this.sessionModalOverlay = document.getElementById('session-modal-overlay');
    this.closeSessionModalBtn = document.getElementById('close-session-modal-btn');
    this.sessionModalTitle = document.getElementById('session-modal-title');
    this.sessionLogForm = document.getElementById('session-log-form');
    this.sessionCardPresent = document.getElementById('session-card-present');
    this.sessionCardAbsent = document.getElementById('session-card-absent');
    this.sessionDotPresent = document.getElementById('session-dot-present');
    this.sessionDotAbsent = document.getElementById('session-dot-absent');
    this.sessionTogglesContainer = document.getElementById('session-toggles-container');
    this.sessionTogglesList = document.getElementById('session-toggles-list');
    this.sessionTagsContainer = document.getElementById('session-tags-container');
    this.sessionTagsList = document.getElementById('session-tags-list');
    this.sessionNotesInput = document.getElementById('session-notes-input');
    this.activityMonthTitle = document.getElementById('activity-month-title');
    this.activityStatsList = document.getElementById('activity-stats-list');

    // Bind Event Listeners
    this.bindEvents();

    // Initial render
    this.render();
  }

  // Load data from localStorage or seed with defaults
  loadData() {
    const localCats = localStorage.getItem('attendance_categories');
    const localMems = localStorage.getItem('attendance_members');

    if (localCats) {
      try {
        this.categories = JSON.parse(localCats);
      } catch (err) {
        console.error('Error parsing categories from local storage:', err);
        this.categories = DEFAULT_CATEGORIES;
      }
    } else {
      this.categories = DEFAULT_CATEGORIES;
    }

    if (localMems) {
      try {
        this.members = JSON.parse(localMems);
      } catch (err) {
        console.error('Error parsing members from local storage:', err);
        this.members = DEFAULT_MEMBERS;
      }
    } else {
      this.members = DEFAULT_MEMBERS;
    }

    // Ensure all existing members have necessary arrays
    this.members.forEach(mem => {
      if (!mem.schedules) mem.schedules = [];
      if (!mem.toggles) mem.toggles = [];
      if (!mem.tags) mem.tags = [];
      // Re-save upcoming schedule value
      mem.schedule = this.getUpcomingScheduleText(mem);
    });

    const localLogs = localStorage.getItem('attendance_logs');
    if (localLogs) {
      try {
        this.attendanceLogs = JSON.parse(localLogs);
      } catch (err) {
        console.error('Error parsing attendance logs from local storage:', err);
        this.attendanceLogs = [];
      }
    } else {
      this.attendanceLogs = [];
    }

    this.saveData();
  }

  // Save active categories and members state back to localStorage
  saveData() {
    localStorage.setItem('attendance_categories', JSON.stringify(this.categories));
    localStorage.setItem('attendance_members', JSON.stringify(this.members));
    localStorage.setItem('attendance_logs', JSON.stringify(this.attendanceLogs));
  }

  // Event handler bindings
  bindEvents() {
    // Category Filter Chips
    this.filterChips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        this.filterChips.forEach(c => c.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.currentFilter = e.currentTarget.getAttribute('data-filter');
        this.render();
      });
    });

    // Add Category Fab click to trigger Modal
    this.addCategoryFab.addEventListener('click', () => {
      this.setStatus('active');
      this.showModal(true);
    });
    this.closeModalBtn.addEventListener('click', () => this.showModal(false));
    this.modalOverlay.addEventListener('click', (e) => {
      if (e.target === this.modalOverlay) this.showModal(false);
    });

    // Icon selector picker inside form
    this.iconOptions.forEach(opt => {
      opt.addEventListener('click', (e) => {
        this.iconOptions.forEach(o => o.classList.remove('selected'));
        e.currentTarget.classList.add('selected');
        this.selectedIcon = e.currentTarget.getAttribute('data-icon');
      });
    });

    // Activity Status Toggle Card Clicks
    if (this.statusCardActive && this.statusCardInactive) {
      this.statusCardActive.addEventListener('click', () => this.setStatus('active'));
      this.statusCardInactive.addEventListener('click', () => this.setStatus('inactive'));
    }

    if (this.memberStatusCardActive && this.memberStatusCardInactive) {
      this.memberStatusCardActive.addEventListener('click', () => this.setMemberStatus('active'));
      this.memberStatusCardInactive.addEventListener('click', () => this.setMemberStatus('inactive'));
    }

    // Handle Category Form Submission
    this.addCategoryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (this.editingCategoryId) {
        this.handleUpdateCategory();
      } else {
        this.handleCreateCategory();
      }
    });

    // Back Navigation Btn Click (Context Aware)
    this.backBtn.addEventListener('click', () => {
      if (this.currentView === 'attendance') {
        this.switchView('members', this.currentCategoryId);
      } else {
        this.switchView('categories');
      }
    });

    // Switcher Dropdown Click
    this.categorySwitcherTitle.addEventListener('click', (e) => {
      e.stopPropagation();
      this.categorySwitcherTitle.parentElement.classList.toggle('active');
      this.switcherDropdown.classList.toggle('active');
    });

    // Member Filters Chips Click
    const memberChips = document.querySelectorAll('[data-member-filter]');
    memberChips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        memberChips.forEach(c => c.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.memberFilter = e.currentTarget.getAttribute('data-member-filter');
        this.renderMembers();
      });
    });

    // Member Search Input keyup/input
    this.memberSearchInput.addEventListener('input', (e) => {
      this.memberSearchQuery = e.target.value.toLowerCase().trim();
      if (this.clearSearchBtn) {
        this.clearSearchBtn.style.display = this.memberSearchQuery ? 'flex' : 'none';
      }
      this.renderMembers();
    });

    if (this.clearSearchBtn) {
      this.clearSearchBtn.addEventListener('click', () => {
        this.memberSearchInput.value = '';
        this.memberSearchQuery = '';
        this.clearSearchBtn.style.display = 'none';
        this.renderMembers();
      });
    }

    // Profile Name Input dynamic initials preview
    this.profileNameInput.addEventListener('input', () => {
      this.updateAvatarPreview(this.tempAvatar);
    });

    // Member Add FAB Click (Opens Member Modal Bottom Sheet)
    this.addMemberFab.addEventListener('click', () => {
      this.showProfileModal(true);
    });

    // Close Member Modal Button
    this.closeMemberModalBtn.addEventListener('click', () => {
      this.showProfileModal(false);
    });

    // Close Member Modal on overlay click
    this.memberModalOverlay.addEventListener('click', (e) => {
      if (e.target === this.memberModalOverlay) this.showProfileModal(false);
    });

    // Profile Editor Avatar Upload Image Picker
    this.profileAvatarInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          this.tempAvatar = evt.target.result;
          this.updateAvatarPreview(this.tempAvatar);
        };
        reader.readAsDataURL(file);
      }
    });

    // Add Schedule Row Btn Click
    this.addScheduleRowBtn.addEventListener('click', () => {
      this.addScheduleRow();
    });

    // Add Toggle input keypress (Enter) or blur to add toggle label
    this.addToggleInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.handleAddToggleLabel();
      }
    });
    this.addToggleInput.addEventListener('blur', () => {
      this.handleAddToggleLabel();
    });

    // Add Tag Button Click
    this.addTagBtn.addEventListener('click', () => {
      this.handleAddTag();
    });

    // Header Save text link click (kept for legacy; save now handled via form submit)
    this.headerSaveBtn.addEventListener('click', () => {
      this.handleSaveProfile();
    });

    // Submit form button trigger
    this.profileEditorForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSaveProfile();
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      // Switcher dropdown click-outside
      if (!e.target.closest('.category-switcher-wrapper')) {
        this.categorySwitcherTitle.parentElement.classList.remove('active');
        this.switcherDropdown.classList.remove('active');
      }

      // Card action dropdown click-outside
      if (!e.target.closest('.card-action-btn') && !e.target.closest('.dropdown-menu')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.classList.remove('active');
        });
      }
    });

    // Bottom Navigation switching tabs
    this.navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        this.navItems.forEach(n => n.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const selectedTab = e.currentTarget.getAttribute('data-tab');

        // Show simulated response for tabs other than home
        if (selectedTab !== 'home') {
          this.showToast(`Selected tab: ${selectedTab.toUpperCase()}`);
        }
      });
    });

    // Attendance Screen Calendar Navigation
    this.calendarTodayBtn.addEventListener('click', () => {
      this.attendanceActiveDate = new Date();
      this.renderAttendanceView(true);
    });
    this.calendarPrevBtn.addEventListener('click', () => {
      const d = new Date(this.attendanceActiveDate);
      d.setMonth(d.getMonth() - 1);
      d.setDate(1);
      this.attendanceActiveDate = d;
      this.renderAttendanceView(true);
    });
    this.calendarNextBtn.addEventListener('click', () => {
      const d = new Date(this.attendanceActiveDate);
      d.setMonth(d.getMonth() + 1);
      d.setDate(1);
      this.attendanceActiveDate = d;
      this.renderAttendanceView(true);
    });
    this.calendarDaysStrip.addEventListener('scroll', () => {
      this.handleCalendarScroll();
    });
    if (this.calendarChevronToggle) {
      this.calendarChevronToggle.addEventListener('click', () => {
        this.calendarExpanded = !this.calendarExpanded;
        this.toggleCalendarView();
      });
    }

    // Session Log Card & Options Dropdown
    this.sessionLogActionBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const activeDateString = this.formatDateString(this.attendanceActiveDate);
      const activeLog = this.attendanceLogs.find(log => log.memberId === this.attendanceActiveMemberId && log.date === activeDateString);

      if (activeLog) {
        this.sessionLogDropdown.classList.toggle('active');
      } else {
        this.sessionLogDropdown.classList.remove('active');
        this.showSessionModal(true);
      }
    });

    document.getElementById('log-session-option').addEventListener('click', (e) => {
      e.stopPropagation();
      this.sessionLogDropdown.classList.remove('active');
      this.showSessionModal(true);
    });

    document.getElementById('clear-session-option').addEventListener('click', (e) => {
      e.stopPropagation();
      this.sessionLogDropdown.classList.remove('active');
      this.handleDeleteSessionLog();
    });

    // Session Modal Present/Absent status toggle cards
    this.sessionCardPresent.addEventListener('click', () => this.setSessionStatus('present'));
    this.sessionCardAbsent.addEventListener('click', () => this.setSessionStatus('absent'));

    // Modal close and overlay click handlers
    this.closeSessionModalBtn.addEventListener('click', () => this.showSessionModal(false));
    this.sessionModalOverlay.addEventListener('click', (e) => {
      if (e.target === this.sessionModalOverlay) this.showSessionModal(false);
    });

    // Session form submit log
    this.sessionLogForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSaveSessionLog();
    });

    // Custom Scrollbar event listener on main content area
    const mainContent = document.getElementById('main-content');
    mainContent.addEventListener('scroll', () => {
      this.updateCustomScrollbar(mainContent);
    });
  }

  // Switch App Views and toggle headers/buttons
  switchView(view, categoryId = null, memberId = null) {
    this.currentView = view;

    // Reset scroll position to top whenever a new screen is loaded
    const mainContent = document.getElementById('main-content');
    if (mainContent) mainContent.scrollTop = 0;

    if (view === 'categories') {
      this.currentCategoryId = null;
      this.categoriesView.style.display = 'flex';
      this.membersView.style.display = 'none';
      this.attendanceView.style.display = 'none';
      this.profileEditorView.style.display = 'none';

      this.backBtn.style.display = 'none';
      this.menuBtn.style.display = 'flex';
      if (this.profileBtn) this.profileBtn.style.display = 'block';
      this.headerSaveBtn.style.display = 'none';

      this.addCategoryFab.style.display = 'flex';
      this.addMemberFab.style.display = 'none';

      this.render();
    } else if (view === 'members') {
      this.currentCategoryId = categoryId;
      this.categoriesView.style.display = 'none';
      this.membersView.style.display = 'flex';
      this.attendanceView.style.display = 'none';
      this.profileEditorView.style.display = 'none';

      this.backBtn.style.display = 'flex';
      this.menuBtn.style.display = 'none';
      if (this.profileBtn) this.profileBtn.style.display = 'block';
      this.headerSaveBtn.style.display = 'none';

      this.addCategoryFab.style.display = 'none';
      this.addMemberFab.style.display = 'flex';

      // Reset search and filter inputs
      this.memberSearchInput.value = '';
      this.memberSearchQuery = '';
      const memberChips = document.querySelectorAll('[data-member-filter]');
      memberChips.forEach(c => c.classList.remove('active'));
      if (memberChips[0]) memberChips[0].classList.add('active');
      this.memberFilter = 'all';

      this.renderSwitcherDropdown();
      this.renderMembers();
    } else if (view === 'attendance') {
      this.currentCategoryId = categoryId;
      this.attendanceActiveMemberId = memberId;
      this.attendanceActiveDate = new Date();
      this.calendarInitialized = false;
      this.calendarExpanded = false;
      if (this.calendarDaysStrip && this.calendarGridView) {
        this.calendarDaysStrip.style.display = 'flex';
        this.calendarGridView.style.display = 'none';
      }
      this.updateChevronIcon();

      this.categoriesView.style.display = 'none';
      this.membersView.style.display = 'none';
      this.attendanceView.style.display = 'flex';
      this.profileEditorView.style.display = 'none';

      this.backBtn.style.display = 'flex';
      this.menuBtn.style.display = 'none';
      if (this.profileBtn) this.profileBtn.style.display = 'block';
      this.headerSaveBtn.style.display = 'none';

      this.addCategoryFab.style.display = 'none';
      this.addMemberFab.style.display = 'none';

      this.renderAttendanceView();
    }
  }

  // Render switcher options dropdown list
  renderSwitcherDropdown() {
    const currentCat = this.categories.find(c => c.id === this.currentCategoryId);
    if (currentCat) {
      this.categorySwitcherTitle.innerHTML = `${this.escapeHTML(currentCat.title)} <span class="arrow-down">▼</span>`;
    }

    this.switcherDropdown.innerHTML = '';
    this.categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `switcher-item ${cat.id === this.currentCategoryId ? 'selected' : ''}`;
      btn.textContent = cat.title;
      btn.addEventListener('click', () => {
        this.categorySwitcherTitle.parentElement.classList.remove('active');
        this.switcherDropdown.classList.remove('active');
        this.switchView('members', cat.id);
      });
      this.switcherDropdown.appendChild(btn);
    });
  }

  // Toggle category bottom sheet modal
  showModal(show) {
    if (show) {
      this.modalOverlay.classList.add('active');
      document.getElementById('category-name-input').focus();
    } else {
      this.modalOverlay.classList.remove('active');
      this.addCategoryForm.reset();
      this.selectedIcon = 'school';
      this.iconOptions.forEach(o => o.classList.remove('selected'));
      this.iconOptions[0].classList.add('selected');
      this.setStatus('active');

      // Reset modal texts
      this.editingCategoryId = null;
      document.getElementById('modal-title').textContent = 'New Category';
      const saveBtn = document.getElementById('save-category-btn');
      saveBtn.textContent = 'Create Category';
    }
  }

  // Toggle member profile bottom sheet modal
  showProfileModal(show, memberId = null) {
    if (show) {
      this.initProfileEditor(memberId);
      this.memberModalOverlay.classList.add('active');
      // Scroll the body to the top
      const scrollBody = this.memberModalOverlay.querySelector('.member-sheet-scroll-body');
      if (scrollBody) scrollBody.scrollTop = 0;
    } else {
      this.memberModalOverlay.classList.remove('active');
      this.profileEditorForm.reset();
      this.editingMemberId = null;
      this.tempAvatar = '';
      this.memberModalTitle.textContent = 'New Profile';
      this.createProfileBtn.textContent = 'Create Profile';
      // Clear initials
      const initialsSpan = this.avatarPreviewContainer.querySelector('.avatar-uploader-initials');
      if (initialsSpan) initialsSpan.remove();
      this.avatarPreviewContainer.style.backgroundImage = 'none';
      this.avatarPreviewContainer.querySelector('.avatar-uploader-icon').style.display = 'flex';
    }
  }

  // Set and render category activity status selection
  setStatus(status) {
    this.selectedStatus = status;
    if (status === 'active') {
      this.statusCardActive.classList.add('selected');
      this.statusDotActive.classList.add('selected');
      this.statusCardInactive.classList.remove('selected');
      this.statusDotInactive.classList.remove('selected');
    } else {
      this.statusCardInactive.classList.add('selected');
      this.statusDotInactive.classList.add('selected');
      this.statusCardActive.classList.remove('selected');
      this.statusDotActive.classList.remove('selected');
    }
  }

  // Profile Editor Setup and Initialization
  initProfileEditor(memberId = null) {
    this.editingMemberId = memberId;

    // Populate categories select dropdown list
    this.profileCategoryInput.innerHTML = '';
    this.categories.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat.id;
      opt.textContent = cat.title;
      this.profileCategoryInput.appendChild(opt);
    });

    if (memberId) {
      // EDIT MODE
      const mem = this.members.find(m => m.id === memberId);
      if (mem) {
        this.memberModalTitle.textContent = 'Edit Profile';
        this.createProfileBtn.textContent = 'Save Profile';
        this.profileNameInput.value = mem.name || '';
        this.profileSubtitleInput.value = mem.subtitle || '';
        this.profileCategoryInput.value = mem.categoryId || this.currentCategoryId || '';

        // Load Temp Data
        this.tempAvatar = mem.avatar || '';
        this.tempSchedules = mem.schedules ? JSON.parse(JSON.stringify(mem.schedules)) : [];
        this.tempToggles = mem.toggles ? JSON.parse(JSON.stringify(mem.toggles)) : [];
        this.tempTags = mem.tags ? [...mem.tags] : [];
        this.setMemberStatus(mem.status || 'active');
      }
    } else {
      // NEW PROFILE MODE
      this.memberModalTitle.textContent = 'New Profile';
      this.createProfileBtn.textContent = 'Create Profile';
      this.profileNameInput.value = '';
      this.profileSubtitleInput.value = '';
      if (this.currentCategoryId) {
        this.profileCategoryInput.value = this.currentCategoryId;
      } else if (this.categories.length > 0) {
        this.profileCategoryInput.value = this.categories[0].id;
      }

      // Default Temp Data matching screenshot
      this.tempAvatar = '';
      this.tempSchedules = [];
      this.tempToggles = [];
      this.tempTags = [];
      this.setMemberStatus('active');
    }

    // Render Form components
    this.updateAvatarPreview(this.tempAvatar);
    this.renderScheduleRows();
    this.renderToggleLabels();
    this.renderTags();
  }

  updateAvatarPreview(base64) {
    if (base64) {
      this.avatarPreviewContainer.style.backgroundImage = `url(${base64})`;
      this.avatarPreviewContainer.querySelector('.avatar-uploader-icon').style.display = 'none';
      const initialsSpan = this.avatarPreviewContainer.querySelector('.avatar-uploader-initials');
      if (initialsSpan) initialsSpan.remove();
    } else {
      this.avatarPreviewContainer.style.backgroundImage = 'none';

      const name = this.profileNameInput ? this.profileNameInput.value.trim() : '';
      let initials = '';
      if (name) {
        const nameParts = name.split(/\s+/);
        if (nameParts.length > 0) {
          initials += nameParts[0].charAt(0).toUpperCase();
          if (nameParts.length > 1) {
            initials += nameParts[nameParts.length - 1].charAt(0).toUpperCase();
          } else if (nameParts[0].length > 1) {
            initials += nameParts[0].charAt(1).toUpperCase();
          }
        }
      }

      let initialsSpan = this.avatarPreviewContainer.querySelector('.avatar-uploader-initials');
      if (initials) {
        this.avatarPreviewContainer.querySelector('.avatar-uploader-icon').style.display = 'none';
        if (!initialsSpan) {
          initialsSpan = document.createElement('span');
          initialsSpan.className = 'avatar-uploader-initials';
          this.avatarPreviewContainer.appendChild(initialsSpan);
        }
        initialsSpan.textContent = initials;
      } else {
        this.avatarPreviewContainer.querySelector('.avatar-uploader-icon').style.display = 'flex';
        if (initialsSpan) initialsSpan.remove();
      }
    }
  }

  addScheduleRow(day = 'Mon', startTime = '08:00', endTime = '10:00') {
    this.tempSchedules.push({ day, startTime, endTime });
    this.renderScheduleRows();
  }

  renderScheduleRows() {
    this.scheduleRowsContainer.innerHTML = '';
    this.tempSchedules.forEach((row, index) => {
      const div = document.createElement('div');
      div.className = 'schedule-row';
      div.innerHTML = `
        <div class="select-wrapper day-select">
          <select class="form-input select-input day-picker" data-index="${index}">
            <option value="Mon" ${row.day === 'Mon' ? 'selected' : ''}>Mon</option>
            <option value="Tue" ${row.day === 'Tue' ? 'selected' : ''}>Tue</option>
            <option value="Wed" ${row.day === 'Wed' ? 'selected' : ''}>Wed</option>
            <option value="Thu" ${row.day === 'Thu' ? 'selected' : ''}>Thu</option>
            <option value="Fri" ${row.day === 'Fri' ? 'selected' : ''}>Fri</option>
            <option value="Sat" ${row.day === 'Sat' ? 'selected' : ''}>Sat</option>
            <option value="Sun" ${row.day === 'Sun' ? 'selected' : ''}>Sun</option>
          </select>
          <div class="select-arrow">▼</div>
        </div>
        <div class="time-picker-wrapper">
          <input type="time" class="form-input time-picker start-time-picker" data-index="${index}" value="${row.startTime}" required>
        </div>
        <span class="time-separator">-</span>
        <div class="time-picker-wrapper">
          <input type="time" class="form-input time-picker end-time-picker" data-index="${index}" value="${row.endTime}" required>
        </div>
        <button class="delete-row-btn" type="button" data-index="${index}" aria-label="Delete row">
          <svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
        </button>
      `;

      // Bind dynamic inputs
      div.querySelector('.day-picker').addEventListener('change', (e) => {
        const idx = parseInt(e.target.getAttribute('data-index'));
        this.tempSchedules[idx].day = e.target.value;
      });

      div.querySelector('.start-time-picker').addEventListener('change', (e) => {
        const idx = parseInt(e.target.getAttribute('data-index'));
        this.tempSchedules[idx].startTime = e.target.value;
      });

      div.querySelector('.end-time-picker').addEventListener('change', (e) => {
        const idx = parseInt(e.target.getAttribute('data-index'));
        this.tempSchedules[idx].endTime = e.target.value;
      });

      div.querySelector('.delete-row-btn').addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.getAttribute('data-index'));
        this.tempSchedules.splice(idx, 1);
        this.renderScheduleRows();
      });

      this.scheduleRowsContainer.appendChild(div);
    });
  }

  handleAddToggleLabel() {
    const value = this.addToggleInput.value.trim();
    if (value) {
      if (!this.tempToggles.some(t => t.label.toLowerCase() === value.toLowerCase())) {
        this.tempToggles.push({ label: value, active: true });
        this.renderToggleLabels();
      }
      this.addToggleInput.value = '';
    }
  }

  renderToggleLabels() {
    this.profileTogglesList.innerHTML = '';
    this.tempToggles.forEach((t, index) => {
      const div = document.createElement('div');
      div.className = 'toggle-pill';
      div.innerHTML = `
        <span>${this.escapeHTML(t.label)}</span>
        <img src="toggle_icon.png" alt="Toggle" class="profile-toggle-img">
        <button type="button" class="remove-pill-btn" data-index="${index}">&times;</button>
      `;

      div.querySelector('.remove-pill-btn').addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.getAttribute('data-index'));
        this.tempToggles.splice(idx, 1);
        this.renderToggleLabels();
      });

      this.profileTogglesList.appendChild(div);
    });
  }

  // Set and render member activity status selection
  setMemberStatus(status) {
    this.memberStatus = status;
    if (status === 'active') {
      this.memberStatusCardActive.classList.add('selected');
      this.memberStatusDotActive.classList.add('selected');
      this.memberStatusCardInactive.classList.remove('selected');
      this.memberStatusDotInactive.classList.remove('selected');
    } else {
      this.memberStatusCardInactive.classList.add('selected');
      this.memberStatusDotInactive.classList.add('selected');
      this.memberStatusCardActive.classList.remove('selected');
      this.memberStatusDotActive.classList.remove('selected');
    }
  }

  // Helper to dynamically calculate active member count per category
  getCategoryMemberCount(catId) {
    return this.members.filter(m => m.categoryId === catId && m.status === 'active').length;
  }

  // Handle form submission to create new category
  handleCreateCategory() {
    const nameInput = document.getElementById('category-name-input');

    const newCategory = {
      id: `cat-${Date.now()}`,
      title: nameInput.value.trim(),
      schedule: 'Upcoming: Everyday',
      icon: this.selectedIcon,
      status: this.selectedStatus
    };

    // Add to state and save
    this.categories.push(newCategory);
    this.saveData();

    // Reset, show alert, render
    this.showModal(false);
    this.showToast(`Category "${newCategory.title}" created successfully!`);
    this.render();
  }

  showEditModal(id) {
    const cat = this.categories.find(c => c.id === id);
    if (cat) {
      this.editingCategoryId = id;

      // Populate form inputs
      document.getElementById('category-name-input').value = cat.title;

      // Set selected icon
      this.selectedIcon = cat.icon;
      this.iconOptions.forEach(opt => {
        if (opt.getAttribute('data-icon') === cat.icon) {
          opt.classList.add('selected');
        } else {
          opt.classList.remove('selected');
        }
      });

      // Set selected status
      this.setStatus(cat.status || 'active');

      // Update modal texts
      document.getElementById('modal-title').textContent = 'Edit Category';
      const saveBtn = document.getElementById('save-category-btn');
      saveBtn.textContent = 'Save Changes';

      this.showModal(true);
    }
  }

  handleUpdateCategory() {
    const nameInput = document.getElementById('category-name-input');

    const cat = this.categories.find(c => c.id === this.editingCategoryId);
    if (cat) {
      cat.title = nameInput.value.trim();
      cat.icon = this.selectedIcon;
      cat.status = this.selectedStatus;
      this.saveData();
      this.showModal(false);
      this.showToast(`Category "${cat.title}" updated successfully!`);
      this.render();
    }
  }

  handleDeleteCategory(id) {
    this.categories = this.categories.filter(c => c.id !== id);
    // Cascade delete members for this category
    this.members = this.members.filter(m => m.categoryId !== id);
    this.saveData();
    this.showToast("Category and its members deleted successfully!");
    this.render();
  }

  handleAddTag() {
    const value = prompt('Enter tag name:');
    if (value && value.trim()) {
      const tag = value.trim();
      if (!this.tempTags.some(t => t.toLowerCase() === tag.toLowerCase())) {
        this.tempTags.push(tag);
        this.renderTags();
      }
    }
  }

  renderTags() {
    this.profileTagsList.innerHTML = '';
    this.tempTags.forEach((tag, index) => {
      const div = document.createElement('div');
      div.className = 'tag-pill';
      div.innerHTML = `
        <span>${this.escapeHTML(tag)}</span>
        <button type="button" class="remove-pill-btn" data-index="${index}">&times;</button>
      `;

      div.querySelector('.remove-pill-btn').addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.getAttribute('data-index'));
        this.tempTags.splice(idx, 1);
        this.renderTags();
      });

      this.profileTagsList.appendChild(div);
    });

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'add-tag-dashed-btn';
    btn.id = 'add-tag-btn';
    btn.innerHTML = `
      <svg class="plus-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      Add Tag
    `;
    btn.addEventListener('click', () => this.handleAddTag());
    this.profileTagsList.appendChild(btn);
  }

  handleSaveProfile() {
    const name = this.profileNameInput.value.trim();
    const subtitle = this.profileSubtitleInput.value.trim();
    const categoryId = this.profileCategoryInput.value;

    if (!name || !categoryId) {
      this.showToast('Please fill all required details!');
      return;
    }



    const compiledScheduleText = this.compileScheduleText(this.tempSchedules);

    if (this.editingMemberId) {
      const mem = this.members.find(m => m.id === this.editingMemberId);
      if (mem) {
        mem.name = name;
        mem.subtitle = subtitle;
        mem.categoryId = categoryId;
        mem.avatar = this.tempAvatar;
        mem.schedules = this.tempSchedules;
        mem.toggles = this.tempToggles;
        mem.tags = this.tempTags;
        mem.schedule = compiledScheduleText;
        mem.status = this.memberStatus;
        this.showToast(`Profile "${name}" updated successfully!`);
      }
    } else {
      const newMember = {
        id: `mem-${Date.now()}`,
        categoryId: categoryId,
        name: name,
        subtitle: subtitle,
        schedule: compiledScheduleText,
        status: this.memberStatus,
        avatar: this.tempAvatar,
        schedules: this.tempSchedules,
        toggles: this.tempToggles,
        tags: this.tempTags
      };
      this.members.push(newMember);
      this.showToast(`Profile "${name}" created successfully!`);
    }

    const savedMemberId = this.editingMemberId;
    this.saveData();
    this.showProfileModal(false);
    this.renderMembers();

    if (this.currentView === 'attendance' && savedMemberId === this.attendanceActiveMemberId) {
      this.renderAttendanceView(false);
    }
  }

  compileScheduleText(schedules) {
    if (!schedules || schedules.length === 0) return 'Upcoming:';
    const first = schedules[0];
    let [hours, minutes] = first.startTime.split(':');
    hours = parseInt(hours);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `Upcoming: ${first.day}, ${hours}:${minutes} ${ampm}`;
  }

  getUpcomingScheduleText(mem) {
    if (!mem.schedules || mem.schedules.length === 0) {
      if (mem.schedule === 'Upcoming: Everyday' || mem.schedule === 'UPCOMING: EVERYDAY' || !mem.schedule) return 'UPCOMING:';
      return mem.schedule.toUpperCase();
    }

    const now = new Date();
    const DAY_MAP = { 'Sun': 0, 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6 };
    let nextOccurrence = null;

    mem.schedules.forEach(sch => {
      const targetDay = DAY_MAP[sch.day];
      if (targetDay === undefined) return;

      const [sh, sm] = sch.startTime.split(':').map(Number);

      let daysUntil = targetDay - now.getDay();
      if (daysUntil < 0) {
        daysUntil += 7;
      } else if (daysUntil === 0) {
        const targetTime = sh * 60 + sm;
        const currentTime = now.getHours() * 60 + now.getMinutes();
        if (targetTime < currentTime) {
          daysUntil += 7;
        }
      }

      const targetDate = new Date(now);
      targetDate.setDate(now.getDate() + daysUntil);
      targetDate.setHours(sh, sm, 0, 0);

      if (!nextOccurrence || targetDate.getTime() < nextOccurrence.time) {
        nextOccurrence = {
          date: targetDate,
          time: targetDate.getTime(),
          day: sch.day,
          hours: sh,
          minutes: sm
        };
      }
    });

    if (!nextOccurrence) {
      return mem.schedule ? mem.schedule.toUpperCase() : 'UPCOMING: EVERYDAY';
    }

    const sh = nextOccurrence.hours;
    const sm = nextOccurrence.minutes;
    const ampm = sh >= 12 ? 'PM' : 'AM';
    const displayHours = sh % 12 || 12;
    const displayMinutes = String(sm).padStart(2, '0');
    const timeStr = `${displayHours}:${displayMinutes} ${ampm}`;

    const targetDate = nextOccurrence.date;
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);

    let dayLabel = '';
    if (targetDate.toDateString() === now.toDateString()) {
      dayLabel = 'TODAY';
    } else if (targetDate.toDateString() === tomorrow.toDateString()) {
      dayLabel = 'TOMORROW';
    } else {
      const monthsShort = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      dayLabel = `${nextOccurrence.day.toUpperCase()} ${targetDate.getDate()} ${monthsShort[targetDate.getMonth()]}`;
    }

    return `UPCOMING: ${dayLabel}, ${timeStr}`;
  }

  getCategoryUpcomingText(cat) {
    const catMembers = this.members.filter(m => m.categoryId === cat.id && m.status === 'active');
    if (catMembers.length === 0) {
      return 'UPCOMING:';
    }

    let earliestTime = null;
    let earliestText = '';

    catMembers.forEach(mem => {
      const now = new Date();
      const DAY_MAP = { 'Sun': 0, 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6 };
      if (!mem.schedules) return;
      mem.schedules.forEach(sch => {
        const targetDay = DAY_MAP[sch.day];
        if (targetDay === undefined) return;
        const [sh, sm] = sch.startTime.split(':').map(Number);

        let daysUntil = targetDay - now.getDay();
        if (daysUntil < 0) {
          daysUntil += 7;
        } else if (daysUntil === 0) {
          const targetTime = sh * 60 + sm;
          const currentTime = now.getHours() * 60 + now.getMinutes();
          if (targetTime < currentTime) {
            daysUntil += 7;
          }
        }
        const targetDate = new Date(now);
        targetDate.setDate(now.getDate() + daysUntil);
        targetDate.setHours(sh, sm, 0, 0);

        if (earliestTime === null || targetDate.getTime() < earliestTime) {
          earliestTime = targetDate.getTime();
          earliestText = this.getUpcomingScheduleText(mem);
        }
      });
    });

    return earliestText || 'UPCOMING:';
  }

  showMemberEditModal(id) {
    this.showProfileModal(true, id);
  }

  handleDeleteMember(id) {
    this.members = this.members.filter(m => m.id !== id);
    this.saveData();
    this.showToast("Member removed successfully!");
    this.renderMembers();
  }

  // Toast message notification overlay
  showToast(message) {
    this.toast.textContent = message;
    this.toast.classList.add('show');
    setTimeout(() => {
      this.toast.classList.remove('show');
    }, 2800);
  }

  // Render Categories to bento grid list
  render() {
    this.categoriesGrid.innerHTML = '';

    // Filter categories based on selection, and sort so active categories are at the top
    const filtered = this.categories
      .filter(cat => {
        if (this.currentFilter === 'all') return true;
        return cat.status === this.currentFilter;
      })
      .sort((a, b) => {
        if (a.status === 'active' && b.status === 'inactive') return -1;
        if (a.status === 'inactive' && b.status === 'active') return 1;
        return 0;
      });

    // Render empty state if no categories exist
    if (filtered.length === 0) {
      this.categoriesGrid.innerHTML = `
        <div class="category-card" style="text-align: center; padding: 32px 16px; border-style: dashed; align-items: center; justify-content: center;">
          <svg style="width: 48px; height: 48px; fill: var(--outline); margin-bottom: 12px;" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
          <h3 class="category-title" style="color: var(--outline);">No Categories Found</h3>
          <p style="font-size: 13px; color: var(--on-surface-variant); margin-top: 4px;">Tap the + button to create a new attendance tracking category.</p>
        </div>
      `;
      return;
    }

    // Render category cards
    filtered.forEach(cat => {
      const card = document.createElement('div');
      card.className = `category-card ${cat.status === 'inactive' ? 'inactive' : ''}`;

      const svgIcon = ICONS[cat.icon] || ICONS.school;
      const count = this.getCategoryMemberCount(cat.id);
      const memberSuffix = count === 1 ? 'MEMBER' : 'MEMBERS';

      card.innerHTML = `
        <div class="card-header" style="position: relative;">
          <div class="category-info">
            <div class="category-icon-wrapper ${cat.icon}">
              ${svgIcon}
            </div>
            <div class="text-group">
              <h3 class="category-title">${this.escapeHTML(cat.title)}</h3>
              <p class="upcoming-indicator">${this.escapeHTML(this.getCategoryUpcomingText(cat))}</p>
            </div>
          </div>
          <button class="card-action-btn" aria-label="More options">
            <svg viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
          </button>
          <div class="dropdown-menu" id="dropdown-${cat.id}">
            <button class="dropdown-item edit-option" data-id="${cat.id}">
              <svg style="width: 16px; height: 16px; fill: currentColor; margin-right: 4px;" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
              Edit
            </button>
            <button class="dropdown-item delete-option delete" data-id="${cat.id}">
              <svg style="width: 16px; height: 16px; fill: currentColor; margin-right: 4px;" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
              Delete
            </button>
          </div>
        </div>
        <div class="card-footer">
          <span class="member-count">${count} ${memberSuffix}</span>
          <div class="chevron-arrow">
            <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
          </div>
        </div>
      `;

      // Prevent card detail navigation click when clicking the options button
      const optionsBtn = card.querySelector('.card-action-btn');
      const dropdown = card.querySelector('.dropdown-menu');

      optionsBtn.addEventListener('click', (e) => {
        e.stopPropagation();

        // Close all other dropdowns first
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          if (menu !== dropdown) menu.classList.remove('active');
        });

        // Toggle current dropdown
        dropdown.classList.toggle('active');
      });

      const editBtn = card.querySelector('.edit-option');
      editBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.remove('active');
        this.showEditModal(cat.id);
      });

      const deleteBtn = card.querySelector('.delete-option');
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.remove('active');
        if (confirm(`Are you sure you want to delete the "${cat.title}" category?`)) {
          this.handleDeleteCategory(cat.id);
        }
      });

      // Handle card detail navigation click
      card.addEventListener('click', () => {
        this.switchView('members', cat.id);
      });

      this.categoriesGrid.appendChild(card);
    });
  }

  // Render Members List belonging to the current selected category
  renderMembers() {
    this.membersGrid.innerHTML = '';

    // Filter members for current category, status and search query
    const filtered = this.members
      .filter(m => m.categoryId === this.currentCategoryId)
      .filter(m => {
        if (this.memberFilter === 'all') return true;
        return m.status === this.memberFilter;
      })
      .filter(m => {
        if (!this.memberSearchQuery) return true;
        return m.name.toLowerCase().includes(this.memberSearchQuery) ||
          m.subtitle.toLowerCase().includes(this.memberSearchQuery);
      })
      .sort((a, b) => {
        if (a.status === 'active' && b.status === 'inactive') return -1;
        if (a.status === 'inactive' && b.status === 'active') return 1;
        return 0;
      });

    if (filtered.length === 0) {
      this.membersGrid.innerHTML = `
        <div class="member-card" style="text-align: center; padding: 32px 16px; border-style: dashed; align-items: center; justify-content: center; cursor: default; box-shadow: none;">
          <svg style="width: 48px; height: 48px; fill: var(--outline); margin-bottom: 12px;" viewBox="0 0 24 24">
            <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
          <h3 class="member-name" style="color: var(--outline);">No Members Found</h3>
          <p style="font-size: 13px; color: var(--on-surface-variant); margin-top: 4px;">Tap the + button to add a member to this category.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(mem => {
      const card = document.createElement('div');
      card.className = `member-card ${mem.status === 'inactive' ? 'inactive' : ''}`;

      let initials = '';
      if (mem.name) {
        const nameParts = mem.name.trim().split(/\s+/);
        if (nameParts.length > 0) {
          initials += nameParts[0].charAt(0).toUpperCase();
          if (nameParts.length > 1) {
            initials += nameParts[nameParts.length - 1].charAt(0).toUpperCase();
          } else if (nameParts[0].length > 1) {
            initials += nameParts[0].charAt(1).toUpperCase();
          }
        }
      }
      if (!initials) initials = '??';

      const avatarHTML = mem.avatar
        ? `<img src="${this.escapeHTML(mem.avatar)}" alt="${this.escapeHTML(mem.name)}" class="member-avatar">`
        : `<div class="member-placeholder-avatar">
             <span class="member-placeholder-initials">${this.escapeHTML(initials)}</span>
           </div>`;

      card.innerHTML = `
        <div class="member-card-header" style="position: relative;">
          <div class="member-info">
            <div class="member-avatar-wrapper">
              ${avatarHTML}
            </div>
            <div class="member-text-group">
              <h3 class="member-name">${this.escapeHTML(mem.name)}</h3>
              <span class="member-subtitle">${this.escapeHTML(mem.subtitle)}</span>
            </div>
          </div>
          <button class="card-action-btn member-options-btn" aria-label="More options">
            <svg viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
          </button>
          <div class="dropdown-menu" id="dropdown-${mem.id}">
            <button class="dropdown-item edit-option" data-id="${mem.id}">
              <svg style="width: 16px; height: 16px; fill: currentColor; margin-right: 4px;" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
              Edit
            </button>
            <button class="dropdown-item delete-option delete" data-id="${mem.id}">
              <svg style="width: 16px; height: 16px; fill: currentColor; margin-right: 4px;" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
              Delete
            </button>
          </div>
        </div>
        <hr class="member-divider">
        <div class="member-footer">
          <span class="member-upcoming">${this.escapeHTML(this.getUpcomingScheduleText(mem))}</span>
          <div class="member-chevron">
            <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
          </div>
        </div>
      `;

      const optionsBtn = card.querySelector('.member-options-btn');
      const dropdown = card.querySelector('.dropdown-menu');

      optionsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          if (menu !== dropdown) menu.classList.remove('active');
        });
        dropdown.classList.toggle('active');
      });

      const editBtn = card.querySelector('.edit-option');
      editBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.remove('active');
        this.showMemberEditModal(mem.id);
      });

      const deleteBtn = card.querySelector('.delete-option');
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.remove('active');
        if (confirm(`Are you sure you want to remove "${mem.name}"?`)) {
          this.handleDeleteMember(mem.id);
        }
      });

      card.addEventListener('click', () => {
        this.switchView('attendance', this.currentCategoryId, mem.id);
      });

      this.membersGrid.appendChild(card);
    });
  }

  // Toggle between active and inactive category status
  toggleCategoryStatus(id) {
    const cat = this.categories.find(c => c.id === id);
    if (cat) {
      cat.status = cat.status === 'active' ? 'inactive' : 'active';
      this.saveData();
      this.showToast(`"${cat.title}" set to ${cat.status.toUpperCase()}`);
      this.render();
    }
  }

  // Utility to escape user HTML inputs
  escapeHTML(str) {
    return str.replace(/[&<>'"]/g,
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  // PWA Service worker registration script
  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
          .then(reg => console.log('[Service Worker] Registered successfully', reg.scope))
          .catch(err => console.error('[Service Worker] Registration failed:', err));
      });
    }
  }

  // Update custom scrollbar thumb height and position
  updateCustomScrollbar(container) {
    if (!this.customScrollbar || !this.customScrollbarThumb) return;

    const contentHeight = container.scrollHeight;
    const viewportHeight = container.clientHeight;

    // Only show scrollbar if content overflows
    if (contentHeight <= viewportHeight) {
      this.customScrollbar.classList.remove('visible');
      return;
    }

    // Align the scrollbar track dynamically with the scrollable container's bounds
    this.customScrollbar.style.top = `${container.offsetTop}px`;
    this.customScrollbar.style.height = `${viewportHeight}px`;

    const trackHeight = viewportHeight;

    // Calculate thumb height proportionally
    const thumbHeight = Math.max(20, (viewportHeight / contentHeight) * trackHeight);
    this.customScrollbarThumb.style.height = `${thumbHeight}px`;

    // Calculate thumb top position
    const maxScroll = contentHeight - viewportHeight;
    const scrollPercent = container.scrollTop / maxScroll;
    const maxThumbTop = trackHeight - thumbHeight;
    const thumbTop = scrollPercent * maxThumbTop;

    this.customScrollbarThumb.style.top = `${thumbTop}px`;

    // Show scrollbar
    this.customScrollbar.classList.add('visible');

    // Hide scrollbar after scroll stops
    this.scrollTimeout = setTimeout(() => {
      this.customScrollbar.classList.remove('visible');
    }, 800); // Hide after 800ms of inactivity
  }

  // Render Member Attendance Details View
  renderAttendanceView(rebuildCalendar = true) {
    const mem = this.members.find(m => m.id === this.attendanceActiveMemberId);
    if (!mem) return;

    this.renderAttendanceDetails(mem);

    if (rebuildCalendar) {
      if (this.calendarExpanded) {
        this.renderCalendarGridView(mem);
      } else {
        this.renderCalendarStrip(mem);
      }
    }
  }

  // Render non-calendar details (stats, log card, activity list)
  renderAttendanceDetails(mem) {
    // Ensure arrays exist to prevent runtime errors
    if (!mem.toggles) mem.toggles = [];
    if (!mem.tags) mem.tags = [];
    if (!mem.schedules) mem.schedules = [];

    // 1. Member Profile Header details
    let initials = '';
    if (mem.name) {
      const nameParts = mem.name.trim().split(/\s+/);
      if (nameParts.length > 0) {
        initials += nameParts[0].charAt(0).toUpperCase();
        if (nameParts.length > 1) {
          initials += nameParts[nameParts.length - 1].charAt(0).toUpperCase();
        } else if (nameParts[0].length > 1) {
          initials += nameParts[0].charAt(1).toUpperCase();
        }
      }
    }
    if (!initials) initials = '??';

    if (mem.avatar) {
      this.attendanceAvatar.style.backgroundImage = `url(${mem.avatar})`;
      this.attendanceAvatar.innerHTML = '';
    } else {
      this.attendanceAvatar.style.backgroundImage = 'none';
      this.attendanceAvatar.innerHTML = `<span class="member-placeholder-initials" style="font-size: 26px; font-weight: 700; color: var(--primary);">${this.escapeHTML(initials)}</span>`;
      this.attendanceAvatar.style.display = 'flex';
      this.attendanceAvatar.style.alignItems = 'center';
      this.attendanceAvatar.style.justifyContent = 'center';
    }

    this.attendanceMemberName.textContent = mem.name;
    const cat = this.categories.find(c => c.id === mem.categoryId);
    const catTitle = cat ? cat.title : '';
    this.attendanceMemberSubtitle.textContent = `${catTitle} • ${mem.subtitle}`;

    // Edit member handler via dropdown
    const headerOptionsBtn = document.getElementById('header-member-options-btn');
    const headerDropdown = document.getElementById('header-member-dropdown');
    const headerEditBtn = document.getElementById('header-edit-member-btn');

    if (headerOptionsBtn && headerDropdown) {
      // Remove old listeners to prevent duplicates if re-rendered
      const newBtn = headerOptionsBtn.cloneNode(true);
      headerOptionsBtn.parentNode.replaceChild(newBtn, headerOptionsBtn);

      newBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        headerDropdown.classList.toggle('active');
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!newBtn.contains(e.target) && !headerDropdown.contains(e.target)) {
          headerDropdown.classList.remove('active');
        }
      });
    }

    if (headerEditBtn) {
      headerEditBtn.onclick = () => {
        if (headerDropdown) headerDropdown.classList.remove('active');
        this.showMemberEditModal(mem.id);
      };
    }

    // Populate schedule details
    const scheduleList = document.getElementById('attendance-schedule-list');
    if (scheduleList) {
      scheduleList.innerHTML = '';
      if (mem.schedules && mem.schedules.length > 0) {
        mem.schedules.forEach(sch => {
          const div = document.createElement('div');
          div.className = 'schedule-list-item';

          let displayHour = parseInt(sch.startTime.split(':')[0], 10);
          const displayMin = sch.startTime.split(':')[1];
          const ampm = displayHour >= 12 ? 'PM' : 'AM';
          displayHour = displayHour % 12 || 12;

          let endDisplayHour = parseInt(sch.endTime.split(':')[0], 10);
          const endDisplayMin = sch.endTime.split(':')[1];
          const endAmpm = endDisplayHour >= 12 ? 'PM' : 'AM';
          endDisplayHour = endDisplayHour % 12 || 12;

          div.textContent = `${sch.day}, ${displayHour}:${displayMin} ${ampm} - ${endDisplayHour}:${endDisplayMin} ${endAmpm}`;
          scheduleList.appendChild(div);
        });
      } else {
        const div = document.createElement('div');
        div.className = 'schedule-list-item';
        div.textContent = 'No schedule set';
        scheduleList.appendChild(div);
      }
    }

    // Status dot
    const statusDot = this.attendanceAvatar.nextElementSibling;
    if (statusDot) {
      statusDot.className = `attendance-status-dot ${mem.status}`;
      statusDot.style.backgroundColor = mem.status === 'active' ? '#22c55e' : '#94a3b8';
    }

    // 2. Attendance Stat Card - Current Month present count
    const _now = new Date();
    const currentYear = _now.getFullYear();
    const currentMonth = _now.getMonth();
    const monthsLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const monthlyLogs = this.attendanceLogs.filter(log => {
      if (log.memberId !== mem.id) return false;
      const d = new Date(log.date);
      return d.getFullYear() === currentYear && d.getMonth() === currentMonth;
    });

    const presentCount = monthlyLogs.filter(log => log.status === 'present').length;
    this.attendanceTotalValue.textContent = presentCount;

    // Upcoming Stat Card
    let upcomingDateText = '--';
    let upcomingSubtextText = '--';

    const DAY_MAP = { 'Sun': 0, 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6 };
    const DAYS_FULL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let nextOccurrence = null;

    if (mem.schedules && mem.schedules.length > 0) {
      const now = new Date();
      mem.schedules.forEach(sch => {
        const targetDay = DAY_MAP[sch.day];
        if (targetDay === undefined) return;
        const [sh, sm] = sch.startTime.split(':').map(Number);

        let daysUntil = targetDay - now.getDay();
        if (daysUntil < 0) {
          daysUntil += 7;
        } else if (daysUntil === 0) {
          const targetTime = sh * 60 + sm;
          const currentTime = now.getHours() * 60 + now.getMinutes();
          if (targetTime < currentTime) {
            daysUntil += 7;
          }
        }

        const targetDate = new Date(now);
        targetDate.setDate(now.getDate() + daysUntil);
        targetDate.setHours(sh, sm, 0, 0);

        if (!nextOccurrence || targetDate.getTime() < nextOccurrence.time) {
          nextOccurrence = {
            date: targetDate,
            time: targetDate.getTime(),
            day: sch.day,
            hours: sh,
            minutes: sm
          };
        }
      });
    }

    if (nextOccurrence) {
      const targetDate = nextOccurrence.date;
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(now.getDate() + 1);

      const sh = nextOccurrence.hours;
      const sm = nextOccurrence.minutes;
      const ampm = sh >= 12 ? 'PM' : 'AM';
      const displayHours = sh % 12 || 12;
      const displayMinutes = String(sm).padStart(2, '0');
      const timeStr = `${displayHours}:${displayMinutes} ${ampm}`;

      if (targetDate.toDateString() === now.toDateString()) {
        upcomingDateText = 'Today';
        upcomingSubtextText = `${DAYS_FULL[targetDate.getDay()]}, ${timeStr}`;
      } else if (targetDate.toDateString() === tomorrow.toDateString()) {
        upcomingDateText = 'Tomorrow';
        upcomingSubtextText = `${DAYS_FULL[targetDate.getDay()]}, ${timeStr}`;
      } else {
        upcomingDateText = `${targetDate.getDate()} ${MONTHS_SHORT[targetDate.getMonth()]}`;
        upcomingSubtextText = `${DAYS_FULL[targetDate.getDay()]}, ${timeStr}`;
      }
    }

    this.attendanceUpcomingDate.textContent = upcomingDateText;
    this.attendanceUpcomingSubtext.textContent = upcomingSubtextText;

    // Calendar Header Month-Year
    const activeMonth = this.attendanceActiveDate.getMonth();
    const activeYear = this.attendanceActiveDate.getFullYear();
    this.attendanceCalendarMonthYear.textContent = `${monthsLong[activeMonth]} ${activeYear}`;

    this.activityMonthTitle.textContent = `${monthsLong[currentMonth]} Activity`;

    // 4. Session Log Card
    const activeDateString = this.formatDateString(this.attendanceActiveDate);
    const activeLog = this.attendanceLogs.find(log => log.memberId === mem.id && log.date === activeDateString);
    const clearOption = document.getElementById('clear-session-option');

    if (activeLog) {
      this.sessionLogActionBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>';
      this.sessionLogCard.classList.remove('empty');
      this.sessionLogCard.style.backgroundColor = '#d1e7dd'; // light green for present
      this.sessionLogCard.style.boxShadow = '0 8px 20px rgba(209, 231, 221, 0.2)';

      this.sessionLogTitle.textContent = activeLog.status.toUpperCase() === 'PRESENT' ? 'PRESENT' : 'ABSENT';
      if (activeLog.status.toUpperCase() === 'ABSENT') {
        this.sessionLogCard.style.backgroundColor = '#f8d7da'; // light red for absent
        this.sessionLogCard.style.boxShadow = '0 8px 20px rgba(248, 215, 218, 0.2)';
      }

      this.sessionLogSubtext.style.display = 'none';
      this.sessionLogDetailsContainer.style.display = 'flex';
      this.sessionLogDetailsContainer.innerHTML = '';

      let togglesSelected = [];
      if (activeLog.toggles) {
        Object.keys(activeLog.toggles).forEach(k => {
          if (activeLog.toggles[k]) togglesSelected.push(k);
        });
      }

      let tagsSelected = [];
      if (activeLog.tags) {
        Object.keys(activeLog.tags).forEach(k => {
          if (activeLog.tags[k]) tagsSelected.push(k);
        });
      }

      if (togglesSelected.length > 0) {
        const row = document.createElement('div');
        row.className = 'session-detail-row';
        row.innerHTML = `<svg style="width: 16px; height: 16px; fill: currentColor; opacity: 0.7;" viewBox="0 0 24 24"><path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h10c1.65 0 3 1.35 3 3s-1.35 3-3 3zm0-5.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z"/></svg>`;
        togglesSelected.forEach(t => {
          row.innerHTML += `<span class="session-detail-pill">${this.escapeHTML(t)}</span>`;
        });
        this.sessionLogDetailsContainer.appendChild(row);
      }

      if (tagsSelected.length > 0) {
        const row = document.createElement('div');
        row.className = 'session-detail-row';
        row.innerHTML = `<svg style="width: 16px; height: 16px; fill: currentColor; opacity: 0.7;" viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/></svg>`;
        tagsSelected.forEach(t => {
          row.innerHTML += `<span class="session-detail-pill">${this.escapeHTML(t)}</span>`;
        });
        this.sessionLogDetailsContainer.appendChild(row);
      }

      if (activeLog.notes && activeLog.notes.trim().length > 0) {
        const box = document.createElement('div');
        box.className = 'session-notes-box';
        box.textContent = activeLog.notes;
        this.sessionLogDetailsContainer.appendChild(box);
      }

      clearOption.style.display = 'block';
      document.getElementById('log-session-option').innerHTML = `
        <svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/></svg>
        Edit Attendance
      `;
    } else {
      this.sessionLogActionBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>';
      this.sessionLogCard.classList.add('empty');
      this.sessionLogCard.style.backgroundColor = '#fde8e2'; // peach
      this.sessionLogCard.style.boxShadow = '0 8px 20px rgba(253, 232, 226, 0.2)';
      this.sessionLogTitle.textContent = 'No Session Log';
      this.sessionLogSubtext.style.display = 'none';
      this.sessionLogDetailsContainer.style.display = 'none';

      clearOption.style.display = 'none';
      document.getElementById('log-session-option').innerHTML = `
        <svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/></svg>
        Log Attendance
      `;
    }

    // 5. Monthly Activity list
    this.activityMonthTitle.textContent = `${monthsLong[activeMonth]} Activity`;
    this.activityStatsList.innerHTML = '';

    const activeMonthLogs = this.attendanceLogs.filter(log => {
      if (log.memberId !== mem.id) return false;
      const d = new Date(log.date);
      return d.getFullYear() === activeYear && d.getMonth() === activeMonth;
    });

    const activePresentCount = activeMonthLogs.filter(log => log.status === 'present').length;
    const activeAbsentCount = activeMonthLogs.filter(log => log.status === 'absent').length;

    // Status Group (Present & Absent)
    const statusGroup = document.createElement('div');
    statusGroup.className = 'activity-stat-group';

    // Present Row
    const presentRow = document.createElement('div');
    presentRow.className = 'activity-stat-row';
    presentRow.innerHTML = `
      <div class="activity-row-left">
        <div class="activity-row-icon-wrap" style="color: #1a8754; background-color: rgba(26, 135, 84, 0.1);">
          <svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
        </div>
        <span class="activity-row-label">Present</span>
      </div>
      <span class="activity-row-value">${activePresentCount}</span>
    `;
    statusGroup.appendChild(presentRow);

    // Absent Row
    const absentRow = document.createElement('div');
    absentRow.className = 'activity-stat-row';
    absentRow.innerHTML = `
      <div class="activity-row-left">
        <div class="activity-row-icon-wrap" style="color: #d4686e; background-color: rgba(212, 104, 110, 0.1);">
          <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </div>
        <span class="activity-row-label">Absent</span>
      </div>
      <span class="activity-row-value">${activeAbsentCount}</span>
    `;
    statusGroup.appendChild(absentRow);

    this.activityStatsList.appendChild(statusGroup);

    // Toggle label rows
    if (mem.toggles && mem.toggles.length > 0) {
      const toggleGroup = document.createElement('div');
      toggleGroup.className = 'activity-stat-group';

      mem.toggles.forEach(tog => {
        const label = tog.label;
        const count = activeMonthLogs.filter(log => log.toggles && log.toggles[label] === true).length;

        const row = document.createElement('div');
        row.className = 'activity-stat-row';
        row.innerHTML = `
          <div class="activity-row-left">
            <div class="activity-row-icon-wrap">
              <svg viewBox="0 0 24 24"><path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h10c1.65 0 3 1.35 3 3s-1.35 3-3 3zm0-5.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z"/></svg>
            </div>
            <span class="activity-row-label">${this.escapeHTML(label)}</span>
          </div>
          <span class="activity-row-value">${count}</span>
        `;
        toggleGroup.appendChild(row);
      });
      this.activityStatsList.appendChild(toggleGroup);
    }

    // Tag rows
    if (mem.tags && mem.tags.length > 0) {
      const tagGroup = document.createElement('div');
      tagGroup.className = 'activity-stat-group';

      mem.tags.forEach(tag => {
        const count = activeMonthLogs.filter(log => log.tags && log.tags[tag] === true).length;

        const row = document.createElement('div');
        row.className = 'activity-stat-row';
        row.innerHTML = `
          <div class="activity-row-left">
            <div class="activity-row-icon-wrap">
              <svg viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7c-.82 0-1.5-.68-1.5-1.5S4.68 4 5.5 4s1.5.68 1.5 1.5S6.32 7 5.5 7z"/></svg>
            </div>
            <span class="activity-row-label">${this.escapeHTML(tag)}</span>
          </div>
          <span class="activity-row-value">${count}</span>
        `;
        tagGroup.appendChild(row);
      });
      this.activityStatsList.appendChild(tagGroup);
    }
  }

  // Helper to dynamically build day column elements
  createDayColumn(date, DAYS_SHORT) {
    const dStr = this.formatDateString(date);
    const activeDateStr = this.formatDateString(this.attendanceActiveDate);
    const isSelected = dStr === activeDateStr;

    const dayCol = document.createElement('div');
    let dayClass = `calendar-day-col ${isSelected ? 'selected-day' : 'outer-day'}`;

    const mem = this.members.find(m => m.id === this.attendanceActiveMemberId);
    if (mem && mem.schedules) {
      const isScheduled = mem.schedules.some(sch => sch.day === DAYS_SHORT[date.getDay()] || sch.day.substring(0, 3).toUpperCase() === DAYS_SHORT[date.getDay()].toUpperCase());
      if (isScheduled) dayClass += ' scheduled-day';
    }

    dayCol.className = dayClass;
    dayCol.dataset.date = dStr;
    dayCol.innerHTML = `
      <span class="calendar-day-lbl">${DAYS_SHORT[date.getDay()]}</span>
      <span class="calendar-date-lbl">${date.getDate()}</span>
    `;

    // Add dot if log exists
    if (mem) {
      const log = this.attendanceLogs.find(l => l.memberId === mem.id && l.date === dStr);
      if (log) {
        const dot = document.createElement('div');
        dot.className = `grid-day-dot ${log.status.toUpperCase() === 'PRESENT' ? 'dot-present' : 'dot-absent'}`;
        dayCol.appendChild(dot);
      }
    }

    dayCol.addEventListener('click', () => {
      this.attendanceActiveDate = date;
      const mem = this.members.find(m => m.id === this.attendanceActiveMemberId);
      if (mem) {
        this.renderAttendanceDetails(mem);
      }
      this.scrollToActiveDay(dayCol, 'smooth');
    });

    return dayCol;
  }

  // Render Calendar horizontal strip once per month change (renders prev 2 months to next 2 months initially)
  renderCalendarStrip(mem) {
    this.calendarInitialized = false;
    const year = this.attendanceActiveDate.getFullYear();
    const month = this.attendanceActiveDate.getMonth();
    const activeDateStr = this.formatDateString(this.attendanceActiveDate);

    this.calendarDaysStrip.innerHTML = '';
    const DAYS_SHORT = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    // We will initially render from month - 2 to month + 2 (5 months)
    this.earliestRenderedDate = new Date(year, month - 2, 1);
    this.latestRenderedDate = new Date(year, month + 3, 0); // Last day of month + 2

    const curDate = new Date(this.earliestRenderedDate);
    while (curDate <= this.latestRenderedDate) {
      const col = this.createDayColumn(new Date(curDate), DAYS_SHORT);
      this.calendarDaysStrip.appendChild(col);
      curDate.setDate(curDate.getDate() + 1);
    }

    const cols = Array.from(this.calendarDaysStrip.children);
    const selectedCol = cols.find(col => col.dataset.date === activeDateStr);
    if (selectedCol) {
      this.scrollToActiveDay(selectedCol, 'auto');
    }
  }

  toggleCalendarView() {
    if (!this.calendarDaysStrip || !this.calendarGridView) return;

    const mem = this.members.find(m => m.id === this.attendanceActiveMemberId);
    if (!mem) return;

    if (this.calendarExpanded) {
      // Expanding: show grid, hide strip
      this.calendarDaysStrip.style.display = 'none';
      this.calendarGridView.style.display = 'grid';
      this.renderCalendarGridView(mem);
    } else {
      // Collapsing: show strip, hide grid
      // We must NOT trigger renderCalendarStrip (which rebuilds everything and resets scroll)
      // Instead, just show the already-rendered strip and scroll to the currently selected date
      this.calendarGridView.style.display = 'none';
      this.calendarDaysStrip.style.display = 'flex';

      // The strip may already contain the active date from a previous render.
      // Find the active date column and scroll to it. If the strip is empty or
      // doesn't contain this date (e.g. first load), fall back to a full rebuild.
      const activeDateStr = this.formatDateString(this.attendanceActiveDate);
      const existingCols = Array.from(this.calendarDaysStrip.children);
      const targetCol = existingCols.find(col => col.dataset.date === activeDateStr);

      if (targetCol) {
        // Strip already has this date — just scroll to center it, no rebuild
        // Defer to next animation frame so browser paints flex layout first
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.scrollToActiveDay(targetCol, 'auto');
          });
        });
      } else {
        // Strip doesn't have the date (e.g. user navigated to a different month in grid)
        // Need a full rebuild centered on the active date
        this.renderCalendarStrip(mem);
      }
    }
    this.updateChevronIcon();
  }

  updateChevronIcon() {
    if (!this.calendarChevronToggle) return;
    if (this.calendarExpanded) {
      this.calendarChevronToggle.innerHTML = `<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>`;
    } else {
      this.calendarChevronToggle.innerHTML = `<svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>`;
    }
  }

  renderCalendarGridView(mem) {
    if (!this.calendarGridView) return;
    this.calendarGridView.innerHTML = '';

    const weekdays = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    weekdays.forEach(day => {
      const header = document.createElement('div');
      header.className = 'grid-weekday-header';
      header.textContent = day;
      this.calendarGridView.appendChild(header);
    });

    const year = this.attendanceActiveDate.getFullYear();
    const month = this.attendanceActiveDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const startDay = firstDay.getDay(); // 0: Sun, 1: Mon...
    const gridStartOffset = startDay === 0 ? 6 : startDay - 1;

    const totalDays = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < gridStartOffset; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.className = 'grid-day-cell empty';
      this.calendarGridView.appendChild(emptyCell);
    }

    const activeDateStr = this.formatDateString(this.attendanceActiveDate);

    for (let day = 1; day <= totalDays; day++) {
      const cellDate = new Date(year, month, day);
      const dStr = this.formatDateString(cellDate);
      const isSelected = dStr === activeDateStr;

      const log = this.attendanceLogs.find(l => l.memberId === mem.id && l.date === dStr);

      const cell = document.createElement('div');
      let cellClass = `grid-day-cell`;

      if (isSelected) {
        if (log) {
          cellClass += ` selected-${log.status.toUpperCase() === 'PRESENT' ? 'present' : 'absent'}`;
        } else {
          cellClass += ' selected';
        }
      }

      const DAYS_SHORT = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      if (mem && mem.schedules) {
        const isScheduled = mem.schedules.some(sch => sch.day === DAYS_SHORT[cellDate.getDay()] || sch.day.substring(0, 3).toUpperCase() === DAYS_SHORT[cellDate.getDay()].toUpperCase());
        if (isScheduled) cellClass += ' scheduled-day';
      }

      cell.className = cellClass;
      cell.dataset.date = dStr;

      const numSpan = document.createElement('span');
      numSpan.className = 'grid-day-number';
      numSpan.textContent = day;
      cell.appendChild(numSpan);

      if (log) {
        const dot = document.createElement('div');
        dot.className = `grid-day-dot ${log.status.toUpperCase() === 'PRESENT' ? 'dot-present' : 'dot-absent'}`;
        cell.appendChild(dot);
      }

      cell.addEventListener('click', () => {
        this.attendanceActiveDate = cellDate;
        this.renderAttendanceDetails(mem);
        // Only re-render the grid to show the new selection highlight
        this.renderCalendarGridView(mem);
        // Update the hidden strip's selected column highlight without rebuilding
        // so collapsing back to strip will find the correct date pre-highlighted
        const activeDateStr = this.formatDateString(cellDate);
        Array.from(this.calendarDaysStrip.children).forEach(col => {
          if (col.dataset.date === activeDateStr) {
            col.className = 'calendar-day-col selected-day';
          } else {
            const colDate = col.dataset.date;
            const existingSelected = col.classList.contains('selected-day');
            if (existingSelected) {
              col.className = 'calendar-day-col outer-day';
            }
          }
        });
      });

      this.calendarGridView.appendChild(cell);
    }
  }

  // Centering Scroll Helper with dynamic lock to prevent conflicts
  scrollToActiveDay(element, behavior = 'smooth') {
    const container = this.calendarDaysStrip;
    if (!container || !element) return;

    // If layout is not computed yet, retry after browser paints
    if (container.clientWidth === 0) {
      setTimeout(() => this.scrollToActiveDay(element, behavior), 30);
      return;
    }

    this.isProgrammaticScrolling = true;
    if (this.programmaticScrollTimeout) {
      clearTimeout(this.programmaticScrollTimeout);
    }

    // Set scroll-behavior inline to ensure correct transition (auto/smooth)
    container.style.scrollBehavior = behavior;

    const scrollLeft = element.offsetLeft - (container.clientWidth / 2) + (element.clientWidth / 2);
    container.scrollTo({ left: scrollLeft, behavior: behavior });

    if (behavior === 'auto') {
      // For instant scroll, complete the initialization synchronously
      this.isProgrammaticScrolling = false;
      this.calendarInitialized = true;
    } else {
      const handleScrollEnd = () => {
        this.isProgrammaticScrolling = false;
        this.calendarInitialized = true;
        if (this.programmaticScrollTimeout) {
          clearTimeout(this.programmaticScrollTimeout);
        }
        container.removeEventListener('scrollend', handleScrollEnd);
      };
      container.addEventListener('scrollend', handleScrollEnd);

      this.programmaticScrollTimeout = setTimeout(() => {
        this.isProgrammaticScrolling = false;
        this.calendarInitialized = true;
        container.removeEventListener('scrollend', handleScrollEnd);
      }, 600);
    }
  }

  // Handle scroll to snap-resize column sizes, sync date details dynamically, and infinite-scroll load
  handleCalendarScroll() {
    if (!this.calendarInitialized) return;

    const container = this.calendarDaysStrip;
    if (!container || container.children.length === 0) return;

    // 1. Carousel sizing and synchronization
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let minDistance = Infinity;
    let closestCol = null;
    let closestIdx = -1;

    const cols = Array.from(container.children);
    cols.forEach((col, idx) => {
      const colCenter = col.offsetLeft + col.clientWidth / 2;
      const dist = Math.abs(colCenter - containerCenter);
      if (dist < minDistance) {
        minDistance = dist;
        closestCol = col;
        closestIdx = idx;
      }
    });

    if (closestCol && closestIdx !== -1) {
      cols.forEach((col, idx) => {
        const diff = Math.abs(idx - closestIdx);
        col.className = 'calendar-day-col'; // Reset base layout
        if (diff === 0) {
          col.classList.add('selected-day');
        } else if (diff === 1) {
          col.classList.add('near-day');
        } else if (diff === 2) {
          col.classList.add('far-day');
        } else {
          col.classList.add('outer-day');
        }
      });

      if (!this.isProgrammaticScrolling) {
        const dateStr = closestCol.dataset.date;
        if (dateStr && dateStr !== this.formatDateString(this.attendanceActiveDate)) {
          const parts = dateStr.split('-');
          const y = parseInt(parts[0], 10);
          const m = parseInt(parts[1], 10) - 1;
          const d = parseInt(parts[2], 10);
          this.attendanceActiveDate = new Date(y, m, d);

          const mem = this.members.find(m => m.id === this.attendanceActiveMemberId);
          if (mem) {
            this.renderAttendanceDetails(mem);
          }
        }
      }
    }

    if (!this.isProgrammaticScrolling) {
      // 2. Infinite Scroll Prepend/Append dynamic trigger
      const DAYS_SHORT = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      const threshold = 500; // Load threshold in px from edges

      if (container.scrollLeft < threshold) {
        // Prepend previous month
        const prevMonthEnd = new Date(this.earliestRenderedDate);
        prevMonthEnd.setDate(0); // Day 0 is last day of previous month
        const prevMonthStart = new Date(prevMonthEnd.getFullYear(), prevMonthEnd.getMonth(), 1);

        const oldScrollWidth = container.scrollWidth;

        const tempFragment = document.createDocumentFragment();
        const curDate = new Date(prevMonthStart);
        while (curDate <= prevMonthEnd) {
          const col = this.createDayColumn(new Date(curDate), DAYS_SHORT);
          tempFragment.appendChild(col);
          curDate.setDate(curDate.getDate() + 1);
        }

        this.isProgrammaticScrolling = true;
        if (this.programmaticScrollTimeout) {
          clearTimeout(this.programmaticScrollTimeout);
        }

        // Temporarily disable scroll snapping to prevent feedback loop
        container.style.scrollSnapType = 'none';

        container.insertBefore(tempFragment, container.firstChild);
        this.earliestRenderedDate = prevMonthStart;

        // Correct scrollOffset immediately to keep positioning identical
        const newScrollWidth = container.scrollWidth;
        container.scrollLeft += (newScrollWidth - oldScrollWidth);

        this.programmaticScrollTimeout = setTimeout(() => {
          container.style.scrollSnapType = 'x mandatory';
          this.isProgrammaticScrolling = false;
        }, 150);

      } else if (container.scrollLeft > container.scrollWidth - container.clientWidth - threshold) {
        // Append next month
        const nextMonthStart = new Date(this.latestRenderedDate);
        nextMonthStart.setDate(nextMonthStart.getDate() + 1); // 1st day of next month
        const nextMonthEnd = new Date(nextMonthStart.getFullYear(), nextMonthStart.getMonth() + 1, 0); // Last day of next month

        this.isProgrammaticScrolling = true;
        if (this.programmaticScrollTimeout) {
          clearTimeout(this.programmaticScrollTimeout);
        }

        // Temporarily disable scroll snapping to prevent feedback loop
        container.style.scrollSnapType = 'none';

        const tempFragment = document.createDocumentFragment();
        const curDate = new Date(nextMonthStart);
        while (curDate <= nextMonthEnd) {
          const col = this.createDayColumn(new Date(curDate), DAYS_SHORT);
          tempFragment.appendChild(col);
          curDate.setDate(curDate.getDate() + 1);
        }

        container.appendChild(tempFragment);
        this.latestRenderedDate = nextMonthEnd;

        this.programmaticScrollTimeout = setTimeout(() => {
          container.style.scrollSnapType = 'x mandatory';
          this.isProgrammaticScrolling = false;
        }, 150);
      }
    }
  }

  // Format date as YYYY-MM-DD
  formatDateString(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  // Show/Hide session log bottom drawer
  showSessionModal(show) {
    if (show) {
      const mem = this.members.find(m => m.id === this.attendanceActiveMemberId);
      if (!mem) return;


      const activeDateString = this.formatDateString(this.attendanceActiveDate);
      const activeLog = this.attendanceLogs.find(log => log.memberId === mem.id && log.date === activeDateString);

      const options = { day: 'numeric', month: 'short', year: 'numeric' };
      this.sessionModalTitle.textContent = `Log Session - ${this.attendanceActiveDate.toLocaleDateString('en-US', options)}`;

      this.setSessionStatus(activeLog ? activeLog.status : 'present');

      if (activeLog && activeLog.notes) {
        this.sessionNotesInput.value = activeLog.notes;
      } else {
        this.sessionNotesInput.value = '';
      }

      // Load Toggles list
      this.sessionTogglesList.innerHTML = '';
      if (mem.toggles && mem.toggles.length > 0) {
        this.sessionTogglesContainer.style.display = 'block';
        mem.toggles.forEach(tog => {
          const isChecked = activeLog && activeLog.toggles ? !!activeLog.toggles[tog.label] : false;
          const div = document.createElement('div');
          div.className = `toggle-pill ${isChecked ? 'selected' : ''}`;
          div.style.cursor = 'pointer';
          div.innerHTML = `
            <span>${this.escapeHTML(tog.label)}</span>
            <div class="mini-toggle-icon ${isChecked ? 'active' : ''}">
              <div class="mini-toggle-thumb"></div>
            </div>
          `;

          div.addEventListener('click', () => {
            const icon = div.querySelector('.mini-toggle-icon');
            icon.classList.toggle('active');
            div.classList.toggle('selected');
          });

          this.sessionTogglesList.appendChild(div);
        });
      } else {
        this.sessionTogglesContainer.style.display = 'none';
      }

      // Load Tags list
      this.sessionTagsList.innerHTML = '';
      if (mem.tags && mem.tags.length > 0) {
        this.sessionTagsContainer.style.display = 'block';
        mem.tags.forEach(tag => {
          const isChecked = activeLog && activeLog.tags ? !!activeLog.tags[tag] : false;
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = `tag-pill ${isChecked ? 'selected' : ''}`;
          btn.style.cursor = 'pointer';
          btn.textContent = tag;

          btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
          });

          this.sessionTagsList.appendChild(btn);
        });
      } else {
        this.sessionTagsContainer.style.display = 'none';
      }

      this.sessionModalOverlay.classList.add('active');
    } else {
      this.sessionModalOverlay.classList.remove('active');
    }
  }

  // Toggle present/absent radio state in modal sheet
  setSessionStatus(status) {
    this.sessionSelectedStatus = status;
    if (status === 'present') {
      this.sessionCardPresent.classList.add('selected');
      this.sessionDotPresent.classList.add('selected');

      this.sessionCardAbsent.classList.remove('selected');
      this.sessionDotAbsent.classList.remove('selected');
    } else {
      this.sessionCardAbsent.classList.add('selected');
      this.sessionDotAbsent.classList.add('selected');

      this.sessionCardPresent.classList.remove('selected');
      this.sessionDotPresent.classList.remove('selected');
    }
  }

  // Handle Form save submit for session log
  handleSaveSessionLog() {
    const mem = this.members.find(m => m.id === this.attendanceActiveMemberId);
    if (!mem) return;

    const activeDateString = this.formatDateString(this.attendanceActiveDate);

    // Retrieve toggles values
    const toggles = {};
    this.sessionTogglesList.querySelectorAll('.toggle-pill').forEach(el => {
      const label = el.querySelector('span').textContent;
      const isSelected = el.classList.contains('selected');
      toggles[label] = isSelected;
    });

    // Retrieve tags values
    const tags = {};
    this.sessionTagsList.querySelectorAll('.tag-pill').forEach(el => {
      const label = el.textContent;
      const isSelected = el.classList.contains('selected');
      tags[label] = isSelected;
    });

    let log = this.attendanceLogs.find(l => l.memberId === mem.id && l.date === activeDateString);
    if (log) {
      log.status = this.sessionSelectedStatus;
      log.toggles = toggles;
      log.tags = tags;
      log.notes = this.sessionNotesInput.value;
    } else {
      log = {
        id: `log-${Date.now()}`,
        memberId: mem.id,
        date: activeDateString,
        status: this.sessionSelectedStatus,
        toggles: toggles,
        tags: tags,
        notes: this.sessionNotesInput.value
      };
      this.attendanceLogs.push(log);
    }

    this.saveData();
    this.showSessionModal(false);
    this.showToast('Attendance logged successfully!');
    this.renderAttendanceView();
  }

  // Delete attendance log entry
  handleDeleteSessionLog() {
    if (window.confirm("Are you sure you want to delete this session log?")) {
      const mem = this.members.find(m => m.id === this.attendanceActiveMemberId);
      if (!mem) return;
      const activeDateString = this.formatDateString(this.attendanceActiveDate);

      this.attendanceLogs = this.attendanceLogs.filter(log => !(log.memberId === mem.id && log.date === activeDateString));
      this.saveData();
      this.showToast('Attendance log deleted.');
      this.renderAttendanceView();
    }
  }
}

// Instantiate the App
const app = new App();

