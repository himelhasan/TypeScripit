const sites = [
  "https://blog.cloudmango.io",
  "http://bleuandcreme.com/",
  "http://bxfilms.tv",
  "http://1/JesusMasterHandymanLLC/",
  "http://24-7propertyrestorationservices.com/",
  "http://abroad-bd.com/",
  "http://bebescolibri.com/",
  "http://bxfilms.tv",
  "http://centureacademy.com",
  "http://debbq2night.com/",
  "http://earthenbrowns.com/",
  "http://financiallyspeaking.org/",
  "http://focusitservices.co.uk/",
  "http://food-of-the-gods.com/",
  "http://hawkersvast.com/",
  "http://insight2.tech/",
  "http://kupferidee.ch/",
  "http://kvickdack.se/",
  "http://metalworkwa.com.au",
  "http://mvmtfit.ae/",
  "http://nannyagency.com/",
  "http://obakie.com/",
  "http://ovenbusters.com.au/",
  "http://pureturnkey.com",
  "http://roundedminds.com/",
  "http://sgkoolkids.com/",
  "http://styleartinteriors.com/",
  "http://surefinancialfreedom.com/",
  "http://swatwool.com/",
  "http://time-fibre.my/",
  "http://travelwide.ltd/",
  "http://trust.konect.co.nz/",
  "http://valeriovisagli.com/",
  "http://web.uslocalbiz.org/247denverairportlimo/",
  "http://web.uslocalbiz.org/A1landscapeconstruction/",
  "http://web.uslocalbiz.org/AllTreeSeasonService/",
  "http://web.uslocalbiz.org/bestolli/",
  "http://web.uslocalbiz.org/carterwoodflooring/",
  "http://web.uslocalbiz.org/DunhamElectricalEdge",
  "http://web.uslocalbiz.org/ElectricalIndustries/",
  "http://web.uslocalbiz.org/EliteRelocationServices/",
  "http://web.uslocalbiz.org/EliteRelocationServices/",
  "http://web.uslocalbiz.org/KingofKingsCarpetCleaning",
  "http://web.uslocalbiz.org/MrRestorationEquipment",
  "http://web.uslocalbiz.org/USprotectiveservices/",
  "http://web.uslocalbiz.org/yurtsofamericanew/",
  "http://www.barlowbuilders.com.au",
  "http://www.bevep.be/",
  "http://www.crcc.org.au/",
  "http://www.engagethevision.org/",
  "http://www.growleads.online",
  "http://www.monashvet.com.au",
  "http://www.mvpinkandoffice.com",
  "http://www.mycomply.com.au",
  "http://www.orthotique.com.au",
  "http://www.rei-usa.com/",
  "http://www.soulffluence.com/",
  "http://www.soulffluence.com/",
  "http://www.tumutfitnessgym.com.au",
  "http://www.ujh.com.au",
  "http://zenorfashion.com",
  "https://7h.solverhood.site/",
  "https://7hillsproductions.com/",
  "https://activity-time.com/",
  "https://aioninsuranceconsultants.com/",
  "https://amandabiccum.com/",
  "https://amercast.com/",
  "https://ansaqaintl.com",
  "https://anwaraliarchitects.com/",
  "https://armabiollongroup.com/",
  "https://assets.littlerootsinc.com/",
  "https://badlaygapakistan.com/",
  "https://badlaygapakistan.com/",
  "https://bedland.com/",
  "https://beds.co.uk/",
  "https://bigfmindia.com/",
  "https://bijoy71.news",
  "https://bookstore.entrepreneur.com/",
  "https://boostenx.com/",
  "https://businessliners.com/",
  "https://buystocksnotstuff.co.uk/",
  "https://careclub24.com/",
  "https://chaiafsana.com/",
  "https://cleanerslist.com/",
  "https://cloudchainz.com/",
  "https://cobble.pk/",
  "https://consultisor.com/",
  "https://crownmicro.com.pk/",
  "https://daricaunsanayi.com/",
  "https://de.butterfly.tt/",
  "https://dmirzacreations.com/",
  "https://dreamjourney.ae/",
  "https://elevatelompoc.com/",
  "https://equipdom.com",
  "https://funnelstrategistpro.com",
  "https://granitequartzdepot.com",
  "https://gypsumdesigner.com",
  "https://hasaib.myshopify.com/",
  "https://hellogathr.com/",
  "https://hmathir.com/",
  "https://hotelparkdoha.com/",
  "https://infiniterockstar.com",
  "https://institutional.mimoo.dev/",
  "https://internetserviceusa.com/",
  "https://internetserviceusa.com/",
  "https://jackpotpakistan.com/",
  "https://japan-hana.com/",
  "https://juliettewooten.com/",
  "https://kaptaanestate.com/",
  "https://leatherholics.com/",
  "https://lifechoices.tips/",
  "https://limeteck.com",
  "https://macrodubai.com/",
  "https://meetlocalsluts.co.uk/",
  "https://mimbre.eu/",
  "https://mrjeans.com",
  "https://mstarproperty.com/",
  "https://new.rockportinstitute.com/",
  "https://ocho-game.com/",
  "https://osteopathe-merel.fr/",
  "https://pickybars.com",
  "https://polymerfinance.website/.....crypto",
  "Https://pookar.com",
  "https://primary.health/",
  "https://primealuminium.com.pk/",
  "https://primethemind.com/",
  "https://querohms.com/",
  "https://regalfoods.com.pk/",
  "https://richrockuniversity.com/bookin1/",
  "https://salewoot.com/",
  "https://scoutxsports.com/",
  "https://securious.de/",
  "https://seoneed.website",
  "https://sigmamotorsports.com.pk",
  "https://smartb-maling.com",
  "https://sobkino.com/",
  "https://stregsy.com/",
  "https://superxlearning.com/",
  "https://sweduco.se/",
  "https://teachit.online",
  "https://teachit.online/",
  "https://teslabytetoken.com/",
  "https://test.populina.app/",
  "https://thecaliberbd.com/",
  "https://theinnermatrix.com",
  "https://trainnow.co/",
  "https://transumo.com/",
  "https://tritecit.com/",
  "https://turtle360media.com/",
  "https://unitynbeyondlegals.com/",
  "https://vemessage.com/",
  "https://vibinessentials.com/",
  "https://weknowlondon.com",
  "https://writersfort.com/",
  "https://www.alaridflytt.se",
  "https://www.bloomfieldescape.com.au/",
  "https://www.buckblue.com/",
  "https://www.engagethevision.org/",
  "https://www.era.com/",
  "https://www.htmjenerator.com/",
  "https://www.huriatrust.co.nz/",
  "https://www.hypido.com/",
  "https://www.hypido.com/",
  "https://www.learningcurvesdrivingschool.com/",
  "https://www.menswearhouse.com/",
  "https://www.more-film.de/",
  "https://www.nubianluxebeautyshop.com/",
  "https://www.nubianluxebeautyshop.com/",
  "https://www.nutone-densi.com/en",
  "https://www.orangatamariki.govt.nz/",
  "https://www.qrgtech.com/biz/4302-bail-enforcement-agency-brooklyn-ny",
  "https://www.resolutionlawng.com/",
  "https://www.shoproductsteam.com/",
  "https://www.stephenstvet.com.au/",
  "https://www.wgtn.ac.nz/",
  "www.advanceddamp.co.uk",
  "www.technologist.nahidbd.com",
  "www.akispetretzikis.com",
  "www.apexfintechsolutions.com",
  "www.apexshippings.com",
  "www.avocado.pk",
  "www.bazookagoal.com",
  "www.benwhiteflorist.com",
  "www.buybullion.nz",
  "www.Canadabuzz.ca",
  "www.cassiahjay.com",
  "www.cleanenergyafrica.co.uk",
  "www.codener.com",
  "www.Cxosearch.co.uk",
  "www.danitravelogue.com",
  "www.duquelaw.com",
  "www.expresstranslate.com.au",
  "www.freshtohome.com",
  "www.geard360.com",
  "www.ghazeeoffal.co.za",
  "www.goldenstayvacationhomes.com",
  "www.idexx.com",
  "www.jetfuelyou.com",
  "www.jpassociates.co.za",
  "www.landshare.io ",
  "www.Lezzat.co.uk",
  "www.litheaudio.com",
  "www.maqsoodahmedtrading.co.za",
  "www.medical.nahidbd.com",
  "www.mitalenacoffee.com",
  "www.nahidbd.com",
  "www.parlatoothpastetabs.com",
  "www.pauldigitalstudio.com",
  "www.peak6.com",
  "www.perdomocigars.com",
  "www.phatymakhan.com",
  "www.rubyscouture.com",
  "www.shoelife.com.au",
  "www.smartgigit.ca",
  "www.soupologie.com",
  "www.sparkinsight.com",
  "www.system4solution.com",
  "www.thedellcenter.com",
  "www.theyolkfrat.io ",
  "www.tntgrouptravel.com",
  "www.trikartikapratama.com",
  "http://debbq2night.com/",
  "http://web.uslocalbiz.org/USprotectiveservices/",
  "https://www.nutone-densi.com/en",
  "http://web.uslocalbiz.org/ElectricalIndustries/",
  "https://www.tonyspizzamiami.com/",
  "https://www.nubianluxebeautyshop.com/",
  "http://web.uslocalbiz.org/KingofKingsCarpetCleaning",
  "https://limeteck.com",
  "https://www.shoproductsteam.com/",
  "https://www.chacedproperties.com/",
  "http://www.mvpinkandoffice.com",
  "http://24-7propertyrestorationservices.com/",
  "http://24-7propertyrestorationservices.com/",
  "http://web.uslocalbiz.org/KingofKingsCarpetCleaning",
  "http://web.uslocalbiz.org/yurtsofamericanew/",
  "http://bleuandcreme.com/",
  "http://growleads.online/",
  "http://bxfilms.tv",
  "https://resolutionlawng.com/",
  "https://gypsumdesigner.com",
];

