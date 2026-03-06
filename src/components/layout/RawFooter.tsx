
import React from 'react';
export default function RawFooter() {
  return <div dangerouslySetInnerHTML={{ __html: `            </div>
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
<script type="text/javascript">AjaxForm.initialize({"assetsUrl":"\/assets\/components\/ajaxform\/","actionUrl":"\/assets\/components\/ajaxform\/action.php","closeMessage":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u0432\u0441\u0435","formSelector":"form.ajax_form","pageId":134});</script>

` }} />;
}
