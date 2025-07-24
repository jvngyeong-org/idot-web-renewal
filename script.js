// Modern Korean Company Website - JavaScript
// Author: AI Assistant
// Description: Handles navigation, smooth scrolling, animations, and interactive features

(function() {
    'use strict';

    // DOM Elements
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const fadeElements = document.querySelectorAll('.fade-in');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    const contactForm = document.getElementById('contact-form');

    /* /250724 홍지은 수정/: 공급실적 원본 데이터(JSON) */
    const portfolios = {
    title: "공급실적",
    types: [
        { type: "*", name: "전체" },
        { type: ".filter-solu", name: "솔루션" },
        { type: ".filter-tech", name: "기술지원" },
        { type: ".filter-main", name: "유지보수" }
    ],
    items: [
        {"type":"solu","client":"유진투자증권","sdate":"2021-07","edate":"","product":"NetFUNNEL 공급"},
        {"type":"solu","client":"유진투자증권","sdate":"2021-06","edate":"","product":"안랩 솔루션 공급"},
        {"type":"solu","client":"NH 투자증권","sdate":"2021-06","edate":"","product":"안랩 솔루션 공급"},

        {"type":"solu","client":"현대해상","sdate":"2020-10","edate":"","product":"정보계 재구축 DW 솔루션 공급및 구축 (IBM IIAS Appliance, DB2)"},
        {"type":"tech","client":"현대해상","sdate":"2020.10","edate":"2021.09","product":"정보계 재구축 사업에서 IBM Appliance  구축 및 DB Migration 서비스"},
        {"type":"solu","client":"NHN","sdate":"2020-09","edate":"","product":"Cloud 구축시 DB 솔루션 공급 (IBM DB2)"},
        {"type":"tech","client":"NHN","sdate":"2020.09","edate":"현재","product":"클라우드 서비스 구축 IIAS 솔루션 제공 서비스 (IBM DB2)"},

        {"type":"solu","client":"미래에셋생명","sdate":"2019-10","edate":"","product":"IFRS17 통합 DW 부문 솔루션 공급 및 구축 (IBM IIAS Appliance 등)"},
        {"type":"main","client":"미래에셋대우","sdate":"2019.08","edate":"2020.07","product":"PDA(Netizza) Renewal 공급 및 유지보수 서비스"},
        {"type":"main","client":"농협 손해보험 ","sdate":"2019.01","edate":"현재","product":"IFRS17 DW (오라클 ExaData) Appliance 솔루션 Renewal 공급 및 유지보수"},

        {"type":"solu","client":"농협손해보험","sdate":"2018-12","edate":"","product":"IFRS17 통합 DW 부문 솔루션 공급 및 구축 (오라클 ExaData)"},
        {"type":"main","client":"미래에셋생명","sdate":"2018.10","edate":"현재","product":"IFRS17 DW 용 IIAS (Db2) Renewal 공급 및 유지보수 서비스"},
        {"type":"solu","client":"국세청","sdate":"2018.06","edate":"","product":"근로장려금사업을 위한 DB2 (PureScale) 공급 및 구축"},
        {"type":"tech","client":"국세청","sdate":"2018.06","edate":"","product":"DB2 Recovery Expert 및 Db2 고도화 작업 전문 서비스"},
        {"type":"main","client":"대신증권","sdate":"2018.01","edate":"현재","product":"IFMX Db 및 EAI 솔루션 Renewal 공급 및 유지보수 서비스"},

        {"type":"solu","client":"농협손해보험","sdate":"2017-06","edate":"","product":"DW 고도화 사업 솔루션 공급 및 구축 (IBM PDA Appliance 등)"},
        {"type":"tech","client":"신한은행","sdate":"2017.06","edate":"2017.07","product":"고객이동경로 분석 컨설팅"},
        {"type":"tech","client":"농협생명","sdate":"2017.06","edate":"2017.08","product":"DW어플라이언스 고도화 자문(PM) 및 구축"},
        {"type":"main","client":"신한은행","sdate":"2017.06","edate":"현재","product":"빅데이터 활용분석 지원을 위한 DW시스템 Renewal 공급 및 유지보수 서비스"},
        {"type":"tech","client":"교육부 18개 시도교육청 및 KERIS","sdate":"2017.05","edate":"2018.02","product":"DB2 Upgrade 사업 수행"},
        {"type":"tech","client":"신한은행","sdate":"2017.02","edate":"2017.05","product":"빅데이터 활용분석 지원을 위한 DW시스템 고도화 기술 자문(PM) 및 구축"},
        {"type":"solu","client":"신한은행","sdate":"2017-01","edate":"","product":"빅데이터 활용분석 지원을 위한 DW시스템 고도화 사업 Total 솔루션 공급 (Teradata Appliance 등)"},
        {"type":"main","client":"KDB생명","sdate":"2017.01","edate":"현재","product":"DB2 및 WAS, WPS(Websphere Portal Server) Renewal 공급 및 유지보수 서비스"},

        {"type":"solu","client":"대신증권","sdate":"2016-12","edate":"","product":"DRM/DLP 솔루션,  신온라인 고객관리 구축 솔루션 및 문서중앙화 솔루션 공급 (2014, 2015, 2016)"},
        {"type":"main","client":"대한항공","sdate":"2016.10","edate":"현재","product":"여객예약시스템 WAS, 태평양물산, 유지보수 서비스"},
        {"type":"solu","client":"삼성증권","sdate":"2016-06","edate":"","product":"차세대 DB2 솔루션 공급)"},
        {"type":"main","client":"삼성증권","sdate":"2016.06","edate":"현재","product":"전사 DB2 (Core 시스템) Renewal 공급 및 유지보수 서비스"},
        {"type":"tech","client":"우리은행","sdate":"2016.05","edate":"2016.08","product":"EDW 테스트 데이터 변환 개발 자문 및 분석 서비스"},
        {"type":"tech","client":"KCB","sdate":"2016.02","edate":"2016.05","product":"IBM PDA 구축 기술지원"},
        {"type":"tech","client":"삼성화재","sdate":"2016.01","edate":"2016.05","product":"통합 Db2 재구축 기술지원"},

        {"type":"main","client":"한국 스마트카드","sdate":"2015.10","edate":"2019.06","product":"DW Appliance (PDOA) 솔루션 Renewal 공급 및 유지보수"},

        {"type":"main","client":"농협 손해보험","sdate":"2014.12","edate":"현재","product":"PDA(Netizza) Appliance, CDC 솔루션 Renewal 공급 및 유지보수 서비스"},
        {"type":"tech","client":"스마트로","sdate":"2014.07","edate":"2014.10","product":"승인업무 및 배치업무 고도화 DB 구축 컨설팅 및 구축"},
        {"type":"solu","client":"서울디자인재단","sdate":"2014-02","edate":"","product":"IT 구축 사업에 Db2 &WAS 솔루션 공급"},

        {"type":"solu","client":"외환은행","sdate":"2013.12","edate":"","product":"DB2, WAS, MQ 솔루션 공급 및 Renewal 계약"},
        {"type":"solu","client":"농협","sdate":"2013-08","edate":"","product":"IBM DataStage & WMQ 솔루션 공급"},
        {"type":"tech","client":"국세청","sdate":"2013.08","edate":"2015.03","product":"차세대 사업에서 정보 분석 업무 솔루션 (IBM PDoA) 기술 자문 및 분석, 구축"},
        {"type":"tech","client":"대우증권","sdate":"2013.04","edate":"2013.07","product":"상품정보 통합시스템 PDA (분석 솔루션) 기술자문 및 구축"},
        {"type":"main","client":"KERIS 및 17개 전국시도교육청","sdate":"2013.03","edate":"현재","product":"교육행재정 나이스 물적기반 유지관리 사업의 DB2, WAS 유지보수 서비스)"},

        {"type":"solu","client":"KERIS 및 17개 시도교육청","sdate":"2012-12","edate":"","product":"나이스 교육정보 시스템 구축을 위한 Db2 및 WAS 솔루션 공급"},
        {"type":"solu","client":"스마트로","sdate":"2012-03","edate":"","product":"DB2 pureScale 솔루션 공급"},

        {"type":"tech","client":"스마트로","sdate":"2011.12","edate":"2012.03","product":"승인업무 및 배치업무 고도화 DB 구축 컨설팅 및 구축"}
    ]};

    /* /250724 홍지은 수정/: 공급실적 const,let */
    const INITIAL_ROWS = 12;
    let currentTab = 'all';
    let currentRendered = [];

    // State
    let isScrolling = false;
    let currentSection = 'company';

    // Initialize application
    function init() {
        setupEventListeners();
        handleScroll(); // Initial call
        setupIntersectionObserver();
        setupTabSystem();
        highlightActiveSection();
    }

    // Event Listeners
    function setupEventListeners() {
        // Navigation
        hamburger.addEventListener('click', toggleMobileMenu);
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavClick);
        });

        // Scroll events
        window.addEventListener('scroll', throttle(handleScroll, 16)); // ~60fps
        window.addEventListener('resize', handleResize);

        // Form submission
        if (contactForm) {
            contactForm.addEventListener('submit', handleFormSubmit);
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', handleKeydown);
    }

    // Mobile Navigation
    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        
        // Update ARIA attributes for accessibility
        const isExpanded = navMenu.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded);
    }

    function closeMobileMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
    }

    // Navigation Click Handler
    function handleNavClick(e) {
        e.preventDefault();
        
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            // Smooth scroll to section
            smoothScrollTo(targetSection);
            
            // Close mobile menu if open
            closeMobileMenu();
            
            // Update active state
            updateActiveNavLink(e.target);
        }
    }

    // Smooth Scrolling
    function smoothScrollTo(element) {
        const offsetTop = element.offsetTop - (navbar.offsetHeight - 1);
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }

    // Scroll Handler
    function handleScroll() {
        if (isScrolling) return;
        
        isScrolling = true;
        requestAnimationFrame(() => {
            updateNavbarStyle();
            highlightActiveSection();
            isScrolling = false;
        });
    }

    // Update Navbar Style on Scroll
    function updateNavbarStyle() {
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Highlight Active Section
    function highlightActiveSection() {
        const scrollPosition = window.scrollY + navbar.offsetHeight + 100;
        
        let activeSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                activeSection = section.id;
            }
        });
        
        if (activeSection && activeSection !== currentSection) {
            currentSection = activeSection;
            updateActiveNavLink();
        }
    }

    // Update Active Navigation Link
    function updateActiveNavLink(clickedLink = null) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            if (clickedLink) {
                if (link === clickedLink) {
                    link.classList.add('active');
                }
            } else {
                const linkHref = link.getAttribute('href').substring(1);
                if (linkHref === currentSection) {
                    link.classList.add('active');
                }
            }
        });
    }

    // Intersection Observer for Fade-in Animations
    function setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Add staggered animation delay for elements in the same container
                    addStaggeredAnimation(entry.target);
                }
            });
        }, observerOptions);

        fadeElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Add Staggered Animation
    function addStaggeredAnimation(element) {
        const parent = element.parentElement;
        const siblings = Array.from(parent.querySelectorAll('.fade-in'));
        const index = siblings.indexOf(element);
        
        if (index > 0) {
            element.style.transitionDelay = `${index * 0.1}s`;
        }
    }

    // Tab System for Partnership Section
    function setupTabSystem() {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                
                // Update active button
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Update active panel
                tabPanels.forEach(panel => {
                    panel.classList.remove('active');
                    if (panel.id === targetTab) {
                        panel.classList.add('active');
                        
                        // Trigger fade-in animation for new content
                        const fadeElements = panel.querySelectorAll('.fade-in');
                        fadeElements.forEach((el, index) => {
                            el.style.transitionDelay = `${index * 0.1}s`;
                            el.classList.add('visible');
                        });
                    }
                });
            });
        });
    }

    // Form Submission Handler
    function handleFormSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {};
        
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        // Validate form
        if (validateForm(data)) {
            // Show loading state
            showFormLoading(true);
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                showFormLoading(false);
                showFormSuccess();
                contactForm.reset();
            }, 2000);
        }
    }

    // Form Validation
    function validateForm(data) {
        const required = ['name', 'email', 'subject', 'message'];
        const errors = [];
        
        required.forEach(field => {
            if (!data[field] || data[field].trim() === '') {
                errors.push(`${field}는 필수 입력 항목입니다.`);
            }
        });
        
        // Email validation
        if (data.email && !isValidEmail(data.email)) {
            errors.push('유효한 이메일 주소를 입력해주세요.');
        }
        
        if (errors.length > 0) {
            showFormErrors(errors);
            return false;
        }
        
        return true;
    }

    // Email Validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Form UI States
    function showFormLoading(isLoading) {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        
        if (isLoading) {
            submitButton.textContent = '전송 중...';
            submitButton.disabled = true;
        } else {
            submitButton.textContent = '메시지 보내기';
            submitButton.disabled = false;
        }
    }

    function showFormSuccess() {
        const message = document.createElement('div');
        message.className = 'form-message success';
        message.textContent = '메시지가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.';
        message.style.cssText = `
            background: #d4edda;
            color: #155724;
            padding: 1rem;
            border-radius: var(--border-radius);
            margin-top: 1rem;
            border: 1px solid #c3e6cb;
        `;
        
        contactForm.appendChild(message);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 5000);
    }

    function showFormErrors(errors) {
        // Remove existing error messages
        const existingErrors = contactForm.querySelectorAll('.form-message.error');
        existingErrors.forEach(error => error.remove());
        
        const errorContainer = document.createElement('div');
        errorContainer.className = 'form-message error';
        errorContainer.style.cssText = `
            background: #f8d7da;
            color: #721c24;
            padding: 1rem;
            border-radius: var(--border-radius);
            margin-top: 1rem;
            border: 1px solid #f5c6cb;
        `;
        
        errorContainer.innerHTML = `
            <strong>다음 오류를 수정해주세요:</strong>
            <ul style="margin: 0.5rem 0 0 1rem;">
                ${errors.map(error => `<li>${error}</li>`).join('')}
            </ul>
        `;
        
        contactForm.appendChild(errorContainer);
        
        // Remove error message after 8 seconds
        setTimeout(() => {
            if (errorContainer.parentNode) {
                errorContainer.parentNode.removeChild(errorContainer);
            }
        }, 8000);
    }

    // Keyboard Navigation
    function handleKeydown(e) {
        // ESC key to close mobile menu
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
        
        // Enter key for tab buttons
        if (e.key === 'Enter' && e.target.classList.contains('tab-btn')) {
            e.target.click();
        }
    }

    // Resize Handler
    function handleResize() {
        // Close mobile menu on resize to larger screen
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
        
        // Recalculate scroll positions
        highlightActiveSection();
    }

    // Utility Functions
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    /* 미사용 함수 삭제. 2025-07-24 | 이준경
    function debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    */
    /* 회사소개 부분 아이콘 애니메이션 삭제. 2025-07-24 | 이준경
    // Parallax Effect for Hero Section
    function initParallaxEffect() {
        const heroSection = document.getElementById('company');
        const heroVisual = heroSection.querySelector('.hero-visual');
        
        if (heroVisual) {
            window.addEventListener('scroll', throttle(() => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.3;
                
                if (scrolled < heroSection.offsetHeight) {
                    heroVisual.style.transform = `translateY(${rate}px)`;
                }
            }, 16));
        }
    }
    */

    // Smooth Reveal Animation for Sections
    function initSectionReveal() {
        const sections = document.querySelectorAll('.section');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-revealed');
                }
            });
        }, { threshold: 0.15 });
        
        sections.forEach(section => {
            revealObserver.observe(section);
        });
    }

    // Loading Animation
    function showLoadingAnimation() {
        document.documentElement.style.setProperty('--page-load-progress', '0%');
        
        // Simulate loading progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 30;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                
                // Hide loading overlay
                setTimeout(() => {
                    document.body.classList.add('loaded');
                }, 200);
            }
            
            document.documentElement.style.setProperty('--page-load-progress', `${progress}%`);
        }, 100);
    }

    // Enhanced Features
    function initEnhancedFeatures() {
        initSectionReveal();
        
        // Add scroll indicator
        createScrollIndicator();
        
        // Add back to top button
        createBackToTopButton();
    }

    // Scroll Progress Indicator
    function createScrollIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        indicator.style.cssText = `
            position: fixed;
            top: var(--navbar-height);
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, var(--primary-color), var(--primary-dark));
            z-index: 999;
            transition: width 0.25s ease;
        `;
        
        document.body.appendChild(indicator);
        
        window.addEventListener('scroll', throttle(() => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            
            indicator.style.width = scrolled + '%';
        }, 16));
    }

    // Back to Top Button
    function createBackToTopButton() {
        const button = document.createElement('button');
        button.innerHTML = '↑';
        button.className = 'back-to-top';
        button.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--primary-color);
            color: var(--white);
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0;
            transform: translateY(100px);
            transition: all 0.3s ease;
            z-index: 999;
            box-shadow: var(--shadow-lg);
        `;
        
        button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        document.body.appendChild(button);
        
        window.addEventListener('scroll', throttle(() => {
            if (window.scrollY > 500) {
                button.style.opacity = '1';
                button.style.transform = 'translateY(0)';
            } else {
                button.style.opacity = '0';
                button.style.transform = 'translateY(100px)';
            }
        }, 16));
    }

    /* /250724 홍지은 수정/: 렌더 함수 */
    function renderTable(tab = 'all') {
        const source = portfolios.items;
        const items = (tab === 'all') ? source : source.filter(i => i.type === tab);

        const list = document.getElementById('portfolio-list');
        if (!list) return;
        list.innerHTML = '';

        items.forEach((item, idx) => {
            const period = item.edate ? `${item.sdate} ~ ${item.edate}` : item.sdate;
            const div = document.createElement('div');
            div.className = 'portfolio-item';
            if (idx >= INITIAL_ROWS) div.style.display = 'none';

            div.innerHTML = `
            <div class="portfolio-head">
                <span class="client">${item.client}</span>
                <span class="period">${period}</span>
            </div>
            <p class="portfolio-desc" style = "margin : 0;">${item.product}</p>
            `;
            list.appendChild(div);
        });

        const moreWrap = document.getElementById('portfolio-more-wrap');
        if (moreWrap) {
            moreWrap.style.display = (items.length > INITIAL_ROWS) ? 'block' : 'none';
        }
    }

    /* /250724 홍지은 수정/: initRowMore */
    function initRowMore() {
        const btn = document.getElementById('portfolio-more-btn');
        if (!btn) return;
        btn.addEventListener('click', () => {
            document.querySelectorAll('#portfolio-list .portfolio-item[style*="display: none"]').forEach(r => r.style.display = '');
            document.getElementById('portfolio-more-wrap').style.display = 'none';
        });
    }

    /* /250724 홍지은 수정/: initTabs */
    function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(t => {
        t.addEventListener('click', () => {
        tabs.forEach(b => b.classList.remove('active'));
        t.classList.add('active');
        renderTable(t.dataset.tab);
        });
    });
    }
        //typewrite 추가
        document.addEventListener('DOMContentLoaded', function () {
        const title = document.querySelector('.section-title.typewriter');

        if (!title) return;

        title.addEventListener('animationend', () => {
            if (title.classList.contains('start-typing')) {
            title.classList.remove('start-typing');
            }
        });

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                title.classList.remove('start-typing');
                setTimeout(() => {
                    title.classList.add('start-typing');
                }, 50);
                }
            });
            });

            observer.observe(title);
        } else {
            title.classList.add('start-typing');
        }
        });

        //data-target 추가
        document.querySelectorAll('.hero-cta button').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            if (!targetId) return;

            const targetElement = document.getElementById(targetId);
            if (!targetElement) return;

            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
        });



        //카드 뒤집기
        document.querySelectorAll('.card-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault(); // a태그 이동 차단
            const card = link.closest('.business-card');
            card.classList.toggle('flipped'); // 뒤집기 <-> 원상복귀 반복
        });
        });



    // Initialize everything when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            init();
            initEnhancedFeatures();
            /* /250724 홍지은 수정/: Portfolio init */
            renderTable('all');
            initTabs();
            initRowMore();
        });
    } else {
        init();
        initEnhancedFeatures();
    }

    // Add loading class to body initially
    document.body.classList.add('loading');
    
    // Remove loading class after page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.classList.remove('loading');
            document.body.classList.add('loaded');
        }, 500);
    });
})();