let newSiteLinks = [];
// sites.forEach((site) => {
//   if (site.startsWith("http://") || site.startsWith("https://")) {
//     newSiteLinks.push(site);
//   } else {
//     let newUrl = "http://" + site;
//     newSiteLinks.push(newUrl);
//   }
// });

// const workingSites = [];
// const notWorkingSites = [];

// const checkAllSites = () => {
//   if (workingSites.length + notWorkingSites.length === sites.length) {
//     console.log("Working sites:", workingSites);
//     console.log("Not working sites:", notWorkingSites);
//   }
// };

// const checkSiteStatus = (siteName) => {
//   const protocol = siteName.startsWith("https://") ? require("https") : require("http");

//   protocol.get(siteName, (res) => {
//     if (res.statusCode >= 200 && res.statusCode < 400) {
//       workingSites.push(siteName);
//     } else {
//       notWorkingSites.push(siteName);
//     }
//     checkAllSites();
//   });
// };

// const checkSiteStatus = async (siteName) => {
//   try {
//     const response = await fetch(siteName);
//     if (response.status >= 400) {
//       notWorkingSites.push(siteName);
//     } else {
//       workingSites.push(siteName);
//     }
//   } catch (error) {
//     notWorkingSites.push(siteName);
//   }
// };

// sites.forEach(checkSiteStatus);

