
import Script from 'next/script';

export default function Services() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `
<main class="main">
    <div class="header" id="sticky">
        <div class="container">
            <div class="row header-row">
                <div class="col-3 col-sm-4 col-md-2 align-self-center">
                <div class="top-logo">
                    <a href="/">
                        <img src="fonts/new-logo.svg" alt="logo" class="">
                    </a>
                </div>
            </div>
            
            <div class="col-2 col-sm-2 col-md-5 header-col-menu menu d-none d-lg-block">
                <ul class="nav">
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="services.html" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Услуги</a>
                          <div class="dropdown-menu">
                            <a href="smm.html" class="dropdown-item">smm</a>
                            <a href="seo.html" class="dropdown-item">seo</a>
                            <a href="site.html" class="dropdown-item">site</a>
                            <a href="serm.html" class="dropdown-item">serm</a>
                            <a href="branding.html" class="dropdown-item">branding</a>
                            <a href="context.html" class="dropdown-item">Contextual targeting, PPC</a>
                            <a href="bitrix24.html" class="dropdown-item">Внедрение Bitrix24</a>
                          </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="case">Кейсы</a>
                    </li>
                    <!--<li class="nav-item">
                        <a class="nav-link" href="prices.html">Цены</a>
                    </li>-->
                    <li class="nav-item">
                        <a class="nav-link" href="school.html">Школа</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">О нас</a>
                    </li>
                </ul>
            </div>
            
            <div class="col-8 col-sm-6 col-md-2 align-self-center d-none d-xl-block">
                <div class="text-right h-tel">
                    <a href="tel:+74732006741">+7 473 200-67-41</a>
                </div>
            </div>
            
            <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-3 align-self-center">
                <div class="text-center text-xl-right">
                    <button class="btn btn-primary tel_head-feedback_button" data-toggle="modal" data-target="#modal_form-feed">Обратный звонок</button>
                </div>
            </div>
            <div class="col-3 col-sm-2 col-md-4 col-lg-1 align-self-center d-xl-none">
                <div class="">
                    <div class="nav_burger"></div>
                </div>
            </div>
            </div>
        </div>
    </div>

<div class="header" id="myHeader">
    <div class="container">
        <div class="row header-row">
            <div class="col-3 col-sm-4 col-md-2 align-self-center">
                <div class="top-logo">
                    <a href="/">
                        <img src="fonts/new-logo.svg" alt="logo" class="">
                    </a>
                </div>
            </div>
            
            <div class="col-2 col-sm-2 col-md-5 header-col-menu menu d-none d-xl-block">
                <ul class="nav">
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="services.html" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Услуги</a>
                          <div class="dropdown-menu">
                            <a href="smm.html" class="dropdown-item">smm</a>
                            <a href="seo.html" class="dropdown-item">seo</a>
                            <a href="site.html" class="dropdown-item">site</a>
                            <a href="serm.html" class="dropdown-item">serm</a>
                            <a href="branding.html" class="dropdown-item">branding</a>
                            <a href="context.html" class="dropdown-item">Contextual targeting, PPC</a>
                            <a href="bitrix24.html" class="dropdown-item">Внедрение Bitrix24</a>
                          </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="case">Кейсы</a>
                    </li>
                    <!--<li class="nav-item">
                        <a class="nav-link" href="prices.html">Цены</a>
                    </li>-->
                    <li class="nav-item">
                        <a class="nav-link" href="school.html">Школа</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">О нас</a>
                    </li>
                </ul>
            </div>
            
            <div class="col-8 col-sm-6 col-md-2 align-self-center d-none d-xl-block">
                <div class="text-right h-tel">
                    <a href="tel:+74732006741">+7 473 200-67-41</a>
                </div>
            </div>
            
            <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-3 align-self-center">
                <div class="text-center text-xl-right">
                    <button class="btn btn-primary tel_head-feedback_button" data-toggle="modal" data-target="#modal_form-feed">Обратный звонок</button>
                </div>
            </div>
            <div class="col-3 col-sm-2 col-md-4 col-lg-1 align-self-center d-xl-none">
                <div class="">
                    <div class="nav_burger"></div>
                </div>
            </div>
        </div>
    </div>
</div>

<section class="main-prices section-le fon-banner section-vh-">
    <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">
            <div class="col-12">
                <div class="block-margin">
                    <h2 class="text-center" style="color: white;">
                        <span>Услуги</span>
                    </h2>
                    <div class="filters">
                        <!--<a class="filter-link" href="#smm">smm</a>
                        <a class="filter-link" href="#seo">seo</a>
                        <a class="filter-link" href="#site">site</a>
                        <a class="filter-link" href="#serm">serm</a>
                        <div class="break"></div>
                        <a class="filter-link" href="#analytics">analytics</a>
                        <a class="filter-link" href="#branding">branding</a>
                        <a class="filter-link" href="#contextual">Contextual targeting, PPC</a>-->
                        
                        <a class="filter-link" href="/smm.html">smm</a>
                        <a class="filter-link" href="/seo.html">seo</a>
                        <a class="filter-link" href="/site.html">site</a>
                        <a class="filter-link" href="/serm.html">serm</a>
                        <div class="break"></div>
                        <a class="filter-link" href="#analytics">analytics</a>
                        <a class="filter-link" href="/branding.html">branding</a>
                        <a class="filter-link" href="/context.html">Contextual targeting, PPC</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="le-prices serv"></div>
    <div class="chevron-down"></div>
</section>

<section class="section-vh- section-white" id="site">
    <div class="container h-100">
        <div class="row a-block h-100 justify-content-center align-items-center">
            <div class="col-12 col-md-6 a-text">
                <div class="block-margin">
                    <h2>
                        <span>SITE.<br>Создание сайтов</span>
                    </h2>
                    <p>Мы специализируемся на проектах под ключ, с индивидуальным дизайном <br>
                        Создаем проекты любой сложности:
                    </p>

                    <div id="accordion-site" class="accordion accordion-services">
                        <div class="card">
                            <div class="card-header">
                                <div class="collapsed panel-title mb-0" data-toggle="collapse" data-target="#collapse_s1" aria-expanded="false" aria-controls="collapse_s1">
                                    Landing page
                                </div>
                            </div>
                            <div id="collapse_s1" class="collapse" data-parent="#accordion-site">
                                <div class="card-body">
                                    <p>
                                        Это целевая страница, одностраничный сайт, который посвящен какой-то одной
                                        услуге или товару.
                                    </p>
                                    <p style="color: #FF4C4C;">
                                        От 5 экранов на странице
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <div class="mb-0 collapsed panel-title" data-toggle="collapse" data-target="#collapse_s2" aria-expanded="false" aria-controls="collapse_s2">
                                    Сайт Визитка
                                </div>
                            </div>
                            <div id="collapse_s2" class="collapse" data-parent="#accordion-site">
                                <div class="card-body">
                                  Небольшой сайт (1-2 страницы) с информацией о деятельности компании.

                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <div class="mb-0 collapsed panel-title" data-toggle="collapse" data-target="#collapse_s3" aria-expanded="false" aria-controls="collapse_s3">
                                    Корпоративный сайт
                                </div>
                            </div>
                            <div id="collapse_s3" class="collapse" data-parent="#accordion-site">
                                <div class="card-body">
                                  Такой сайт обладает сложной структурой. На нем можно разместить каталог товаров, новостные страницы, отзывы и другой полезный функционал.

                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <div class="mb-0 collapsed panel-title" data-toggle="collapse" data-target="#collapse_s4" aria-expanded="false" aria-controls="collapse_s4">
                                    Интернет-магазин
                                </div>
                            </div>
                            <div id="collapse_s4" class="collapse" data-parent="#accordion-site">
                                <div class="card-body">
                                 Это сайт, на котором пользователь может ознакомиться с деятельностью компании, а также заказать и оплатить понравившийся товар.

                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="text-left"><br>
                        <button class="btn btn-primary btn-pad" data-whatever="SITE" data-toggle="modal" data-target="#modal_form-feed_order">
                            Заказать
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 a-img">
                <div class="block-margin">
                    <img src="images/s1.png" alt="" class="mw-100">
                </div>
            </div>
        </div>
    </div>
    <div class="chevron-down"></div>
</section>

<section class="section-vh- section-black fs1" id="contextual">
    <div class="container h-100">
        <div class="row a-block h-100 justify-content-center align-items-center">
            <div class="col-12 col-md-6 a-img">
                <div class="block-margin">
                    <img src="images/s2.png" alt="" class="mw-100">
                </div>
            </div>
            <div class="col-12 col-md-6 a-text">
                <div class="block-margin">
                    <h2>
                        <span>Contextual targeting, PPC</span>
                    </h2>
                    <p>Контекстная реклама — это рекламные объявления, которые показываются пользователям в соответствии с их поисковыми запросами, интересами или поведением в интернете.
</p><p>
Грамотная настройка рекламных кампаний в Яндекс.Директ и Google Ads за короткий срок увеличивает целевой трафик на сайте, а гибкие настройки позволяют быстро получать желаемый результат с экономией на стоимости клика.
</p><p>
Мы поможем вам правильно настроить рекламную кампанию, отследим эффективность работы и увеличим продажи, не переплачивая лишнего.</p>


                    <div class="text-left"><br>
                        <button class="btn btn-primary btn-pad" data-whatever="Contextual targeting, PPC" data-toggle="modal" data-target="#modal_form-feed_order">
                            Заказать
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="chevron-down"></div>
</section>

<section class="section-vh- section-white" id="seo">
    <div class="container h-100">
        <div class="row a-block h-100 justify-content-center align-items-center">
            <div class="col-12 col-md-6 a-text">
                <div class="block-margin">
                    <h2>
                        <span>SEO</span>
                    </h2>
                    <p>Поднятие сайта в топ 10 органической выдачи Яндекс и Google в вашем регионе по большому списку
                        ключевых запросов. Правильно выстроенная стратегия продвижения от Digital Pride – кратно
                        увеличивает посещаемость сайтов наших клиентов.
                    </p>
                    <ul class="kurs-list_ul">
                        <li>Внутренняя оптимизация сайта</li>
                        <li>Индивидуальная стратегия продвижения под каждый сегмент бизнеса</li>
                        <li>Долгосрочный, а не сиюминутный эффект по привлечению целевой аудитории на сайт</li>
                        <li>Полный отчет о проделанной работе</li>
                    </ul>

                    <div class="text-left">
                        <button class="btn btn-primary btn-pad" data-whatever="SEO" data-toggle="modal" data-target="#modal_form-feed_order">
                            Заказать
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 a-img">
                <div class="block-margin">
                    <img src="images/s3.png" alt="" class="mw-100">
                </div>
            </div>
        </div>
    </div>
    <div class="chevron-down"></div>
</section>

<section class="section-vh- section-black fs2" id="smm">
    <div class="container h-100">
        <div class="row a-block h-100 justify-content-center align-items-center">
            <div class="col-12 col-md-6 a-img">
                <div class="block-margin">
                    <img src="images/s4.png" alt="" class="mw-100">
                </div>
            </div>
            <div class="col-12 col-md-6 a-text">
                <div class="block-margin">
                    <h2>
                        <span>SMM. <br>Продвижение в соц. сетях</span>
                    </h2>
                    <p>Проведение работ в социальных сетях с целью охвата целевой аудитории и продажи ваших товаров или
                        услуг в социальных сетях.</p>
                    <p>Правильная SMM стратегия позволит выстроить коммуникацию с пользователем, увеличить лояльность к
                        бренду и открыть новый канал для роста повторных продаж.
                    </p>

                    <div id="accordion-smm" class="accordion accordion-services">
                        <div class="card">
                            <div class="card-header">
                                <div class="collapsed panel-title mb-0" data-toggle="collapse" data-target="#collapse_smm" aria-expanded="false" aria-controls="collapse_smm">
                                    Преимущества SMM
                                </div>
                            </div>
                            <div id="collapse_smm" class="collapse" data-parent="#accordion-smm">
                                <div class="card-body">
                                    <p>
                                        test
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="text-left"><br>
                        <button class="btn btn-primary btn-pad" data-whatever="SMM" data-toggle="modal" data-target="#modal_form-feed_order">
                            Заказать
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="chevron-down"></div>
</section>

<section class="section-vh- section-white" id="serm">
    <div class="container h-100">
        <div class="row a-block h-100 justify-content-center align-items-center">
            <div class="col-12 col-md-6 a-text">
                <div class="block-margin">
                    <h2>
                        <span>SERM</span>
                    </h2>
                    <p>Присутствие компании в интернете – обязательное условие для успешного существования любого бизнеса, и при выборе компетентного поставщика или партнёра, собирается информация о продукте, качестве, надёжности интересующей их фирмы или предприятия. В первую очередь обращается внимание на репутацию компании – отзывы, оценки о услугах, публичность компании в сети.
                    </p><p>
                        При наличии у организации положительной репутации, т.е. когда большинство пользователей благоприятно отзываются о качестве и надежности ее услуг, то она может рассчитывать на получение дополнительных доходов и лучшую узнаваемость бренда, легко привлекать новых клиентов.
                    </p>

                    <div id="accordion-serm" class="accordion accordion-services">
                        <div class="card">
                            <div class="card-header">
                                <div class="collapsed panel-title mb-0" data-toggle="collapse" data-target="#collapse_serm1" aria-expanded="false" aria-controls="collapse_serm1">
                                    Полный комплекс услуг
                                </div>
                            </div>
                            <div id="collapse_serm1" class="collapse" data-parent="#accordion-site">
                                <div class="card-body">
                                    <p>
                                       
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="text-left"><br>
                        <button class="btn btn-primary btn-pad" data-whatever="SERM" data-toggle="modal" data-target="#modal_form-feed_order">
                            Заказать
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 a-img">
                <div class="block-margin">
                    <img src="images/s5.png" alt="" class="mw-100">
                </div>
            </div>
        </div>
    </div>
    <div class="chevron-down"></div>
</section>

<section class="section-vh- section-black fs3" id="analytics">
    <div class="container h-100">
        <div class="row a-block h-100 justify-content-center align-items-center">
            <div class="col-12 col-md-6 a-img">
                <div class="block-margin">
                    <img src="images/s6.png" alt="" class="mw-100">
                </div>
            </div>
            <div class="col-12 col-md-6 a-text">
                <div class="block-margin">
                    <h2>
                        <span>ANALYTICS</span>
                    </h2>
Если не анализировать результаты любой рекламной деятельности, то это деньги, выброшенные на ветер.
<br><br>
Мы предлагаем своим клиентам полную отчетность по запущенным рекламным кампаниям в наглядных таблицах, диаграммах и графиках. А еще мы подключаем сквозные системы аналитики для более глубокого анализа.

                    <p></p>
                    <div class="text-left"><br>
                        <button class="btn btn-primary btn-pad" data-whatever="ANALYTICS" data-toggle="modal" data-target="#modal_form-feed_order">
                            Заказать
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="chevron-down"></div>
</section>

<section class="section-vh- section-white" id="branding">
    <div class="container h-100">
        <div class="row a-block h-100 justify-content-center align-items-center">
            <div class="col-12 col-md-6 a-text">
                <div class="block-margin">
                    <h2>
                        <span>BRANDING</span>
                    </h2>
                    <p>Наименование и фирменный стиль – это самое главное в упаковке бизнеса. С помощью инструментов брендинга создается визуальный образ компании, товара или услуги. Через правильный нейминг и фирменный стиль возможно четкое позиционирование продукции на рынке.

                    </p>

                    <p><b>Мы поможем:</b></p>

                    <ul class="kurs-list_ul">
                        <li>Создать название компании</li>
                        <li>Сделать актуальный логотип.</li>
                        <li>Выработать фирменный стиль.</li>
                        <li>Оформить визитки, фирменные бланки и другие документы компании.</li>
                    </ul>

                    <div class="text-left">
                        <button class="btn btn-primary btn-pad" data-whatever="BRANDING" data-toggle="modal" data-target="#modal_form-feed_order">
                            Заказать
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 a-img">
                <div class="block-margin">
                    <img src="images/s7.png" alt="" class="mw-100">
                </div>
            </div>
        </div>
    </div>
</section>

<div class="modal modal-reab fade" id="modal_form-feed_order">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-content_inner">
                <div class="close-reab" data-dismiss="modal"></div>
<form class="ajax_form af_example form-main aj_form" method="post">
    <input type="hidden" name="service" id="form-service">
    <input type="text" class="s-message" name="s-message" value="">
    <p class="form-descr form-title text-center">Заказать услугу</p>
    <p class="text-center"></p>
    <div class="form-group">
        <input type="text" class="form-control" name="name" placeholder="ФИО" value="" required="">
        <span class="error_name"></span>
    </div>
    <div class="form-group">
        <input type="tel" class="form-control" name="phone" placeholder="+7 (___) ___ - __ - __" required="">
        <span class="error_phone"></span>
    </div>
    <div class="form-group agreement t-flex">
        <i class="icons icon-checked"></i>
        <span class="text-left">
            <a href="privacy" target="_blank">Согласен на обработку персональных данных. Политика конфиденциальности.</a>
        </span>
    </div>
    <div class="text-center">
        <button type="submit" class="btn btn-primary">Заказать обратный звонок</button>
    </div>

    
    

	<input type="hidden" name="af_action" value="4602bba08993b94a89853c4ec1acdb9b">
</form>                  
            </div>
        </div>
    </div>
</div>
</main>
<section class="menuModal menu-mobil">
    <div class="menuModal__header">
        <div class="menu-mobile_close"></div>
        <div class="menu-mobile_logo text-center">
            <a class="menuModal__logo" href="/">
                <img src="fonts/logo-small.svg" alt="Digital Pride">
            </a>
        </div>
        <div class="menu-mobile_close-submenu d-block d-sm-none">
            <span class="close-submenu d-none">test</span>
        </div>
    </div>
    <div class="menuModal__main">
        <div class="menuModal__menu">
            <nav class="menu">
                <ul class="menu__list">
                    <li class="menu__item">
                        <a class="menu__link menu__link--parent" href="services.html">Услуги</a>
                        <ul class="menu__subMenu">
                            <li class="menu__item">
                                <a href="smm.html" class="menu__link">smm</a>
                            </li>
                            <li class="menu__item">
                                <a href="seo.html" class="menu__link">seo</a>
                            </li>
                            <li class="menu__item">
                                <a href="site.html" class="menu__link">site</a>
                            </li>
                            <li class="menu__item">
                                <a href="serm.html" class="menu__link">serm</a>
                            </li>
                            <li class="menu__item">
                                <a href="services.html#analytics" class="menu__link">analytics</a>
                            </li>
                            <li class="menu__item">
                                <a href="branding.html" class="menu__link">branding</a>
                            </li>
                            <li class="menu__item">
                                <a href="context.html" class="menu__link">Contextual targeting, PPC</a>
                            </li>
                            <li class="menu__item">
                                <a href="bitrix24.html" class="menu__link">Внедрение Bitrix24</a>
                            </li>
                            
                        </ul>
                    </li>
                    <li class="menu__item">
                        <a href="case" class="menu__link">Кейсы</a>
                    </li>
                    <li class="menu__item">
                        <a class="menu__link menu__link--parent" href="about.html">Компания</a>
                        <ul class="menu__subMenu">
                            <li class="menu__item">
                                <a href="blog.html" class="menu__link">Блог</a>
                            </li>
                            <li class="menu__item">
                                <a href="about.html#partners" class="menu__link">партнеры</a>
                            </li>
                            <li class="menu__item">
                                <a href="about.html#vacancies" class="menu__link">вакансии</a>
                            </li>
                            <li class="menu__item">
                                <a href="about.html#reviews" class="menu__link">отзывы</a>
                            </li>
                        </ul>
                    </li>
                    <!--<li class="menu__item">
                        <a href="prices.html" class="menu__link">Цены</a>
                    </li>-->
                    <li class="menu__item">
                        <a class="menu__link menu__link--parent" href="school.html">Школа</a>
                        <ul class="menu__subMenu">
                            <li class="menu__item">
                                <a href="kursyi-smm.html" class="menu__link">Курс SMM</a>
                            </li>
                            <li class="menu__item">
                                <a href="kurs-kontekstnaya-reklama.html" class="menu__link">Курс Контекстная реклама</a>
                            </li>
                        </ul>
                    </li>
                    <li class="menu__item">
                        <a href="contact.html" class="menu__link">Контакты</a>
                    </li>

                </ul>
            </nav>
        </div>
    </div>
</section>

<footer>
    <div class="footer">
        <div class="container">
            <div class="row d-xl-none">
                <div class="col-6 col-sm-4 col-md-4 col-lg-3 main-footer-logo">
                    <div class="footer_logo">
                        <a href="/">
                            <img src="fonts/new-logo.svg" alt="logo">
                        </a>
                    </div>
                </div>
                <div class="col-12 col-lg-4 main-footer-btn">
                    <div class="footer_btn">
                        <button class="btn btn-primary" data-toggle="modal" data-target="#modal_form-feed_footer">Них*я не понятно,<br>
                            но очень интересно
                        </button>
                    </div>
                </div>
                <div class="col-12 col-sm-5 col-md-4 col-lg-3 main-footer-address">
                    <div class="footer_address">
                        <div class="t-flex footer_t-flex">
                            <i class="icons icon-tel"></i>
                            <span class="tel_head_wrap text-left">
                                <a class="tel_head" href="tel:+74732006741">+7 473 200-67-41</a>
                                <a class="tel_head-feedback" data-toggle="modal" data-target="#modal_form-feed">обратный звонок</a>
                            </span>
                        </div>
                        <div class="t-flex footer_t-flex">
                            <i class="icons icon-edit"></i>
                            <span class="tel_head_wrap text-left">
                                <a class="tel_head" href="mailto:solonko@digital-pride.ru">web@digital-pride.ru</a>
                                <a class="tel_head-feedback" href="mailto:web@digital-pride.ru">напишите нам</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-sm-3 col-md-4 col-lg-2 main-footer-socials">
                    <div class="footer_socials">
                        <div class="tel_head">Мы в соцсетях</div>
                        <div class="socials">
                            <a href="https://vk.com/voronezh__smm"><i class="fab fa-vk"></i></a>
                            <!--<a href="https://www.instagram.com/voronezh_smm/"><i class="fab fa-instagram"></i></a>-->
                        </div>
                    </div>
                </div>

            </div>

            <div class="row pt-4">
                
                <div class="col-xl-2 d-none d-xl-block">
                    <div class="footer_logo mb-3">
                        <a href="/">
                            <img src="fonts/new-logo.svg" alt="logo">
                        </a>
                    </div>
                    
                    <div class="footer_socials">
                        <div class="tel_head">Мы в соцсетях</div>
                        <div class="socials">
                            <a href="https://vk.com/voronezh__smm"><i class="fab fa-vk"></i></a>
                            <!--<a href="https://www.instagram.com/voronezh_smm/"><i class="fab fa-instagram"></i></a>-->
                        </div>
                    </div>
                    
                </div>
                
                <div class="col-12 col-xl-7">
                    <div class="footer-menu">
                        <div class="footer-menu_ul fm-1">
                            <div class="link-head"><a href="services.html">Услуги</a></div>
                            <div class=""><a href="smm.html">smm</a></div>
                            <div class=""><a href="seo.html">seo</a></div>
                            <div class=""><a href="site.html">site</a></div>
                            <div class=""><a href="serm.html">serm</a></div>
                            <div class=""><a href="services.html#analytics">analytics</a></div>
                            <div class=""><a href="branding.html">branding</a></div>
                            <div class=""><a href="context.html">Contextual targeting, PPC</a></div>
                        </div>
                        <div class="footer-menu_ul fm-2">
                            <div class="link-head"><a href="about.html">Компания</a></div>
                            <div class=""><a href="blog.html">Блог</a></div>
                            <div class=""><a href="about.html#partners">партнеры</a></div>
                            <div class=""><a href="about.html#vacancies">вакансии</a></div>
                            <div class=""><a href="about.html#reviews">отзывы</a></div>
                        </div>
                        <div class="footer-menu_ul fm-3">
                            <div class="link-head- font-weight-bold"><a href="case">Кейсы</a></div>
                            <!--<div class="link-head- font-weight-bold"><a href="prices.html">Цены</a></div>-->
                            <div class="link-head- font-weight-bold"><a href="school.html">Школа SMM</a></div>
                            <div class="link-head- font-weight-bold"><a href="kurs-kontekstnaya-reklama.html">Курс по контекстной рекламе</a></div>
                            <div class="link-head- font-weight-bold"><a href="contact.html">Контакты</a></div>
                        </div>
                    </div>
                </div>
                
                <div class="col-xl-3 d-none d-xl-block">
                    <div class="footer_btn mb-3">
                        <button class="btn btn-primary" data-toggle="modal" data-target="#modal_form-feed_footer">Них*я не понятно,<br>
                            но очень интересно
                        </button>
                    </div>
                    
                    <div class="footer_address">
                        <div class="t-flex footer_t-flex">
                            <i class="icons icon-tel"></i>
                            <span class="tel_head_wrap text-left">
                                <a class="tel_head" href="tel:+74732006741">+7 473 200-67-41</a>
                                <a class="tel_head-feedback" data-toggle="modal" data-target="#modal_form-feed">обратный звонок</a>
                            </span>
                        </div>
                        <div class="t-flex footer_t-flex">
                            <i class="icons icon-edit"></i>
                            <span class="tel_head_wrap text-left">
                                <a class="tel_head" href="mailto:solonko@digital-pride.ru">web@digital-pride.ru</a>
                                <a class="tel_head-feedback" href="mailto:web@digital-pride.ru">напишите нам</a>
                            </span>
                        </div>
                    </div>
                </div>


            </div>

        </div>

    </div>
</footer>

<div class="modal modal-reab fade" id="modal_form-feed">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-content_inner">
                <div class="close-reab" data-dismiss="modal"></div>
<form class="ajax_form aj_form af_example form-main" method="post">
    <input type="text" class="s-message" name="s-message" value="">
    <p class="form-descr form-title text-center">Ответим на любые ваши вопросы</p>
    <p class="text-center"></p>
    <div class="form-group">
        <input type="text" class="form-control" name="name" placeholder="ФИО" value="" required="">
        <span class="error_name"></span>
    </div>
    <div class="form-group">
        <input type="tel" class="form-control" name="phone" placeholder="+7 (___) ___ - __ - __" required="">
        <span class="error_phone"></span>
    </div>
    <div class="form-group agreement t-flex">
        <i class="icons icon-checked"></i>
        <span class="text-left">
            <a href="privacy" target="_blank">Согласен на обработку персональных данных. Политика конфиденциальности.</a>
        </span>
    </div>
    <div class="text-center">
        <button type="submit" class="btn btn-primary">Заказать обратный звонок</button>
    </div>

    
    

	<input type="hidden" name="af_action" value="f581ca929c4f4920efc306bea16b5d4f">
</form>
            </div>
        </div>
    </div>
</div>

<div class="modal modal-reab fade" id="modal_form-feed_footer">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-content_inner">
                <div class="close-reab" data-dismiss="modal"></div>
             <form class="ajax_form aj_form af_example form-main" method="post">
    <input type="text" class="s-message" name="s-message" value="">
    <p class="form-descr form-title text-center">Ответим на любые ваши вопросы</p>
    <p class="text-center"></p>
    <div class="form-group">
        <input type="text" class="form-control" name="name" placeholder="ФИО" value="" required="">
        <span class="error_name"></span>
    </div>
    <div class="form-group">
        <input type="tel" class="form-control" name="phone" placeholder="+7 (___) ___ - __ - __" required="">
        <span class="error_phone"></span>
    </div>
    <div class="form-group agreement t-flex">
        <i class="icons icon-checked"></i>
        <span class="text-left">
            <a href="privacy" target="_blank">Согласен на обработку персональных данных. Политика конфиденциальности.</a>
        </span>
    </div>
    <div class="text-center">
        <button type="submit" class="btn btn-primary">Заказать обратный звонок</button>
    </div>

    
    

	<input type="hidden" name="af_action" value="b55e6a7b063c7323ac9f6a6a6a6e3510">
</form>  
            </div>
        </div>
    </div>
</div>

<div class="modal modal-reab" id="modal_form-feedback_result">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-content_inner">
                <div class="close-reab" data-dismiss="modal"></div>
                <form class="form-main" id="feedback-modal_result">
                    <p class="form-descr form-title text-center">Спасибо</p>
                    <p class="form-descr text-center">Ваша заявка принята. В течении 5 минут наш менеджер свяжется с вами.</p>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="modal modal-bigg" id="modal_aggrement">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-content_inner">
                <div class="close-reab" data-dismiss="modal"></div>
                <div class="modal_aggrement_html">test</div>
            </div>
        </div>
    </div>
</div>

<script>
        (function(w,d,u){
                var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
                var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
        })(window,document,'https://cdn-ru.bitrix24.ru/b5200063/crm/site_button/loader_7_f036wh.js');
</script>
<!-- Yandex.Metrika counter --> <script type="text/javascript"> (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(79798549, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true }); </script> <noscript><div><img src="https://mc.yandex.ru/watch/79798549" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '519871262919971');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=519871262919971&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
<script src="js/jquery.min.js"></script>
<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
<script src="https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.min.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/swiper-bundle.min.js"></script>
<script src="js/parallax.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.nice-select.min.js"></script>
<script src="js/mask.js"></script>
<script src="js/main-new.js"></script>

<script type="text/javascript" src="js/default.js"></script>
<script type="text/javascript">AjaxForm.initialize({"assetsUrl":"\/assets\/components\/ajaxform\/","actionUrl":"\/assets\/components\/ajaxform\/action.php","closeMessage":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u0432\u0441\u0435","formSelector":"form.ajax_form","pageId":105});</script>

` }} />
    </>
  );
}
