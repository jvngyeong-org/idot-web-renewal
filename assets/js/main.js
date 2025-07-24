/**
* Template Name: Gp - v4.7.0
* Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

//-----------------------------------------------------------------------------------------------------------------------------------------
let pageSize = 10;
let aIndex = [0,0,0,0];
let changePage ;// = function(group, page){};
let morePage;

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Clients Slider
   */
  /*
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });
*/
  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    //portfolio
    let portfolio_title = document.getElementById('portfolio_title');
    portfolio_title.innerHTML = portfolios.title;

    let portfolio_types = document.getElementById('portfolio-flters');
    let li;

    portfolios.types.forEach((item, index) => {
      li = `<li data-filter="${item.type}" class="${index==0?"filter-active":""}">${item.name}</li>`;
      portfolio_types.insertAdjacentHTML('beforeend', li);
     });


    let portfolio = document.getElementById('portfolio-container');
    
    let pageA = 1, pageP = 1;
    
    portfolios.items.sort(function(a, b) {
      if (a.sdate < b.sdate) {return 1}
      else if (a.sdate > b.sdate) {return -1}
      else return 0;
    });

    portfolios.items.forEach(item => {
      //console.log(item) 
      pageA = parseInt(aIndex[0]++ / pageSize) + 1;
      switch (item.type) {
        case "solu":
          pageP = parseInt(aIndex[1]++ / pageSize) + 1;
          break;
        case "tech":
          pageP = parseInt(aIndex[2]++ / pageSize) + 1;
          break;
        case "main":
          pageP = parseInt(aIndex[3]++ / pageSize) + 1;
          break;
      }
      let div =`<div class="col-lg-6 col-md-12 portfolio-item filter-${item.type} P${pageP} A${pageA} >`
        + ` <div class="portfolio-wrap">`
        + `   <div class="portfolio-info">`
        + `     <h4>${item.client}(${item.sdate}${item.edate!=""?" ~ " + item.edate:""})</h4>`
        + `     <p>${item.product}</p>`
        + `   </div>`
        + ` </div>`
        + `</div>`;

        portfolio.insertAdjacentHTML('beforeend', div);
    });

    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);
      portfolioFilters.forEach(function(el, index) {
        el.innerHTML += `(${aIndex[index]})`;
      });

      let selectFilter = {};
      on('click', '#portfolio-flters li', function(e) {
        console.log(this.getAttribute('data-filter'));

        e.preventDefault();
        portfolioFilters.forEach(function(el, index) {
          el.classList.remove('filter-active');
          console.log(`index ${index} ${el.innerHTML}`)
        });
        this.classList.add('filter-active');
/*
        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
*/
        //let selectFilter = {};
        let group= this.getAttribute('data-filter');
        if ("*" == group) {
          selectFilter.filter = group + ".A1";
        } else {
          selectFilter.filter = group + ".P1";  
        }
        
        console.log(selectFilter);

        portfolioIsotope.arrange(selectFilter);
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });

        /** pagenation 처리*/
        let page = 1;
        switch(group) {
          case ".filter-solu":
            page = parseInt(aIndex[1] / 10 ) + 1
            break;
          case ".filter-tech":
            page = parseInt(aIndex[2] / 10 ) + 1
            break;
          case ".filter-main":
            page = parseInt(aIndex[3] / 10 ) + 1
            break;
          default:
            page = parseInt(aIndex[0] / 10 ) + 1
            break;
        };
