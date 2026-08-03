import type { Metadata } from 'next';
import Link from 'next/link';
import RawFooter from '@/components/layout/RawFooter';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Политика конфиденциальности — Digital Pride',
    description: 'Политика обработки персональных данных Digital Pride в соответствии с законодательством Республики Казахстан о персональных данных и их защите.',
    alternates: { canonical: '/privacy', languages: { 'ru-KZ': '/privacy', 'kk-KZ': '/kk/privacy', 'x-default': '/privacy' } },
    robots: { index: true, follow: true },
};

export default function PrivacyPage() {
    return (
        <>
            <main className="bg-white pt-32 pb-24 min-h-screen">
                <article className="container mx-auto px-4 max-w-3xl">
                    <Breadcrumbs items={[{ name: 'Политика конфиденциальности', item: '/privacy' }]} />

                    <h1
                        className="text-3xl md:text-5xl font-extrabold text-black mb-4 tracking-tight"
                        style={{ fontFamily: "'Unbounded', sans-serif" }}
                    >
                        Политика конфиденциальности
                    </h1>
                    <p className="text-gray-500 mb-12">Дата последнего обновления: {new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold text-black mb-3">1. Общие положения</h2>
                            <p>Настоящая Политика обработки персональных данных (далее — «Политика») разработана и применяется маркетинговым агентством Digital Pride (далее — «Агентство») в соответствии с Законом Республики Казахстан «О персональных данных и их защите» от 21 мая 2013 года № 94-V.</p>
                            <p>Политика определяет порядок обработки персональных данных и меры по обеспечению их безопасности при использовании сайта <strong>https://digitalpride.kz</strong>.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-3">2. Какие данные мы собираем</h2>
                            <p>При оставлении заявки на сайте, заполнении формы обратного звонка, регистрации на курсы или подписке на рассылку мы можем запрашивать:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Имя</li>
                                <li>Номер телефона</li>
                                <li>Адрес электронной почты</li>
                                <li>Название компании / должность (по желанию)</li>
                                <li>Сообщение / описание задачи</li>
                            </ul>
                            <p>Также автоматически собирается обезличенная техническая информация через системы аналитики (Yandex.Metrika, Google Analytics, Meta Pixel): IP-адрес, тип устройства, браузер, источник перехода, страницы посещения, время на сайте.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-3">3. Цели обработки</h2>
                            <p>Персональные данные обрабатываются в следующих целях:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Связь с пользователем по его запросу (звонок, переписка)</li>
                                <li>Заключение и исполнение договоров оказания услуг</li>
                                <li>Информирование о новых услугах, акциях, мероприятиях (только при отдельном согласии)</li>
                                <li>Анализ эффективности сайта и улучшение пользовательского опыта</li>
                                <li>Соблюдение требований законодательства РК</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-3">4. Правовые основания обработки</h2>
                            <p>Обработка персональных данных осуществляется на основании:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Согласия субъекта персональных данных (отправка формы = согласие на обработку)</li>
                                <li>Заключённого договора оказания услуг</li>
                                <li>Требований законодательства РК</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-3">5. Сроки хранения</h2>
                            <p>Персональные данные хранятся в течение срока, необходимого для достижения целей обработки, но не более:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Заявки и запросы — до 3 лет с момента получения</li>
                                <li>Данные о клиентах в рамках действующих договоров — на срок действия договора и 5 лет после его прекращения</li>
                                <li>Маркетинговые данные — до отзыва согласия пользователем</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-3">6. Передача третьим лицам</h2>
                            <p>Персональные данные не передаются третьим лицам, за исключением случаев:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Использования технических сервисов для обработки заявок (Telegram, AmoCRM) — данные обрабатываются в рамках их пользовательских соглашений</li>
                                <li>По запросу государственных органов в соответствии с законодательством РК</li>
                                <li>При наличии прямого согласия субъекта персональных данных</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-3">7. Меры защиты</h2>
                            <p>Для защиты персональных данных мы применяем:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Шифрование данных по протоколу HTTPS (TLS)</li>
                                <li>Ограничение доступа к данным только уполномоченными сотрудниками</li>
                                <li>Регулярное обновление систем безопасности</li>
                                <li>Хранение данных на защищённых серверах</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-3">8. Cookies и аналитика</h2>
                            <p>На сайте используются cookies и системы аналитики (Yandex.Metrika, Google Analytics, Meta Pixel) для улучшения работы сервиса. Вы можете отключить cookies в настройках вашего браузера, однако это может повлиять на работу некоторых функций сайта.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-3">9. Права субъекта персональных данных</h2>
                            <p>В соответствии с Законом РК «О персональных данных и их защите» вы имеете право:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Получить информацию об обработке ваших персональных данных</li>
                                <li>Требовать уточнения, блокирования или уничтожения данных</li>
                                <li>Отозвать согласие на обработку</li>
                                <li>Обжаловать действия Агентства в уполномоченном органе по защите персональных данных</li>
                            </ul>
                            <p>Для реализации своих прав направьте запрос на email: <a href="mailto:digitalpride.almaty@gmail.com" className="text-red-600 underline">digitalpride.almaty@gmail.com</a> или WhatsApp: <a href="https://wa.me/77070357777" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">+7 (707) 035-77-77</a>.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-3">10. Контакты</h2>
                            <p><strong>Digital Pride</strong></p>
                            <p>г. Алматы, проспект Бухар-Жирау, 33, 3 этаж, студия 13</p>
                            <p>Email: digitalpride.almaty@gmail.com</p>
                            <p>Телефон: +7 (707) 035-77-77</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-3">11. Изменения политики</h2>
                            <p>Настоящая Политика может изменяться в соответствии с обновлением законодательства или внутренних регламентов Агентства. Актуальная версия всегда доступна по адресу <Link href="/privacy/" className="text-red-600 underline">https://digitalpride.kz/privacy/</Link>.</p>
                        </section>
                    </div>
                </article>
            </main>
            <RawFooter />
        </>
    );
}
