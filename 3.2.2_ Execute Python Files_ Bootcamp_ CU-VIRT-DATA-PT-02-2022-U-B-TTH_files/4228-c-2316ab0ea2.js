(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[4228],{bh89:function(e,t,a){"use strict"
a.r(t)
var i=a("ouhR")
var n=a.n(i)
var d=a("qqwe")
a("Dh7j")
a("oa+I")
a("aq8L")
n()(document).ready((function(){n()("#floating_reminders").draggable()
n()(".show_reminders_link").click((function(e){e.preventDefault()
n()(this).blur()
const t=n()("#floating_reminders")
const a=t.clone()
a.children().css("visibility","hidden")
const i=n()("#reminders_icon").offset()
const d=n()("#floating_reminders").offset().top
t.after(a)
a.css({width:20,height:20,left:i.left,top:i.top-d,opacity:0})
t.css("visibility","hidden").css("left","")
a.animate({top:t.css("top"),left:t.css("left"),width:t.width(),height:t.height(),opacity:1},"slow",(function(){n()(this).remove()
t.css("visibility","visible")
t.find("a:not(.hide_reminders_link):visible:first").focus()
n()("#reminders_icon").hide()}))
t.find(".update_session_url").attr("href")}))
n()(".hide_reminders_link").click((function(e){e.preventDefault()
const t=n()(this).parents("#floating_reminders")
const a=t.clone()
t.after(a).css("left",-2e3)
a.children().css("visibility","hidden")
const i=n()("#reminders_icon").show().offset()
const d=a.offset().top
a.animate({width:20,height:20,left:i.left,top:i.top-d,opacity:0},"slow",(function(){n()(this).remove()}))
t.find(".update_session_url").attr("href")}))
n()(".drop_held_context_link").click((function(e){e.preventDefault()
const t=n()(this).parents(".reminder")
t.confirmDelete({url:n()(this).attr("href"),message:"Are you sure you want to drop this "+t.find(".item_type").text()+"?",success(e){n()(this).fadeOut("fast",(function(){n()(this).remove()
0===n()("#floating_reminders .reminder").length&&n()("#floating_reminders").fadeOut("fast",(function(){n()(this).remove()
n()("#reminders_icon").remove()}))}))}})}))}))
a("cFkJ")
var l=a("gI0r")
function r(e){e.data("handled",true)
const t=e.data("url")||e.attr("href")
const a=e.data("method")
const i=e.attr("target")
const d=n()(`<form method="post" action="${Object(l["a"])(t)}"></form>`)
const r=`\n    <input name="_method" value="${Object(l["a"])(a)}" type="hidden" />\n    <input name="authenticity_token" type="hidden" />\n  `
i&&d.attr("target",i)
d.hide().append(r).appendTo("body").submit()}function s(e){const t=e.data("confirm")
if(!t)return true
return confirm(t)}n()(document).delegate("a[data-confirm], a[data-method], a[data-remove]","click",(function(e){const t=n()(this)
if(t.data("handled")||!s(t))return false
if(t.data("remove")){o(t)
return false}if(t.data("method")){r(t)
return false}}))
function o(e){const t=e.data("remove")
let a=e
const i=e.data("url")
const d=e.closest(":ui-popup").popup("option","trigger").data("KyleMenu")
d&&d.opts.appendMenuTo&&(a=d.$placeholder)
const l=a.closest(t)
l.bind({beforeremove(){l.hide()},remove(){l.remove()}})
l.trigger("beforeremove")
const r=()=>l.trigger("remove")
const s=()=>l.show()
i?n.a.ajaxJSON(i,"DELETE",{},r,s):r()}var m=a("Nx6n")
n()(document).on("mousedown click keydown",".al-trigger",(function(e){const t=n()(this)
if(t.data("kyleMenu"))return
let a=n.a.extend({noButton:true},t.data("kyleMenuOptions"))
t.data("append-to-body")&&(a.appendMenuTo="body")
a=n.a.extend(a,{popupOpts:{position:{my:t.data("popup-my"),at:t.data("popup-at"),within:t.data("popup-within")}}})
new m["a"](t,a)
t.trigger(e)}))
a("897F")
function c(e){return function(){let t
const a=n()(this)
if(!(t=a.data("textWhileTarget"+e)))return
const i="textWhileTarget"+("Hidden"===e?"Shown":"Hidden")
const d=a.data(i)
d||a.data(i,a.text())
a.text(t)}}function _(e,t,a){let i
null==t&&(t=e.is(":ui-dialog:hidden")||"true"!==e.attr("aria-expanded"))
const d=n()(`[aria-controls*=${e.attr("id")}]`)
d.filter((function(){return n()(this).data("hideWhileTargetShown")})).toggle(!t)
if(a&&void 0!==a.attr("aria-expanded")){a.attr("aria-expanded",!("true"===a.attr("aria-expanded")))
e.toggle("true"===a.attr("aria-expanded"))}else e.attr("aria-expanded",""+t).toggle(t)
if(e.is(":ui-dialog")||(i=e.data("turnIntoDialog"))){if(i&&t){i=n.a.extend({autoOpen:false,close(){_(e,false)}},i)
e.dialog(i).fixDialogButtons()}if(t){var l,r
if(!!(null!==(l=window.ENV)&&void 0!==l&&null!==(r=l.FEATURES)&&void 0!==r&&r.responsive_misc)&&e.dialog("option").responsive){const t=e.dialog("option").width
if(t&&t>320&&!window.matchMedia(`(min-width: ${t}px)`).matches){e.dialog("option","width",320)
e.removeClass("form-horizontal")}}e.dialog("open")
e.data("read-on-open")&&e.dialog("widget").attr("aria-live","assertive").attr("aria-atomic","true")}else e.dialog("isOpen")&&e.dialog("close")}d.each(c(t?"Shown":"Hidden"))}const u={bind(){n()(document).on("click change keyclick",".element_toggler[aria-controls]",(function(e){let t
const a=n()(this)
if(a.is('input[type="checkbox"]')){if("click"===e.type)return
t=a.prop("checked")}"click"===e.type&&e.preventDefault()
let i=a.closest(".user_content")
i.length||(i=n()(document.body))
const d=i.find("#"+a.attr("aria-controls").replace(/\s/g,", #"))
d.length&&_(d,t,a)
const l=a.find('i[class*="icon-mini-arrow"].auto_rotate')
if(l.length){l.toggleClass("icon-mini-arrow-down")
l.toggleClass("icon-mini-arrow-right")}}))}}
u.bind()
const k=13
n()(document).on("keydown",".ic-Super-toggle__input",e=>{e.which===k&&n()(e.target).click()})
var f=a("HGxv")
var b=a("8WeW")
Object(b["a"])(JSON.parse('{"ar":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"???? ?????????? Kaltura ?????????? Canvas ??????"},"links":{"minimize_embedded_kaltura_content":"?????????? ?????????????? ????????????????"}}},"ca":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"El Kaltura s\'ha inhabilitat per a aquest lloc del Canvas"},"links":{"minimize_embedded_kaltura_content":"Minimitza el contingut incrustat"}}},"cy":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Mae Kaltura wedi???i analluogi ar gyfer y safle hwn ar Canvas"},"links":{"minimize_embedded_kaltura_content":"Lleihau cynnwys wedi\'i blannu"}}},"da":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura er blevet deaktiveret for denne Canvas-side"},"links":{"minimize_embedded_kaltura_content":"Minimer integreret indhold"}}},"da-x-k12":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura er blevet deaktiveret for denne Canvas-side"},"links":{"minimize_embedded_kaltura_content":"Minimer integreret indhold"}}},"de":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura wurde f??r diese Canvas-Website deaktiviert"},"links":{"minimize_embedded_kaltura_content":"Eingebettete Inhalte minimieren"}}},"el":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"???? Kaltura ?????????? ???????????????????????????????? ?????? ???????? ?????? ???????????????????? Canvas"},"links":{"minimize_embedded_kaltura_content":"???????????????????????????? ?????????????????????????? ????????????????????????"}}},"en-AU":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura has been disabled for this Canvas site"},"links":{"minimize_embedded_kaltura_content":"Minimise embedded content"}}},"en-AU-x-unimelb":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura has been disabled for this Canvas site"},"links":{"minimize_embedded_kaltura_content":"Minimise embedded content"}}},"en-CA":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura has been disabled for this Canvas site"},"links":{"minimize_embedded_kaltura_content":"Minimize embedded content"}}},"en-GB":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura has been disabled for this Canvas site"},"links":{"minimize_embedded_kaltura_content":"Minimise embedded content"}}},"en-GB-x-ukhe":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura has been disabled for this Canvas site"},"links":{"minimize_embedded_kaltura_content":"Minimise embedded content"}}},"es":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura ha sido desactivado para este sitio de Canvas"},"links":{"minimize_embedded_kaltura_content":"Minimizar contenido incrustado"}}},"es-ES":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura ha sido deshabilitado para este sitio de Canvas"},"links":{"minimize_embedded_kaltura_content":"Minimizar contenido incrustado"}}},"fa":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura ???????? ?????? ?????????????? ???????????? ?????? ???????? ?????? ??????"},"links":{"minimize_embedded_kaltura_content":"???? ?????????? ???????????? ???????????? ?????? ??????"}}},"fi":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura on poistettu k??yt??st?? t??ll?? Canvas-sivustolla"},"links":{"minimize_embedded_kaltura_content":"Minimoi upotettu sis??lt??"}}},"fr":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura a ??t?? d??sactiv?? pour ce site Canvas."},"links":{"minimize_embedded_kaltura_content":"R??duire le contenu incorpor??"}}},"fr-CA":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura a ??t?? d??sactiv?? pour ce site Canvas."},"links":{"minimize_embedded_kaltura_content":"R??duire le contenu incorpor??"}}},"he":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura ???????? ???????????? ???????? ???????? ????."},"links":{"minimize_embedded_kaltura_content":"???????????? ???????? ??????????"}}},"ht":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Yo dezaktive Kaltura pou sit Canvas sa a"},"links":{"minimize_embedded_kaltura_content":"Minimize kontni anbake"}}},"hu":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"A Kaltura le lett tiltva ezen a Canvas-oldalon"},"links":{"minimize_embedded_kaltura_content":"Be??gyazott tartalom m??ret??nek cs??kkent??se"}}},"hy":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura-?? ???????????????? ?? Canvas-?? ?????? ?????????? ??????????"},"links":{"minimize_embedded_kaltura_content":"?????????????????? ?????????? ????????????????????????????????"}}},"is":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura er ??virk ?? ??essari Canvas-s????u"},"links":{"minimize_embedded_kaltura_content":"L??gmarka innfellt efni"}}},"it":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura ?? stato disattivato per questo sito Canvas"},"links":{"minimize_embedded_kaltura_content":"Riduci a icona contenuto incorporato"}}},"ja":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"?????? Canvas ???????????????Kaltura ??????????????????????????????"},"links":{"minimize_embedded_kaltura_content":"?????????????????????????????????????????????"}}},"ko":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"??? Canvas ??????????????? Kaltura ?????? ??? ???"},"links":{"minimize_embedded_kaltura_content":"????????? ?????? ?????????"}}},"mi":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kua monokia Kaltura m?? t??nei pae Canvas"},"links":{"minimize_embedded_kaltura_content":"Whakam??kito ihirangi t??mau"}}},"nb":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura er sl??tt av p?? denne Canvas-siden"},"links":{"minimize_embedded_kaltura_content":"Minimer inkludert innhold"}}},"nb-x-k12":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura er sl??tt av p?? denne Canvas-siden"},"links":{"minimize_embedded_kaltura_content":"Minimer inkludert innhold"}}},"nl":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura is voor deze Canvas-site niet ingeschakeld"},"links":{"minimize_embedded_kaltura_content":"Ingesloten inhoud minimaliseren"}}},"nn":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura er deaktivert for denne Canvas-sida"},"links":{"minimize_embedded_kaltura_content":"Minimer innebygd innhald"}}},"pl":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Platforma Kaltura zosta??a wy????czona dla tej witryny Canvas"},"links":{"minimize_embedded_kaltura_content":"Minimalizuj zawarto???? osadzon??"}}},"pt":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"O Kaltura foi desativado para este site Canvas"},"links":{"minimize_embedded_kaltura_content":"Minimizar conte??do incorporado"}}},"pt-BR":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"O Kaltura foi desativado para este site Canvas"},"links":{"minimize_embedded_kaltura_content":"Minimizar conte??do incorporado"}}},"ru":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura ?????????????????? ?????? ?????????? ?????????? Canvas"},"links":{"minimize_embedded_kaltura_content":"???????????????? ???????????????????? ????????????????????"}}},"sl":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Platforma Kaltura za to mesto sistema Canvas je onemogo??ena."},"links":{"minimize_embedded_kaltura_content":"Minimiziraj vdelano vsebino"}}},"sv":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura har inaktiverats f??r den h??r Canvaswebbplatsen"},"links":{"minimize_embedded_kaltura_content":"Minimera det inb??ddade inneh??llet"}}},"sv-x-k12":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura har inaktiverats f??r den h??r Canvaswebbplatsen"},"links":{"minimize_embedded_kaltura_content":"Minimera det inb??ddade inneh??llet"}}},"th":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura ?????????????????????????????????????????????????????????????????? Canvas ?????????"},"links":{"minimize_embedded_kaltura_content":"??????????????????????????????????????????"}}},"tr":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Bu Canvas sitesi i??in Kaltura etkinle??tirilmemi??"},"links":{"minimize_embedded_kaltura_content":"B??l??m?? i??eri??i k??????lt"}}},"uk":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura ???????? ???????????????????? ?????? ?????????? ?????????? Canvas"},"links":{"minimize_embedded_kaltura_content":"???????????????????????? ???????????????????? ??????????????"}}},"vi":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"Kaltura ???? b??? t???t cho trang Canvas n??y"},"links":{"minimize_embedded_kaltura_content":"Gi???m thi???u n???i dung nh??ng"}}},"zh-Hans":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"??? Canvas ??????????????? Kaltura"},"links":{"minimize_embedded_kaltura_content":"????????????????????????"}}},"zh-Hant":{"instructure_inline_media_comment":{"alerts":{"kaltura_disabled":"????????? Canvas ???????????? Kaltura???"},"links":{"minimize_embedded_kaltura_content":"?????????????????????"}}}}'))
a("jQeR")
a("0sPK")
var h=f["default"].scoped("instructure_inline_media_comment")
var g=a("M+ds")
a("4fRt")
const p={buildMinimizerLink:()=>n()(`<a href="#" style="font-size: 0.8em;">\n      ${Object(l["a"])(h.t("links.minimize_embedded_kaltura_content","Minimize embedded content"))}\n    </a>`),buildCommentHolder:e=>n()('<div><div class="innerholder" tabindex="-1" style="margin-bottom: 15px;"></div></div>'),getMediaCommentId(e){let t
let a=e.data("media_comment_id")||e.find(".media_comment_id:first").text()
a||(t=e.attr("id"))
t&&t.match(/^media_comment_/)&&(a=t.substring(14))
return a},collapseComment(e){x(e.find("video,audio").data("mediaelementplayer"),e=>e.pause())
e.remove()
Object(g["a"])("hide_embedded_content","hide_media")}}
const v=e=>{n()(e.target).find("div.mejs-audio").focus()}
const z=300
const w=e=>{const t=e.closest("td")
return t.length>0}
const y=e=>{const t=e.closest("td").css("width").replace("px","")
return t<z}
const C=e=>w(e)&&y(e)
const K=e=>{const t=e.closest("td")
const a=t.css("width")
t.data("orig-width",a)
t.css("width",z+"px")}
n()(document).on("click","a.instructure_inline_media_comment",Object(d["a"])((function(){if(!INST.kalturaSettings){alert(h.t("alerts.kaltura_disabled","Kaltura has been disabled for this Canvas site"))
return}const e=n()(this)
let t="video"
const a=p.getMediaCommentId(e)
const i=p.buildCommentHolder(e)
C(e)&&K(e)
e.after(i)
e.hide();("audio"===e.data("media_comment_type")||e.is(".audio_playback, .audio_comment, .instructure_audio_link"))&&(t="audio")
i.children("div").mediaComment("show_inline",a,t,e.data("download")||e.attr("href"))
const l=p.buildMinimizerLink()
l.appendTo(i).click(Object(d["a"])(()=>{const t=e.closest("td")
e.show().focus()
t.css("width",t.data("orig-width"))
p.collapseComment(i)}))
Object(g["a"])("show_embedded_content","show_media")
i.find(".innerholder").css("outline","none")
i.find(".innerholder").on("focus",v)})))
function x(e,t){return"undefined"!==typeof e&&null!==e?t(e):void 0}if(ENV.ping_url){const e=setInterval(()=>{document.hidden||n.a.post(ENV.ping_url).fail(t=>{401===t.status&&clearInterval(e)})},18e4)}Object(b["a"])(JSON.parse('{"ar":{"locked_image_24f37a16":"???????? ????????????"},"ca":{"locked_image_24f37a16":"Imatge bloquejada"},"cy":{"locked_image_24f37a16":"Delwedd wedi???i chloi"},"da":{"locked_image_24f37a16":"L??st billede"},"da-x-k12":{"locked_image_24f37a16":"L??st billede"},"de":{"locked_image_24f37a16":"Gesperrtes Bild"},"en-AU":{"locked_image_24f37a16":"Locked image"},"en-AU-x-unimelb":{"locked_image_24f37a16":"Locked image"},"en-CA":{"locked_image_24f37a16":"Locked image"},"en-GB":{"locked_image_24f37a16":"Locked image"},"en-GB-x-lbs":{"locked_image_24f37a16":"Locked image"},"en-GB-x-ukhe":{"locked_image_24f37a16":"Locked image"},"es":{"locked_image_24f37a16":"Imagen bloqueada"},"es-ES":{"locked_image_24f37a16":"Imagen bloqueada"},"fa":{"locked_image_24f37a16":"?????????? ?????? ??????"},"fi":{"locked_image_24f37a16":"Lukittu kuva"},"fr":{"locked_image_24f37a16":"Image verrouill??e"},"fr-CA":{"locked_image_24f37a16":"Image verrouill??e"},"ht":{"locked_image_24f37a16":"Imaj Bloke"},"is":{"locked_image_24f37a16":"L??st mynd"},"it":{"locked_image_24f37a16":"Immagine bloccata"},"ja":{"locked_image_24f37a16":"????????????????????????"},"mi":{"locked_image_24f37a16":"??hua kua rakaina"},"nb":{"locked_image_24f37a16":"L??st bilde"},"nb-x-k12":{"locked_image_24f37a16":"L??st bilde"},"nl":{"locked_image_24f37a16":"Vergrendelde afbeelding"},"nn":{"locked_image_24f37a16":"L??st bilde"},"pl":{"locked_image_24f37a16":"Zablokowany obraz"},"pt":{"locked_image_24f37a16":"Imagem bloqueada"},"pt-BR":{"locked_image_24f37a16":"Imagem bloqueada"},"ru":{"locked_image_24f37a16":"?????????????????????????????? ??????????????????????"},"sl":{"locked_image_24f37a16":"Zaklenjena slika"},"sv":{"locked_image_24f37a16":"L??st bild"},"sv-x-k12":{"locked_image_24f37a16":"L??st bild"},"th":{"locked_image_24f37a16":"???????????????????????????????????????"},"vi":{"locked_image_24f37a16":"H??nh ???nh b??? kh??a"},"zh-Hans":{"locked_image_24f37a16":"????????????"},"zh-Hant":{"locked_image_24f37a16":"????????????"}}'))
var M=f["default"].scoped("broken_images")
var L=a("3lLS")
var j=a.n(L)
function O(e){e.addEventListener("error",e=>{const t=e.currentTarget
const a=()=>t.classList.add("broken-image")
t.src?fetch(t.src).then(e=>{if(403===e.status){t.src="/images/svg-icons/icon_lock.svg"
t.alt=M.t("Locked image")
t.width=100
t.height=100}else a()},a):a()})}function I(){Array.from(document.querySelectorAll('img:not([src=""])')).forEach(O)}j()(I)
const E=".lti-thumbnail-launch"
function S(e){e.preventDefault()
A.launch(n()(e.target).closest(E))}class B{constructor(){n()(document.body).delegate(E,"click",S)}launch(e){const t=JSON.parse(e.attr("target"))
const a=n()("<iframe/>",{src:e.attr("href"),allowfullscreen:"",width:t.displayWidth||500,height:t.displayHeight||500})
e.replaceWith(a)}}const A=new B(E)
function q(){document.querySelectorAll(".user_content").forEach(e=>e.querySelectorAll("*").forEach(e=>{const t=getComputedStyle(e)
"fixed"===t.position&&(e.style.position="relative")}))}const H=new MutationObserver((function(e){e.find(e=>e.addedNodes.length>0)&&q()}))
const N=document.getElementById("content")
N&&H.observe(N,{childList:true,subtree:true})
const T=document.getElementById("right-side")
T&&H.observe(T,{childList:true,subtree:true})
j()(()=>{q()})
var D=a("TMMl")
Object(D["a"])()
ENV.page_view_update_url&&a.e(4231).then(a.bind(null,"4HNs"))
n()("#skip_navigation_link").on("click",Object(d["a"])((function(){n()(n()(this).attr("href")).attr("tabindex",-1).focus()})))}}])

//# sourceMappingURL=4228-c-2316ab0ea2.js.map