/*
        console.log(page);
        let pageLi = `<li class="page-item active"><a class="page-link active" href="javascript:changePage('${group}',1)">1</a></li>`; 
        for (let i=2; i<=page; i++ ) {
          pageLi += `<li class="page-item"><a class="page-link" href="javascript:changePage('${group}',${i})">${i}</a></li>`; 
        }

        let pagenation = document.getElementsByClassName("pagination")[0];
        pagenation.innerHTML = "";
        pagenation.insertAdjacentHTML('beforeend', pageLi);
*/
        /* more */
        let more = document.getElementById("more");
        more.dataset.maxpages = page;
        more.dataset.group = group;
        more.dataset.page = 1
        more.classList.remove('button-hidden');
        

      }, true);

      on('click', '#more1', function(e) {
        console.log(this.dataset.page);
        console.log(this.dataset.group);

        console.log(selectFilter);
        //selectFilter.filter = this.dataset.group + ".A1, *.A2";  
        console.log(selectFilter);
        portfolioIsotope.arrange({ 
          selectFilter
        });
    debugger;        
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });

      });

      morePage = function() {
        let group = more.dataset.group;
        let page = parseInt(more.dataset.page);
        let maxpages = parseInt(more.dataset.maxpages);

        selectFilter.filter = `${group}.${"*"==group?"A1":"P1"}`
        for(let i=2; i<=page+1;i++) {
          if(i > maxpages) break;
          selectFilter.filter += `, ${group}.${"*"==group?"A":"P"}${i}`
        }

        if (page < maxpages) {
          more.dataset.page = ++page; 
          if (page == maxpages) {
            more.classList.add('button-hidden');
          }
        } 

        console.log(selectFilter.filter);
        portfolioIsotope.arrange(selectFilter);
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });

      }

      on('click', '#pagination ul li', function(e) {
        console.log(this);
      });
      
      document.getElementsByClassName("filter-active")[0].click();

      changePage = function(group, page) {
        console.log(`group = ${group} page = ${page}`);

        let pagenationFilters = select('#pagination li', true);

        pagenationFilters.forEach(function(el) {
          el.classList.remove('active');
        });
        pagenationFilters[page-1].classList.add('active');

        let selectFilter = {};
        selectFilter.filter = `${group}.${"*"==group?"A1":"P1"}`
        for(let i=2; i<=page;i++) {
          selectFilter.filter += `, ${group}.${"*"==group?"A":"P"}${i}`
        }
        /*
        if ("*" == group) {
          selectFilter.filter = `${group}.A${page}, ${group}.A1`;
        } else {
          selectFilter.filter = `${group}.P${page}, ${group}.P1`;
        }
        */
        console.log(selectFilter.filter);

        portfolioIsotope.arrange(selectFilter);
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });

        //document.location.href = "#portfolio";
      } 
    }
  });
 
  
  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
  
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
 */
  /**
   * Testimonials slider
 
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
  */
  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

  /**
   * data loading
   */
  window.addEventListener('load', () => {
    console.log("Data Loading");

     //company
     let main_section = document.getElementById('hero');
     main_section.style.backgroundImage = company.main_image;
     let main_title1 = document.getElementById('main_title1');
     main_title1.innerHTML = company.main_title1;
     let main_title2 = document.getElementById('main_title2');
     main_title2.innerHTML = company.main_title2;

     let main_menu = document.getElementById('main_menu');
     let content = "";
     business.items.forEach(item => {
       content += `<div class="col-xl-2 col-md-4">`
             + `    <div class="icon-box" onclick="javascript:document.location.href='#business'">`
             + `        <i class="ri-store-line"></i>`
             + `        <h3><a href="#${item.id}">${item.menu_title}</a></h3>`
             + `    </div>`
             + `</div>`;          
     });
     main_menu.innerHTML = content;

     let company_intro1 = document.getElementById('company_intro1');
     company_intro1.innerHTML = company.intro1;
     let company_intro2 = document.getElementById('company_intro2');
     company_intro2.innerHTML = company.intro2;
     let intro_image = document.getElementById('intro_image');
     intro_image.src = company.intro_image;


     intro_image

     let company_intro_items = document.getElementById('company_intro_items');
     let li;
     company.intro_items.forEach(item => {
      li = `<li><i class="ri-check-double-line"></i>${item}</li>`;
      company_intro_items.insertAdjacentHTML('beforeend', li);
     });

     let sales = document.getElementById('sales');
     sales.innerHTML = company.email.sales;
     let tech = document.getElementById('tech');
     tech.innerHTML = company.email.tech;
     let recruit = document.querySelectorAll('#recruit');
     for(var i=0; i < recruit.length; i++){
       recruit[i].innerHTML = company.email.recruit; 
     }
     let tel = document.getElementById('tel');
     tel.innerHTML = company.tel;
     let ceo = document.getElementById('ceo');
     ceo.innerHTML = company.ceo;
     let business_no = document.getElementById('business_no');
     business_no.innerHTML = company.business_no;
     
     let address = document.querySelectorAll('#address');
     for(var i=0; i < address.length; i++){
       address[i].innerHTML = company.address;   
     }
     let googlemap = document.getElementById('googlemap');
     googlemap.src = company.googlemap_src;

    //timeline
    let timeline_title = document.getElementById('timeline_title');
    timeline_title.innerHTML = histories.title;

    let timeline = document.getElementById('timeline');
    li;
    let index = 0;
    histories.items.forEach(history => {
      Object.entries(history).forEach(([year, items]) => {
        li = `<li class="timeline-${index%2==0?'default':'inverted'}" data-animate="fadeIn">`
          +  `  <div class="timeline-badge"></div>`
          +  `  <div class="timeline-panel">`
          +  `    <div class="timeline-heading">`
          +  `      <h3 class="h3">${year}</h3>`
          +  `    </div>`
          +  `    <div class="timeline-body">`   
          +  `      <ul>`;

        items.forEach(item => {
          Object.entries(item).forEach(([month, value]) => {
            //console.log(month); console.log(value);        
            li +=  `        <li><strong>${month}</strong>${value}</li>` ;
          });
        });

        li +=  `      </ul>`
          +  `    </div>`
          +  `  </div>`   
          +  `</li>`  
        //console.log(li);
        timeline.insertAdjacentHTML('beforeend', li);
      });
      index++;
    });

    //business
    let business_title = document.getElementById('features_title');
    business_title.innerHTML = business.title;

    let business_desc = document.getElementById('features_desc');
    business_desc.innerHTML = business.desc;

    let business_container = document.getElementById('business');
    content = "";
    business.items.forEach(item => {
      content += ` <div id="${item.id}" class="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">`
            + `<i class="bx ${item.icon}"></i>`
            + `<h4>${item.title}</h4>`;
      item.contents.forEach(item => {
        content += `<p>${item}</p>`;
      });
      content += `</div>`;
            
    });
    business_container.innerHTML = content;

    //partnership
    let partnership_title = document.getElementById('partnership_title');
    partnership_title.innerHTML = partnership.title;

    let partnership_container = document.getElementById('partnership');
    content = "";
    partnership.items.forEach(partner => {
      content += `<div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">`
            + `<div class="icon-box">`
            + `<div class="icon"><img src="${partner.image}" class="img-fluid" alt=""></div>`
            + `<h4><a href="#1">${partner.name}</a></h4>`
            + `<p>${partner.title}</p>`
            + `<p>${partner.desc}</p>`
            + `</div></div>`;
      
    });

    partnership_container.innerHTML = content;

  
    //partnership
    let partnership_swiper = document.getElementById('partnership_swiper');
    content = "";
    partnership.items.forEach(partner => {
      content += `<div class="swiper-slide"><img src="${partner.image}" class="img-fluid" alt=""></div>`;
    });

    partnership_swiper.innerHTML = content;

    new Swiper('.clients-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 120
        }
      }
    });

   //recurit
   let recurit_title = document.getElementById('recurit_title');
   recurit_title.innerHTML = recurits.title;
   let recurit_desc = document.getElementById('recurit_desc');
   recurit_desc.innerHTML = recurits.desc;

   let recurit_container = document.getElementById('recurit');
   content = "";
   recurits.items.forEach(recurit => {
     content += `<div class="col-md-6 d-md-flex align-items-md-stretch">`
           + `    <div class="recuit-box">`
           + `        <i class="bi ${recurit.icon}"></i>`
           + `        <span >${recurit.title}</span>`;
      recurit.items.forEach(item => {
        content +=  `        <p> - ${item}</p>`;
      });
      content += `</div></div>`;
     
   });
   recurit_container.innerHTML = content;
    
  }); //load
})()

