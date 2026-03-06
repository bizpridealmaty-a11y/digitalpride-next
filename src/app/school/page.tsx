
import Script from 'next/script';

export default function School() {
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

<section class="main-school fon-banner mb-4-">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="block-margin">
                    <h2 class="text-center" style="color: white;">
                        <span>Школа</span>
                    </h2>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="main-1 pt-5 pb-2">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h3>
                    <span>ОБУЧАЮЩИЙ SMM-КУ�&nbsp;С «МАНУФАКТУ�&nbsp;А»</span>
                </h3>
            </div>
        </div>
        <div class="row bl-reverse">
            <div class="col-md-6 bl-text">
                <p><b>Научим привлекать новых клиентов через соц. сети, выявлять свою целевую аудиторию и настраивать на
                    неё таргетированную рекламу, работать с фото- и видеоматериалом, создавать контент и составлять
                    маркетинговый план.
                </b></p>
                <p>Длительность курса 7 дней по 3 часа.<br>
                    Будние: 19.00 до 22.00<br>
                    Выходные: 11.00-14.00/15.00<br>
                    Ежедневные домашние задания, проверка.<br>
                    Обучение в центре Воронежа<br>
                </p>
                <div>
                    <button class="btn btn-primary btn-pad" data-toggle="modal" data-target="#modal_form-feed_kurs">
                        Записаться на курс
                    </button>
                </div>
            </div>
            <div class="col-md-6 bl-image">
                <img src="images/school1.png" alt="" class="mw-100">
            </div>
        </div>
    </div>
</section>

<section class="main-numbers school-numbers pt-5 pb-5">
    <div class="container">
        <div class="row numbers">
            <div class="col-12">
                <div class="d-flex">
                    <div class="number-item">
                        <div class="number-chislo h1">7</div>
                        <p class="">занятий в группе до 8 человек
                        </p>
                    </div>
                    <div class="number-item">
                        <div class="number-chislo h1">21</div>
                        <p class="">час теории с личной практикой
                        </p>
                    </div>
                    <div class="number-item">
                        <div class="number-chislo h1">30</div>
                        <p class="">рабочих инструментов для соц.сетей</p>
                    </div>
                    <div class="number-item">
                        <div class="number-chislo h1">50</div>
                        <p class="">готовых PhotoShop шаблонов</p>
                    </div>
                    <div class="number-item">
                        <div class="number-chislo h1">1440</div>
                        <p class="">часов тех поддержки и помощи</p>
                    </div>
                </div>
            </div>


        </div>
    </div>
</section>

<section class="main-kurs pt-3 pb-5">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3 class="text-center">
                    <span>ДЛЯ КОГО КУ�&nbsp;С</span>
                </h3>
            </div>
            <div class="col-12">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="kurs-item text-center">
                            <img src="fonts/k1.svg" alt="" class="pb-2">
                            <div><b>Предпринимателям и владельцам бизнеса</b></div>
                            <p>которые хотят получить востребованную интернет-профессию и найти интересную работу
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="kurs-item text-center">
                            <img src="fonts/k2.svg" alt="" class="pb-2">
                            <div><b>Менеджерам и руководителям</b></div>
                            <p>желающим продвигать свой бизнес самостоятельно или научиться контролировать работу
                                исполнителей</p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="kurs-item text-center">
                            <img src="fonts/k3.svg" alt="" class="pb-2">
                            <div><b>Начинающим маркетологам</b></div>
                            <p>тем, кто хочет обновить и систематизировать свои знания, узнать последние тренды
                                социальных сетей и особенности SMM-продаж</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="main-2 pt-3 pb-4">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h3>
                    <span>ЧТО ВЫ ПОЛУЧИТЕ НА КУ�&nbsp;СЕ</span>
                </h3>
            </div>
        </div>
        <div class="row bl-reverse">
            <div class="col-md-6 bl-text">

                <div id="accordion2" class="accordion">

 <div class="card">
                        <div class="card-header">
                            <div class="collapsed panel-title mb-0" data-toggle="collapse" data-target="#collapse-v-103" aria-expanded="false" aria-controls="collapse-v-103">
                                Наши специалисты подготовили для будущих студентов учебную программу, которая поможет ответить на вопросы:
                            </div>
                        </div>
                        <div id="collapse-v-103" class="collapse" data-parent="#accordion2">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit
                            </div>
                        </div>
                    </div>
<div class="card">
                        <div class="card-header">
                            <div class="collapsed panel-title mb-0" data-toggle="collapse" data-target="#collapse-v-104" aria-expanded="false" aria-controls="collapse-v-104">
                                Также вы получите материалы, которые помогут вам в работе с социальными медиа:
                            </div>
                        </div>
                        <div id="collapse-v-104" class="collapse" data-parent="#accordion2">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit
                            </div>
                        </div>
                    </div>
                </div>

                <p>Значительную часть курса составляют практические занятия. Сразу после окончания курса вы сможете
                    внедрить полученные знания в свой проект.
                </p>
                <div>
                    <button class="btn btn-primary btn-pad" data-toggle="modal" data-target="#modal_form-feed_kurs">
                        Записаться на курс
                    </button>
                </div>
            </div>
            <div class="col-md-6 bl-image">
                <img src="images/school2.png" alt="" class="mw-100">
            </div>
        </div>
    </div>
</section>

<section class="main-kurs pt-3 pb-5">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3 class="text-center">
                    <span>В ЧЕМ П�&nbsp;ЕИМУЩЕСТВА <br>КУ�&nbsp;СА SMM СПЕЦИАЛИСТ</span>
                </h3>
            </div>
            <div class="col-12">
                <div class="row advantages">
                    <div class="col-sm-4">
                        <div class="kurs-item text-center">
                            <img src="fonts/a1.svg" alt="" class="pb-2">
                            <div><b>Личный подход
                            </b></div>
                            <p>Курс учитывает вашу индивидуальную скорость усвоения материала. Можете быть спокойны — мы
                                ответим на все ваши вопросы
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="kurs-item text-center">
                            <img src="fonts/a2.svg" alt="" class="pb-2">
                            <div><b>Легкое усвоение
                            </b></div>
                            <p>Материалы даются на подробных слайдах и легко усваиваются с помощью наших методик
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="kurs-item text-center">
                            <img src="fonts/a3.svg" alt="" class="pb-2">
                            <div><b>Ориентация на результат
                            </b></div>
                            <p>SMM-курс «Мануфактура» нацелен на осуществление продаж через социальные сети
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="kurs-item text-center">
                            <img src="fonts/a4.svg" alt="" class="pb-2">
                            <div><b>Эффективные методики
                            </b></div>
                            <p>Курс основан на успешном опыте продаж нашего агентства. Вас ожидают не только теория, но
                                и практическая работа с подробным разбором примеров
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="kurs-item text-center">
                            <img src="fonts/a5.svg" alt="" class="pb-2">
                            <div><b>Актуальная информация
                            </b></div>
                            <p>При подготовке обучающей программы мы учитываем самые свежие обновления социальных сетей,
                                которые, к слову, происходят почти ежедневно
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="kurs-item text-center">
                            <img src="fonts/a6.svg" alt="" class="pb-2">
                            <div><b>Поддержка
                            </b></div>
                            <p>По окончании курса мы остаемся на связи с нашими выпускниками и в любой момент сможет
                                помочь вам в возникших вопросах. А еще мы следим за результатами каждого выпускника и
                                очень ими гордимся</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    </div>
</section>

<section class="pt-5 pb-2 mb-5">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="h3 text-center mb-3">
                    Запись на обучающий курс
                </div>
                <div class="form-1027">
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

    
    

	<input type="hidden" name="af_action" value="b5e3cd1bf450c9bd8bf20470f4f97d44">
</form>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="main-questions pt-5 pb-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <h3>
                    <span>ЧАСТО ЗАДАВАЕМЫЕ ВОП�&nbsp;ОСЫ</span>
                </h3>
                <div id="accordion" class="accordion">
                    <div class="card">
                        <div class="card-header">
                            <div class="collapsed panel-title mb-0" data-toggle="collapse" data-target="#collapse-f-95" aria-expanded="false" aria-controls="collapse-f-95">
                                В каком формате проходит обучение ?
                            </div>
                        </div>
                        <div id="collapse-f-95" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                Обучение проходит в очном формате в офисе Digital Pride в Воронеже.
                            </div>
                        </div>
                    </div>
<div class="card">
                        <div class="card-header">
                            <div class="collapsed panel-title mb-0" data-toggle="collapse" data-target="#collapse-f-96" aria-expanded="false" aria-controls="collapse-f-96">
                                А будет ли практика ?
                            </div>
                        </div>
                        <div id="collapse-f-96" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                Практические занятия начинаются с первого дня обучения. За весь курс у нас заложено 30 часов практики
                            </div>
                        </div>
                    </div>
<div class="card">
                        <div class="card-header">
                            <div class="collapsed panel-title mb-0" data-toggle="collapse" data-target="#collapse-f-97" aria-expanded="false" aria-controls="collapse-f-97">
                                Сколько человек будет на курсе ?
                            </div>
                        </div>
                        <div id="collapse-f-97" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                Формируются группы до 6 человек. Основная цель спикеров - научить каждого работать с инструментами контекстной рекламы.
                            </div>
                        </div>
                    </div>
<div class="card">
                        <div class="card-header">
                            <div class="collapsed panel-title mb-0" data-toggle="collapse" data-target="#collapse-f-98" aria-expanded="false" aria-controls="collapse-f-98">
                                Есть ли домашнее задание ?
                            </div>
                        </div>
                        <div id="collapse-f-98" class="collapse" data-parent="#accordion">
                            <div class="card-body">
                                Да, есть. Но они не занимают много вашего времени. Всю основную работу вы делаете на практических занятиях.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-6 d-none d-lg-block">
                <img src="images/school3.png" alt="" class="mw-100">
            </div>
        </div>
    </div>
</section>

<section class="section_kurs fon-banner pt-5">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="h3 text-center" style="color: white">ЧТО БУДЕТ НА КУ�&nbsp;СЕ</div>
                <br>

                <div class="row kurs-list justify-content-center">

                    <div class="col-sm-6">
                        <div class="kurs-list_item">
                            <div class="kurs-list_date h3">1 день</div>
                            <ul class="kurs-list_ul">
                                <li>Основы Social Media</li>
                                <li>Построение стратегии присутствия в социальных сетях Вконтакте Instagram Facebook
                                </li>
                                <li>Теоретические основы менеджмента, менеджмента продаж, интернет- маркетинга и
                                    SMM-менеджмента
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="kurs-list_item">
                            <div class="kurs-list_date h3">2 день</div>
                            <ul class="kurs-list_ul">
                                <li>Оформление ежедневных постов и основы копирайтинга, форматы рекламных объявлений.
                                </li>
                                <li>Структура постинга</li>
                                <li>Контентная стратегия, копирайтинг в социальных медиа, инструменты отложенного
                                    постинга
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="kurs-list_item">
                            <div class="kurs-list_date h3">3 день</div>
                            <ul class="kurs-list_ul">
                                <li>Визуальный контент и дизайн в социальных сетях</li>
                                <li>Особенности контента в социальных медиа</li>
                                <li>Подбор социально-медийных площадок для продвижения</li>
                                <li>Основы таргетированной рекламы</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="kurs-list_item">
                            <div class="kurs-list_date h3">4 день</div>
                            <ul class="kurs-list_ul">
                                <li>�&nbsp;азмещение рекламных объявлений в социальных интернет-медиа</li>
                                <li>Обзор основных инструментов.</li>
                                <li>Подход к реализации стратегии.</li>
                                <li>Основы таргетированной рекламы</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="kurs-list_item">
                            <div class="kurs-list_date h3">5 день</div>
                            <ul class="kurs-list_ul">
                                <li>Продвижение во ВКонтакте</li>
                                <li>Продвижение в Facebook</li>
                                <li>Продвижение в Instagram</li>
                                <li>�&nbsp;етаргетинг и парсинг аудиторий в соцсетях</li>
                                <li>Лидогенерация</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="kurs-list_item">
                            <div class="kurs-list_date h3">6 день</div>
                            <ul class="kurs-list_ul">
                                <li>Комьюнити-менеджмент</li>
                                <li>Повышение активности пользователей</li>
                                <li>Обработка позитивных и негативных сообщений</li>
                                <li>Управление коммуникациями в социальных интернет-медиа</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="kurs-list_item">
                            <div class="kurs-list_date h3">7 день “ЗАКЛЮЧЕНИЕ”</div>
                            <ul class="kurs-list_ul">
                                <li>Основные показатели эффективности в социальных сетях</li>
                                <li>Прогнозирование и оптимизация бюджета</li>
                                <li>Правильная постановка целей и KPI</li>
                                <li>Воронка продаж соц.сетей</li>
                                <li>CRM</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

<section class="pt-5 pb-2 mb-5">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="h3 text-center mb-3">
                    Запись на обучающий курс
                </div>
                <div class="form-1027">
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

    
    

	<input type="hidden" name="af_action" value="b5e3cd1bf450c9bd8bf20470f4f97d44">
</form>
                </div>
            </div>
        </div>
    </div>
</section>

<!--
<section class="section-videos pt-5 pb-5">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3 class="text-center">
                    <span>ОТЗЫВЫ НАШИХ ВЫПУСКНИКОВ О <br>ПРОХОЖДЕНИИ КУРСА <br>"МАНУФАКТУРА"</span>
                </h3>
            </div>
            <div class="col-12">
                <div class="">

                    <container class="vid-main-wrapper clearfix">
                        <!-- THE YOUTUBE PLAYER 
                        <div class="vid-container">                            
<iframe id="vid_frame"
                                    src="https://youtube.com/embed/WAcnWtZjDWE?autoplay=1&rel=0&showinfo=0&autohide=1"
                                    frameborder="0"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                        </div>
                    </container>

                    <div class="swiper-container video-thumbs">
                        <div class="swiper-wrapper">

<div class="swiper-slide">
                                <a class="" href="javascript:void(0);"
                                   onClick="document.getElementById('vid_frame').src='https://youtube.com/embed/WAcnWtZjDWE?autoplay=1&rel=0&showinfo=0&autohide=1'">
                                    <span class="vid-thumb center-img">
                                        <img src="images/video.svg" alt=""/>
                                    </span>
                                </a>
                            </div>
<div class="swiper-slide">
                                <a class="" href="javascript:void(0);"
                                   onClick="document.getElementById('vid_frame').src='https://youtube.com/embed/h8r5rbUmBzs?autoplay=1&rel=0&showinfo=0&autohide=1'">
                                    <span class="vid-thumb center-img">
                                        <img src="images/video.svg" alt=""/>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <!-- Add Arrows 
                        <div class="swiper-button-next swiper-button-white b-gallery"></div>
                        <div class="swiper-button-prev swiper-button-white b-gallery "></div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</section>
 -->

<div class="modal modal-reab fade" id="modal_form-feed_kurs">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-content_inner">
                <div class="close-reab" data-dismiss="modal"></div>
<form class="ajax_form af_example form-main aj_form" method="post">
    <input type="text" class="s-message" name="s-message" value="">
    <p class="form-descr form-title text-center">Записаться</p>
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
        <button type="submit" class="btn btn-primary">Записаться на курс</button>
    </div>

    
    

	<input type="hidden" name="af_action" value="4955a8bae8a68e109f3f924b007c7a2f">
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
<script type="text/javascript">AjaxForm.initialize({"assetsUrl":"\/assets\/components\/ajaxform\/","actionUrl":"\/assets\/components\/ajaxform\/action.php","closeMessage":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u0432\u0441\u0435","formSelector":"form.ajax_form","pageId":91});</script>

` }} />
    </>
  );
}
