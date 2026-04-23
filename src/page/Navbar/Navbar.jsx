import React,{useState,useRef,useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import logo from "../../DumpYard/icon.png";
import "../Navbar.scss";

const Navbar = () => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
const handleToggle = () => {
  setIsOpen(!isOpen);
};
useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }

    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  return (
    

    <div  class="container" >
      
      
  
                  <div  class="one-logo">   <img
        src={logo}
        alt="Dump Yard Com 7 Logo"
        style={{
          width: "120px",
          height: "auto",
          display: "block",
          margin: "10px auto"
        }}
      />
    <div id="block-one-branding" data-block-plugin-id="system_branding_block">
  
    
        <a class="website-brand" ></a>
      
</div>

  </div>
                  <div class="meta-navigation" >
    
<div id="block-newloginmenu" data-block-plugin-id="block_content:9fe40f93-34fa-4acf-86ad-7628bc917074">
  
    
      
<div>
      <div>
      <div class="login-dropdown meta-dropdown"  ref={dropdownRef}>
<div class="login-link dropdown-link"  onClick={handleToggle}>Login</div>

{isOpen && (
  <div className="login-iframe more">
<div className="one-widget with-iframe login-box" id="widget-sign-in"><a className="login-btn" rel="noreferrer noopener" target="_blank" >Login</a> <a class="logout-btn"  rel="noreferrer noopener" target="_blank">Logout</a> <a class="register-btn" href="/" rel="noreferrer noopener" target="_blank">Register</a></div>
</div>)}
</div>
    </div>
  </div>

  </div>
<div class="top-global-dropdown">
      <a href="/" target="_blank" rel="noreferrer noopener">Global</a>
  </div>
<div id="block-singlelanguageblock" data-block-plugin-id="single_language_block">
  
    
      <div class="regional meta-dropdown is-single-regional">
  <div class="region-link dropdown-link">India</div>
  <div class="more is-active">
    <h6 class="t-country">LAST VISITED</h6>
    <div class="countries"><a href="/">India<span class="o-font-cap"></span></a><a href="/change-region" class="btn-all-countries" data-drupal-link-system-path="change-region">All countries »</a></div>
    
  </div>
</div>

  </div>
<div class="views-exposed-form" data-drupal-selector="views-exposed-form-acquia-search-page" id="block-search-header" data-block-plugin-id="views_exposed_filter_block:acquia_search-page">
  
    
      <form action="/search" method="get" id="views-exposed-form-acquia-search-page" accept-charset="UTF-8">
  <div class="js-form-item form-item js-form-type-textfield form-item-keywords js-form-item-keywords">
      <label for="edit-keywords">New Search</label>
    
    <span class="required">Required</span>

        </div>
<div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper form-wrapper" id="edit-actions"><button data-twig-suggestion="views-exposed-form-acquia-search-page" data-drupal-selector="edit-submit-acquia-search" type="submit" id="edit-submit-acquia-search" value="Search" class="button js-form-submit form-submit btn">Search</button>
</div>


</form>

  </div>

  </div>

          
        
    <div id="main-menu" class="contextual-region" data-block-plugin-id="system_menu_block:main">
      
        <ul >
          <li class="more">
        <a href="#" data-caption-less="« Less" data-caption-more="More »">
            More »
        </a>
      </li>
                  <li class="has-sub">
            <a href="" class="no-link">About</a>
                          <ul >
                  <li>
            <a href="/about-us" language="en" data-drupal-link-system-path="node/76066">Company</a>
              </li>
              <li>
            <a href="/core-values" data-drupal-link-system-path="node/87026">Core Values</a>
              </li>
              <li>
            <a href="/our-leadership" data-drupal-link-system-path="node/87041">Leadership</a>
              </li>
              <li>
            <a href="/corporate-publications" language="en" data-drupal-link-system-path="node/76056">Corporate Publications</a>
              </li>
        </ul>
  
              </li>
              <li class="has-sub">
            <a href="" class="no-link">India</a>
                          <ul >
                  <li>
            <a href="/" rel="noreferrer noopener" target="_blank">Delivery Order Request</a>
              </li>
              <li class="has-sub">
            <a href="" class="no-link">BL Release Request</a>
                          <ul>
                  <li>
            <a href="/" rel="noreferrer noopener" target="_blank">eBL Request</a>
              </li>
              <li>
            <a href="/" rel="noreferrer noopener" target="_blank">eBL Release Status</a>
              </li>
              <li>
            <a href="/" rel="noreferrer noopener" target="_blank">BL Status</a>
              </li>
        </ul>
  
              </li>
              <li>
            <a href="/" target="_blank" class="target-ignore" rel="noreferrer noopener">Status Change/Amendment</a>
              </li>
              <li class="has-sub">
            <a href="" class="no-link">Local Information</a>
                          <ul>
                  <li>
            <a href="/dit-certificate" data-drupal-link-system-path="node/1351">DIT Certificate</a>
              </li>
              <li>
            <a href="/holiday-list" data-drupal-link-system-path="node/1346">Holiday List</a>
              </li>
              <li>
            <a href="/india-service-schedules" data-drupal-link-system-path="node/2061">India Schedules</a>
              </li>
              <li>
            <a href="/" rel="noreferrer noopener" target="_blank">Local Disclaimer</a>
              </li>
              <li>
            <a href="/odex-guides" data-drupal-link-system-path="node/3566">ODeX Guides</a>
              </li>
              <li>
            <a href="/">eBL Process Guide</a>
              </li>
        </ul>
  
              </li>
              <li class="has-sub">
            <a href="" class="no-link">Shipping Forms</a>
                          <ul>
                  <li>
            <a href="/lost-bl-process" data-drupal-link-system-path="node/1306">Lost BL Process</a>
              </li>
              <li>
            <a href="/indemnity-bond" data-drupal-link-system-path="node/1311">Indemnity Bond</a>
              </li>
              <li>
            <a href="/manual-booking-form" data-drupal-link-system-path="node/1326">Manual Booking Form</a>
              </li>
              <li>
            <a href="/refund-form" data-drupal-link-system-path="node/1321">Refund Form</a>
              </li>
              <li>
            <a href="/general-forms" data-drupal-link-system-path="node/3501">General Forms</a>
              </li>
        </ul>
  
              </li>
              <li class="has-sub">
            <a href="" class="no-link">Know Your Customer Forms</a>
                          <ul>
                  <li>
            <a href="/shipper-consignee" data-drupal-link-system-path="shipper-consignee">Shipper/Consignee - Know Your Customer Forms </a>
              </li>
              <li>
            <a href="/custom-house-agent" data-drupal-link-system-path="custom-house-agent">Custom House Agent - Know Your Customer Forms </a>
              </li>
              <li>
            <a href="/forwarder" data-drupal-link-system-path="forwarder">Forwarder - Know Your Customer Forms</a>
              </li>
        </ul>
  
              </li>
              <li>
            <a href="/local-offices-contacts" data-drupal-link-system-path="node/1296">Local Offices Contacts</a>
              </li>
              <li>
            <a href="/local-tariffs-and-surcharges" data-drupal-link-system-path="node/2056">Local Tariffs &amp; Surcharges</a>
              </li>
              <li>
            <a href="/bl-igm-search" data-drupal-link-system-path="bl-igm-search">BL Manifestation Details</a>
              </li>
              <li>
            <a href="" rel="noreferrer noopener" target="_blank">Payment Details Submission</a>
              </li>
              <li>
            <a href="/news/586/all-years/all-months" data-drupal-link-system-path="news/586/all-years/all-months">Customer Advisory</a>
              </li>
        </ul>
  
              </li>
              <li class="has-sub">
            <a href="" class="no-link">Newsroom</a>
                          <ul>
                  <li>
            <a href="/" data-drupal-link-system-path="news/all-news/all-years/all-months">Corporate News</a>
              </li>
              <li>
            <a href="/brochures-resources" data-drupal-link-system-path="brochures-resources">Brochures/Resources</a>
              </li>
              <li>
            <a href="/subscription" data-drupal-link-system-path="subscription">ONE Subscription</a>
              </li>
        </ul>
  
              </li>
              <li class="has-sub">
            <a href="" class="no-link">Services</a>
                          <ul >
                  <li>
            <a href="/service-maps" data-drupal-link-system-path="service-maps">Service Maps</a>
              </li>
              <li>
            <a href="/2026-new-service-product" data-drupal-link-system-path="2026-new-service-product">2026 Service Brochure</a>
              </li>
              <li>
            <a href="/2025-new-service-product" language="en" data-drupal-link-system-path="2025-new-service-product">2025 Service Brochure</a>
              </li>
              <li>
            <a href="/vessels" data-drupal-link-system-path="vessels">Fleet List</a>
              </li>
              <li>
            <a href="/dry-containers" data-drupal-link-system-path="node/3526">Container Specifications</a>
              </li>
              <li>
            <a href="/advanced-page/refrigerated-cargo" data-drupal-link-system-path="node/10346">Refrigerated Cargo</a>
              </li>
              <li>
            <a href="/dangerous-goods" data-drupal-link-system-path="node/44096">Dangerous Goods</a>
              </li>
              <li>
            <a href="/special-cargo" data-drupal-link-system-path="node/85281">Special Cargo</a>
              </li>
              <li>
            <a href="/one-leaf" data-drupal-link-system-path="node/85331">ONE LEAF+</a>
              </li>
              <li>
            <a href="/bl-terms" data-drupal-link-system-path="node/3191">B/L Terms</a>
              </li>
        </ul>
  
              </li>
              <li class="has-sub">
            <a href="" class="no-link">Contact ONE</a>
                          <ul>
                  <li>
            <a href="/all-offices" data-drupal-link-system-path="all-offices">All Offices</a>
              </li>
              <li>
            <a href="/" rel="noreferrer noopener" target="_blank">Contact Form</a>
              </li>
              <li>
            <a href="/booking-contacts" data-drupal-link-system-path="node/3141">Booking Contacts</a>
              </li>
        </ul>
  
              </li>
              <li>
            <a href="/csr-home" data-drupal-link-system-path="csr-home">Sustainability</a>
              </li>
              <li class="has-sub">
            <a href="" class="no-link">Digital Solutions</a>
                          <ul >
                  <li>
            <a href="/digital-solutions" data-drupal-link-system-path="node/61441">Overview</a>
              </li>
              <li>
            <a href="/digital-solutions/ebl" data-drupal-link-system-path="node/85361">ONE eBL</a>
              </li>
              <li>
            <a href="/digital-solutions/one-epayment" data-drupal-link-system-path="node/85381">ONE ePayment</a>
              </li>
              <li>
            <a href="/digital-solutions/one-quote" data-drupal-link-system-path="node/85406">ONE QUOTE</a>
              </li>
              <li>
            <a href="/digital-solutions/one-mobile-app" data-drupal-link-system-path="node/85311" class="is-active" aria-current="page">ONE Mobile App</a>
              </li>
        </ul>
  
              </li>
              <li class="has-sub">
            <a href="" class="no-link">eCommerce</a>
                          <ul >
                  <li>
            <a href="" class="global-1st-ecommerce-2nd-one-ecommerce" rel="noreferrer noopener" target="_blank">ONE eCommerce</a>
              </li>
              <li>
            <a href="/digital-solutions/edi-portal" data-drupal-link-system-path="node/3276">EDI/Portal</a>
              </li>
        </ul>
  
              </li>
              <li>
            <a href="/" rel="noreferrer noopener" target="_blank">Service Provider Login</a>
              </li>
        <li class="mobile-menu-header"><div class="logo-icon"></div><div class="close-icon"></div><div class="views-exposed-form" data-drupal-selector="views-exposed-form-acquia-search-page" id="block-search-header" data-block-plugin-id="views_exposed_filter_block:acquia_search-page">
  
    
      <form action="/search" method="get" id="views-exposed-form-acquia-search-page" accept-charset="UTF-8">
  <div class="js-form-item form-item js-form-type-textfield form-item-keywords js-form-item-keywords">
      <label for="edit-keywords">New Search</label>
         <span class="required">Required</span>

        </div>
<div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper form-wrapper" id="edit-actions"><button data-twig-suggestion="views-exposed-form-acquia-search-page" data-drupal-selector="edit-submit-acquia-search" type="submit" id="edit-submit-acquia-search" value="Search" class="button js-form-submit form-submit btn">Search</button>
</div>


</form>

  </div></li></ul>
  


    <span class="mobile-menu-title" >MENU</span></div>
<div id="block-ecommerceloginurl" data-block-plugin-id="simple_block:ecommerce_login_url">
  
    
      <p><a class="ecommerce-login-url" href="/"rel="noreferrer noopener" target="_blank">Ecommerce Login URL</a></p>
  </div>


      </div>
  )
}

export default Navbar