// console.log("workingSites", workingSites);
// const newSite = workingSites.map((site) => {
//   if (site.includes("https://")) {
//     const newUrl = site.split("https://")[1];
//     const li = document.createElement("li");
//     const a = document.createElement("a");
//     const text = document.createTextNode(site);
//     li.appendChild(text);
//     siteList.appendChild(li);
//     // return site;
//   } else if (site.includes("http://")) {
//     const site = site.split("http://")[1];
//     const li = document.createElement("li");
//     const text = document.createTextNode(site);
//     li.appendChild(text);
//     siteList.appendChild(li);
//     return site;
//   } else if (site.includes("www.")) {
//     const site = site.split("www.")[1];
//     const li = document.createElement("li");
//     const text = document.createTextNode(site);
//     li.appendChild(text);
//     siteList.appendChild(li);
//     return site;
//   } else {
//     const li = document.createElement("li");
//     const text = document.createTextNode(site);
//     li.appendChild(text);
//     siteList.appendChild(li);
//     return site;
//   }
// });

// newSite.map((site) => {

// });

const siteList = document.getElementById("site");
const newSite = sites.map((site) => {
  let newUrl = site.replace(/^https?:\/\//i, "").replace(/^www\./i, "");
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = site;
  a.textContent = newUrl;
  a.target = "_blank";
  li.appendChild(a);
  siteList.appendChild(li);
  return site;
});
