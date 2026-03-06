
import Script from 'next/script';

export default function Perfomansmarketing() {
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
                    <a href="tel:+77070357777">+7 (707) 035-77-77</a>
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
                    <a href="tel:+77070357777">+7 (707) 035-77-77</a>
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

<!--<section class="main-banner main-banner_services main-banner_context main-banner_serm">
    <div class="header" id="myHeader">
    <div class="container">
        <div class="row pt-1 pb-1">
            <div class="col-2 col-sm-4 align-self-center">
                <div class="top-logo">
                    <a href="/">
                        <img src="images/logo.svg" alt="logo" class="d-none d-sm-block">
                        <img src="images/logo-small.svg" alt="logo" class="d-block d-sm-none logo-small">
                    </a>
                </div>
            </div>
            <div class="col-8 col-sm-6 col-md-4 align-self-center">
                <div class="text-center">
                    <button class="btn btn-primary tel_head-feedback_button" data-toggle="modal" data-target="#modal_form-feed">Связаться с нами</button>
                </div>
            </div>
            <div class="col-2 col-sm-2 col-md-4 align-self-center">
                <div class="">
                    <div class="nav_burger"></div>
                </div>
            </div>
        </div>
    </div>
</div>
    <div class="slider-main swiper-banner swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide slider-item">
                <div class="slider-text h-100">
                    <div class="container h-100">
                        <div class="row align-items-center h-100">
                            <div class="col-12 col-sm-6 col-xl-6 my-auto">
                                <h1 class="slider-title h1"><span>SERM</span></h1>
                                <p class="slider-description">
                                    Эффективный инструмент для быстрого продвижения компании в Интернете и получения высокого отклика от потенциальных клиентов.
                                    <br><b>Платите только за целевые клики!</b>
                                    <br>
                                    <br>
                                    <button class="btn btn-primary tel_head-feedback_button" data-toggle="modal"
                                            data-whatever="serm"
                                            data-target="#modal_form-feed_order">Хочу больше заявок
                                    </button>
                                </p>
                            </div>
                            <div class="col-12 col-sm-6 col-xl-6"></div>
                        </div>
                    </div>
                </div>
                <div class="slider-img h-100">
                    <picture>
                        <img src="images/serm.png" alt="serm">
                    </picture>
                </div>
            </div>

        </div>
    </div>
</section>-->

<div class="container mb-5-">
    <section class="main-banner new-banner">

        <div class="slider-main swiper-banner swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide slider-item h100">

                    <div class="slider-text h100">
                        <div class="row align-items-center h100">
                            <div class="col-12 col-sm-5 col-xl-5 nb1 ss1">
                                <div class="slider-title">Перфоманс-маркетинг</div>
                                <div class="slider-description slider-description2">
                                    от 1000 000 ₸
                                </div>

                                <div class="slider-link">
                                    <button class="btn btn-primary d-block" data-toggle="modal" data-whatever="Serm" data-target="#modal_form-feed_order">
                                        Хочу клиентов
                                    </button>
                                </div>
                            </div>
                            <div class="col-12 col-sm-7 col-xl-7 mb2"><img class="scale-img2" src="images/serm.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>
</div>

<section class="main main-direct pt-5 pb-5">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>
                    <span>Перфоманс-маркетинг</span>
                </h2>
                <p><strong>Подробнее</strong>: Мы знаем, что успех на конкурентном рынке в любой нише требует уникального подхода. �&nbsp;азработка перформанс-стратегии включает в себя анализ глобальных трендов, адаптацию культурных особенностей и максимальное использование многоканальных маркетинговых инструментов. Мы помогаем вашему бренду достучаться до аудитории и создать прочные связи с ней.</p>

<p>Мы используем передовые технологии аналитики, тестирование и оптимизацию для достижения ярких результатов. Независимо от того, нужно ли вам увеличить продажи, улучшить узнаваемость бренда или привлечь новых клиентов, мы создаем стратегии, способные адаптироваться к динамике мирового рынка.</p>

<p><strong>Мы не просто следуем трендам, мы их создаем.</strong> Сплоченная команда креативных маркетологов гарантирует вам инновационные и кастомизированные решения. Мы разрабатываем стратегии, которые не только соответствуют текущим потребностям, но и подготавливают ваш бренд к вызовам будущего.</p>

<p>Хотите, чтобы ваш бизнес не только адаптировался к глобальному рынку, но и возглавлял его?</p>

<p>&nbsp;Доверьтесь опыту и страсти к результатам нашей команды, и вместе мы сделаем ваш бренд заметным и успешным.</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

            </div>
            <div class="col-12">
                <h3>
                    <span>Цены</span>
                </h3>
                <div class="gray-menu" style="background: #EEEEEE;">
                <table class="table">
                        <thead>
                        <tr class="thead-dark">
                            <th scope="col">�&nbsp;аботы</th>
                            <th scope="col">Описание</th>
                            <th scope="col">Стоимость (тенге)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td scope="row">Консалтинг</td>
                            <th>Консультация опытного маркетолога для малого, среднего бизнеса и экспертов. 1,5-2 часа работаем по вашему запросу, проводим аудит и предлагаем оптимальные решения по увеличению объема продаж и развитию проектов.</th>
                            <td>от 150 000</td>
                        </tr>
                                                <tr>
                            <td scope="row">Стратегическое планирование</td>
                            <th>�&nbsp;азработка бренд-стратегии для любого вида бизнеса. 2-3 дня совместный брейн-шторм по вашему проекту: аудит, аналитика, разработка многоканальной маркетинговой стратегии на 6-12 месяцев для увеличения продаж, усиления узнаваемости бренда и привлечения новых клиентов.</th>
                            <td>от 500 000</td>
                        </tr>
                        
                                                <tr>
                            <td scope="row">Отдел маркетинга на аутсорсе</td>
                            <th>Комплексное сопровождение вашего бизнеса командой креативных маркетологов для увеличения продаж, усиления узнаваемости бренда и привлечения новых клиентов. Интеграция инновационных и кастомизированных решений для потенциальных лидеров рынка. Сотрдничество от 3-х месяцев.</th>
                            <td>от 1000 000</td>
                        </tr>
                        
                                                <tr>
                            <td scope="row">Перфоманс-маркетинг</td>
                            <th>Подойдет для среднего и крупного бизнеса. Полная разработка стратегии запуска проектов с нуля, запуск новых направлений действующего бизнеса, сопровождение в реализации.</th>
                            <td>от 1500 000</td>
                        </tr>
                        
                        </tbody>
                    </table>
               </div>
            </div>
        </div>
 </div>
</section>

<section class="pt-5 pb-2 mb-5">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="h3 text-center mb-0">
                    Узнать стоимость для моего направления
                </div>
                <div class="form-1027">
                    <div class="font-weight-bold text-center mb-3">
                        По всем вопросам, связанным с услугами Digital Pride, ценами, оплатой, вы можете
                        обращаться в любое удобное время
                    </div>
                    <form action="" method="post" class="ajax_form af_example form-school aj_form">
    <input type="text" class="s-message" name="s-message" value="">
    <div class="form-row">
        <div class="col form-group">
            <input type="text" class="form-control" name="name" value="" placeholder="Имя" required="">
            <span class="error_name"></span>
        </div>
        <div class="col form-group">
            <input type="tel" class="form-control" name="phone" placeholder="Телефон" value="" required="">
            <span class="error_phone"></span>
        </div>
        <div class="col form-group">
            <button type="submit" class="btn btn-primary">Оставить заявку</button>
        </div>
    </div>
    <div class="form-group agreement agreement2">
        Нажимая кнопку, ты разрешаешь <a href="privacy" target="_blank">обработку персональных данных</a> и соглашаешься с <a href="privacy" target="_blank">политикой конфиденциальности</a>.
    </div>

    
    

	<input type="hidden" name="af_action" value="9a7babb73d587d8ed48d8bdfbb78f59f">
</form>
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

    
    

	<input type="hidden" name="af_action" value="88b47a987eef109b03d9af499831186d">
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
                        <button class="btn btn-primary" data-toggle="modal" data-target="#modal_form-feed_footer">Мне надо всё
                        </button>
                    </div>
                </div>
                <div class="col-12 col-sm-5 col-md-4 col-lg-3 main-footer-address">
                    <div class="footer_address">
                        <div class="t-flex footer_t-flex">
                            <i class="icons icon-tel"></i>
                            <span class="tel_head_wrap text-left">
                                <a class="tel_head" href="tel:+77070357777">+7 (707) 035-77-77</a>
                                <a class="tel_head-feedback" data-toggle="modal" data-target="#modal_form-feed">обратный звонок</a>
                            </span>
                        </div>
                        <div class="t-flex footer_t-flex">
                            <i class="icons icon-edit"></i>
                            <span class="tel_head_wrap text-left">
                                <a class="tel_head" href="mailto:digitalpride.almaty@gmail.com">digitalpride.almaty@gmail.com</a>
                                <a class="tel_head-feedback" href="mailto:digitalpride.almaty@gmail.com">напишите нам</a>
                            </span>
                        </div>
                        <div class="t-flex footer_t-flex">
                            <i class="icons icon-location"></i>
                            <span class="tel_head_wrap text-left">
                                г. Алматы, Бульвар Бухар жырау, 33, офис 40
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-sm-3 col-md-4 col-lg-2 main-footer-socials">
                    <div class="footer_socials">
                        <div class="tel_head">Мы в соцсетях</div>
                        <div class="socials">
                            <a href="https://www.instagram.com/digital.pride.smm/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.youtube.com/@BizPride"><i class="fab fa-youtube"></i></a>
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
                            <a href="https://www.instagram.com/digital.pride.smm/"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.youtube.com/@BizPride"><i class="fab fa-youtube"></i></a>
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
                        <button class="btn btn-primary" data-toggle="modal" data-target="#modal_form-feed_footer">Мне надо всё</button>
                    </div>
                    
                    <div class="footer_address">
                        <div class="t-flex footer_t-flex">
                            <i class="icons icon-tel"></i>
                            <span class="tel_head_wrap text-left">
                                <a class="tel_head" href="tel:+77070357777">+7 (707) 035-77-77</a>
                                <a class="tel_head-feedback" data-toggle="modal" data-target="#modal_form-feed">обратный звонок</a>
                            </span>
                        </div>
                        <div class="t-flex footer_t-flex">
                            <i class="icons icon-edit"></i>
                            <span class="tel_head_wrap text-left">
                                <a class="tel_head" href="mailto:digitalpride.almaty@gmail.com">digitalpride.almaty@gmail.com</a>
                                <a class="tel_head-feedback" href="mailto:digitalpride.almaty@gmail.com">напишите нам</a>
                            </span>
                        </div>
                        <div class="t-flex footer_t-flex">
                            <i class="icons icon-location"></i>
                            <span class="tel_head_wrap text-left">
                                г. Алматы, Бульвар Бухар жырау, 33, офис 40
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
<script type="text/javascript">AjaxForm.initialize({"assetsUrl":"\/assets\/components\/ajaxform\/","actionUrl":"\/assets\/components\/ajaxform\/action.php","closeMessage":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u0432\u0441\u0435","formSelector":"form.ajax_form","pageId":149});</script>

` }} />
    </>
  );
}
