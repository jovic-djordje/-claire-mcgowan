import heroImg from "./hero-img.webp";
import thumbOne from "./Nina & Matthew.webp";
import thumbTwo from "./Emma & Joshua.webp";
import thumbThree from "./Catrin & Tim.webp";
import thumbFour from "./Victoria & Oscar.webp";
import thumbFive from "./Pippa & Josh.webp";
import thumbSix from "./Abbi & Craig.webp";
import thumbSeven from "./Alice & Kris.webp";
import thumbEight from "./Rhona & Stewart.webp";
import thumbNine from "./Rachel & Dom.webp";
import thumbTen from "./Nicole & Alex.webp";
import thumbEleven from "./Hannah & Xigg.webp";
import thumbTwelve from "./Carrie & Angus.webp";

import emmaOne from "./EJOne.webp";
import emmaTwo from "./EJTwo.webp";
import emmaThree from "./EJThree.webp";
import emmaFour from "./EJFour.webp";
import emmaFive from "./EJFive.webp";
import emmaSix from "./EJSix.webp";
import emmaSeven from "./EJSeven.webp";
import emmaEight from "./EJEight.webp";
import catrinOne from "./CTOne.webp";
import catrinTwo from "./CTTwo.webp";
import catrinThree from "./CTThree.webp";
import catrinFour from "./CTFour.webp";
import catrinFive from "./CTFive.webp";
import catrinSix from "./CTSix.webp";
import catrinSeven from "./CTSeven.webp";
import catrinEight from "./CTEight.webp";
import victoriaOne from "./VOOne.webp";
import victoriaTwo from "./VOTwo.webp";
import victoriaThree from "./VOThree.webp";
import victoriaFour from "./VOFour.webp";
import victoriaFive from "./VOFive.webp";
import victoriaSix from "./VOSix.webp";
import victoriaSeven from "./VOSeven.webp";
import victoriaEight from "./VOEight.webp";
import pippaOne from "./PJOne.webp";
import pippaTwo from "./PJTwo.webp";
import pippaThree from "./PJThree.webp";
import pippaFour from "./PJFour.webp";
import pippaFive from "./PJFive.webp";
import pippaSix from "./PJSix.webp";
import pippaSeven from "./PJSeven.webp";
import pippaEight from "./PJEight.webp";
import abbiOne from "./ACOne.webp";
import abbiTwo from "./ACTwo.webp";
import abbiThree from "./ACThree.webp";
import abbiFour from "./ACFour.webp";
import abbiFive from "./ACFive.webp";
import abbiSix from "./ACSix.webp";
import abbiSeven from "./ACSeven.webp";
import abbiEight from "./ACEight.webp";
import aliceOne from "./AKOne.webp";
import aliceTwo from "./AKTwo.webp";
import aliceThree from "./AKThree.webp";
import aliceFour from "./AKFour.webp";
import aliceFive from "./AKFive.webp";
import aliceSix from "./AKSix.webp";
import aliceSeven from "./AKSeven.webp";
import aliceEight from "./AKEight.webp";
import rhonaOne from "./RSOne.webp";
import rhonaTwo from "./RSTwo.webp";
import rhonaThree from "./RSThree.webp";
import rhonaFour from "./RSFour.webp";
import rhonaFive from "./RSFive.webp";
import rhonaSix from "./RSSix.webp";
import rhonaSeven from "./RSSeven.webp";
import rhonaEight from "./RSEight.webp";
import rachelOne from "./RDOne.webp";
import rachelTwo from "./RDTwo.webp";
import rachelThree from "./RDThree.webp";
import rachelFour from "./RDFour.webp";
import rachelFive from "./RDFive.webp";
import rachelSix from "./RDSix.webp";
import rachelSeven from "./RDSeven.webp";
import rachelEight from "./RDEight.webp";
import nicoleOne from "./NAOne.webp";
import nicoleTwo from "./NATwo.webp";
import nicoleThree from "./NAThree.webp";
import nicoleFour from "./NAFour.webp";
import nicoleFive from "./NAFive.webp";
import nicoleSix from "./NASix.webp";
import nicoleSeven from "./NASeven.webp";
import nicoleEight from "./NAEight.webp";
import hannahOne from "./HXOne.webp";
import hannahTwo from "./HXTwo.webp";
import hannahThree from "./HXThree.webp";
import hannahFour from "./HXFour.webp";
import hannahFive from "./HXFive.webp";
import hannahSix from "./HXSix.webp";
import hannahSeven from "./HXSeven.webp";
import hannahEight from "./HXEight.webp";
import carrieOne from "./CAOne.webp";
import carrieTwo from "./CATwo.webp";
import carrieThree from "./CAThree.webp";
import carrieFour from "./CAFour.webp";
import carrieFive from "./CAFive.webp";
import carrieSix from "./CASix.webp";
import carrieSeven from "./CASeven.webp";
import carrieEight from "./CAEight.webp";
import ninaOne from "./NMOne.webp";
import ninaTwo from "./NMTwo.webp";
import ninaThree from "./NMThree.webp";
import ninaFour from "./NMFour.webp";
import ninaFive from "./NMFive.webp";
import ninaSix from "./NMSix.webp";
import ninaSeven from "./NMSeven.webp";
import ninaEight from "./NMEight.webp";

const HeroImg = ({ className }) => {
  return (
    <img
      src={heroImg}
      alt="Claire McGowan, wedding photographer"
      className={className}
      fetchPriority="high"
      loading="eager"
      decoding="async"
    />
  );
};

const WorkImage = ({ src, alt, className = "" }) => {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
};

const works = [
  {
    id: 1,
    image: thumbOne,
    couple: "Nina & Matthew",
    alt: "Nina and Matthew wedding photography",
    slug: "nina-matthew",
    images: [
      {
        src: ninaOne,
        alt: "Black-and-white portrait over the shoulder of a smiling bride wearing a sheer pearl-embellished veil looking back.",
      },
      {
        src: ninaTwo,
        alt: "Full-length photo of a bride in a simple sleeveless gown holding a sunflower bouquet while smiling at a man in a blue suit outdoors",
      },
      {
        src: ninaThree,
        alt: "Black-and-white image of a bride and groom holding hands during their wedding ceremony indoors under a chandelier.",
      },
      {
        src: ninaFour,
        alt: "A woman in a yellow dress laughing in the audience at a wedding ceremony, holding a bouquet of sunflowers and blue flowers.",
      },
      {
        src: ninaFive,
        alt: "Bride and groom holding hands while walking on grass beside a stone wall and lush greenery.",
      },
      {
        src: ninaSix,
        alt: "Bride and groom sharing a candid glance while standing together in a wooded garden setting.",
      },
      {
        src: ninaSeven,
        alt: "Two men in suits sitting side by side on a wooden porch swing outdoors.",
      },
      {
        src: ninaEight,
        alt: "An elderly couple in formal attire arm-in-arm exiting a stone building through double white doors",
      },
    ],
  },

  {
    id: 2,
    image: thumbTwo,
    couple: "Emma & Joshua",
    alt: "Emma and Joshua wedding photography",
    slug: "emma-joshua",
    images: [
      {
        src: emmaSeven,
        alt: "Bride wearing an off-shoulder lace wedding dress holding out her sheer veil in an outdoor garden setting",
      },
      {
        src: emmaEight,
        alt: "Black and white editorial portrait of groom smiling in a classic tuxedo with a black bow tie",
      },
      { src: emmaOne, alt: "Newlywed couple holding hands" },

      {
        src: emmaFive,
        alt: "Groom greeting an older wedding guest outdoors during the wedding celebration",
      },
      {
        src: emmaTwo,
        alt: "Bride walking with her veil flowing behind her as the groom smiles in the background",
      },
      {
        src: emmaSix,
        alt: "Bride standing with her bridesmaids outdoors while holding white flowers",
      },
      {
        src: emmaThree,
        alt: "Newlywed couple walking together through a garden ",
      },

      {
        src: emmaFour,
        alt: "Newlywed couple enjoying an evening together outdoors",
      },
    ],
  },
  {
    id: 3,
    image: thumbThree,
    couple: "Catrin & Tim",
    alt: "Catrin and Tim wedding photography",
    slug: "catrin-tim",
    images: [
      {
        src: catrinOne,
        alt: "Bride and groom holding hands while reading during church wedding ceremony",
      },
      {
        src: catrinTwo,
        alt: "Smiling bride in white dress and groom in brown suit posing under glass train station canopy",
      },
      {
        src: catrinThree,
        alt: "Bride in long wedding dress holding a colorful flower bouquet ",
      },

      {
        src: catrinFour,
        alt: "Newlywed couple sitting together in a metro train holding wedding flower bouquet and red fan",
      },
      {
        src: catrinFive,
        alt: "Bride and groom wearing sunglasses posing coolly on metro station stairs against blue tiled wall",
      },
      {
        src: catrinSix,
        alt: "Two wedding guests wearing high-visibility orange safety vests and sunglasses holding metro tickets",
      },
      {
        src: catrinSeven,
        alt: "Bride dancing joyfully at evening wedding party holding a green folding hand fan",
      },

      {
        src: catrinEight,
        alt: "Bride wearing sunglasses and long veil holding hands with groom walking along riverside pier with fishing boats in background",
      },
    ],
  },
  {
    id: 4,
    image: thumbFour,
    couple: "Victoria & Oscar",
    alt: "Victoria and Oscar wedding photography",
    slug: "victoria-osar",
    images: [
      {
        src: victoriaEight,
        alt: "Bride and groom standing in atmospheric church interior with tall candleholder",
      },
      {
        src: victoriaSix,
        alt: "Interior of church with colorful stained glass arched windows, religious icons, and wooden pews",
      },

      {
        src: victoriaOne,
        alt: "Bride and groom holding hands during wedding ceremony in front of church altar and stained glass windows",
      },
      {
        src: victoriaTwo,
        alt: "Black and white photo of bride and groom singing from hymn books alongside church choir members by a grand piano",
      },
      {
        src: victoriaThree,
        alt: "Close-up of bridal bouquet with pastel roses, dahlias, and hanging floral greenery",
      },
      {
        src: victoriaFive,
        alt: "Black and white photo of bride and groom warmly hugging parents and family members in church after ceremony",
      },

      {
        src: victoriaFour,
        alt: "Black and white photo of smiling bride and groom holding hands while walking out of stone church through confetti thrown by guests",
      },

      {
        src: victoriaSeven,
        alt: "Smiling wedding guests in floral dresses clapping and cheering outside stone church",
      },
    ],
  },
  {
    id: 5,
    image: thumbFive,
    couple: "Pippa & Josh",
    alt: "Pippa and Josh wedding photography",
    slug: "pippa-josh",
    images: [
      {
        src: pippaOne,
        alt: "Bride in strapless white dress with flowing veil and groom in olive green double-breasted suit walking together on green field",
      },
      {
        src: pippaTwo,
        alt: "Groom and two groomsmen wearing matching sage green suits, black bow ties, and sunglasses posing in scenic countryside",
      },

      {
        src: pippaThree,
        alt: "Bride with long bridal veil posing happily with two bridesmaids in pastel pink dresses on grass lawn",
      },
      {
        src: pippaFour,
        alt: "Wide scenic shot of outdoor wedding ceremony on hilltop with seated guests and rolling hills landscape under blue sky",
      },
      {
        src: pippaFive,
        alt: "Bride holding colorful wedding bouquet and groom holding orange cocktail drinks walking through grassy outdoor venue",
      },
      {
        src: pippaSix,
        alt: "Cute black and tan cocker spaniel dog sitting adorably under bride's sheer lace wedding veil on lawn",
      },

      {
        src: pippaSeven,
        alt: "Bride kissing groom's cheek in open grassy field with countryside hills in soft background",
      },

      {
        src: pippaEight,
        alt: "Black and white portrait of smiling bride looking through sheer lace-trimmed wedding veil holding floral bouquet",
      },
    ],
  },
  {
    id: 6,
    image: thumbSix,
    couple: "Abbi & Craig",
    alt: "Abbi and Craig wedding photography",
    slug: "abbi-craig",
    images: [
      {
        src: abbiOne,
        alt: "Black and white portrait of groom wearing a black tuxedo, bow tie, and sunglasses",
      },
      {
        src: abbiTwo,
        alt: "Bride in off-shoulder white wedding dress laughing happily while holding hands with groom at outdoor altar",
      },
      {
        src: abbiThree,
        alt: "Black and white side portrait of bride with blonde hair in elegant updo under sheer wedding veil",
      },
      {
        src: abbiFour,
        alt: "Smiling bride holding colorful bouquet and groom waving hand while walking across sunny lawn",
      },
      {
        src: abbiFive,
        alt: "Wedding guests seated at outdoor tables mingling outside rustic stone barn venue under sunny blue sky",
      },
      {
        src: abbiSix,
        alt: "Bride and groom smiling outdoors holding their two toddler daughters dressed in white ruffled flower girl dresses",
      },
      {
        src: abbiSeven,
        alt: "Bride in off-shoulder wedding dress kneeling on grassy field talking to her little daughter",
      },
      {
        src: abbiEight,
        alt: "Bride and groom silhouetted kissing at golden hour sunset in countryside field",
      },
    ],
  },
  {
    id: 7,
    image: thumbSeven,
    couple: "Alice & Kris",
    alt: "Alice and Kris wedding photography",
    slug: "alice-kris",
    images: [
      {
        src: aliceOne,
        alt: "Excited bride in sleek white wedding dress holding bouquet and smiling groom in grey tweed suit walking down the aisle outdoors",
      },
      {
        src: aliceTwo,
        alt: "Bride and groom walking together outdoors showered with colorful paper confetti thrown by wedding guests",
      },
      {
        src: aliceThree,
        alt: "Bride with long veil and groom in dark suit standing together against vintage brick facade in cobblestone alley",
      },
      {
        src: aliceFour,
        alt: "Black and white photo of smiling newlywed couple walking down an empty historic city street",
      },
      {
        src: aliceFive,
        alt: "Four bridesmaids in colorful floral and tiered ruffled dresses laughing together in garden with brick wall",
      },
      {
        src: aliceSix,
        alt: "Bride in fitted white gown descending wooden staircase decorated with pastel flowers and burning candles",
      },
      {
        src: aliceSeven,
        alt: "Playful outdoor portrait of a bride licking an ice cream cone while holding a glass of champagne, standing next to the groom in sunglasses and a tweed suit who is also holding an ice cream cone",
      },
      {
        src: aliceEight,
        alt: "Full-length portrait of a smiling bride holding up her white gown while walking outdoors in front of blooming white blossom trees",
      },
    ],
  },
  {
    id: 8,
    image: thumbEight,
    couple: "Rhona & Stewart",
    alt: "Rhona and Stewart wedding photography",
    slug: "rhona-stewart",
    images: [
      {
        src: rhonaOne,
        alt: "A happy bride in a long-sleeved floral embroidered wedding gown twirls outdoors on a lawn with her veil flowing around her",
      },
      {
        src: rhonaTwo,
        alt: "A bride in a botanical embroidered gown and a groom in a dark suit sign their marriage document at a rustic wooden table surrounded by lush florals.",
      },
      {
        src: rhonaThree,
        alt: "A newly married couple walks hand-in-hand down the aisle under a covered wooden structure adorned with string lights and floral arrangements.",
      },
      {
        src: rhonaFour,
        alt: "Black-and-white photo of a laughing bride in a floral dress holding hands with the groom outdoors as her long veil trails behind her.",
      },
      {
        src: rhonaFive,
        alt: "Portrait of a smiling bride wearing a sheer dress with colorful floral embroidery, set against a natural outdoor garden background",
      },
      {
        src: rhonaSix,
        alt: "A bride and groom walk together outdoors on a grassy lawn near a pond, viewed from behind as the bride looks back over her shoulder",
      },
      {
        src: rhonaSeven,
        alt: "Black-and-white photo of a groom lifting and spinning his bride during their first dance on a wooden dance floor.",
      },
      {
        src: rhonaEight,
        alt: "Black-and-white photo of wedding guests seated on wooden benches, smiling while watching the ceremony",
      },
    ],
  },
  {
    id: 9,
    image: thumbNine,
    couple: "Rachel & Dom",
    alt: "Rachel and Dom wedding photography",
    slug: "rachel-dom",
    images: [
      {
        src: rachelOne,
        alt: "Full-length portrait of a smiling bride with arm tattoos in a white strapless gown standing holding hands with a groom in a black tuxedo in front of garden foliage.",
      },
      {
        src: rachelTwo,
        alt: "Black-and-white close-up of a groom kissing the forehead of his smiling bride, who wears a veil and has visible arm tattoos while holding a bouquet.",
      },
      {
        src: rachelThree,
        alt: "A bride in a flowing white gown with a long veil laughs joyfully while holding hands with the groom as they walk outdoors on a gravel path near a wooden fence.",
      },
      {
        src: rachelFour,
        alt: "Full-length portrait of a bride looking over her shoulder, showing the side profile and long train of her white gown against a backdrop of green bushes.",
      },
      {
        src: rachelFive,
        alt: "Close-up view of a bride holding a lush bouquet filled with white and light pink wildflowers tied with a soft ribbon",
      },
      {
        src: rachelSix,
        alt: "Black-and-white full-length portrait of a bride and groom wearing sunglasses, standing together outdoors in front of a rustic wooden doorway",
      },
      {
        src: rachelSeven,
        alt: "A groom in a black vest kisses his bride in a strapless gown outdoors in front of a hedge of blooming white hydrangeas.",
      },
      {
        src: rachelEight,
        alt: "Black-and-white photo of a newly married couple triumphantly holding hands raised in the air as they celebrate indoors.",
      },
    ],
  },

  {
    id: 10,
    image: thumbTen,
    couple: "Nicole & Alex",
    alt: "Nicole and Alex wedding photography",
    slug: "nicole-alex",
    images: [
      {
        src: nicoleOne,
        alt: "A bride and a groom hold daughter hands in a white dress who swings happily between them on a grassy lawn.",
      },
      {
        src: nicoleTwo,
        alt: "Black-and-white close-up of an emotional father hugging his daughter, the bride, as she wears her veil and wedding dress.",
      },
      {
        src: nicoleThree,
        alt: "Black-and-white photo of a groom kneeling down to speak to a daughter in an aisle while a guest wipes away tears in the background",
      },
      {
        src: nicoleFour,
        alt: "A bride and groom stand together at the front of a rustic barn aisle, with the groom holding their young daughter while guests look on",
      },
      {
        src: nicoleFive,
        alt: "A groom affectionately kisses his smiling bride on the cheek while she holds a colorful bouquet of pink and blue flowers against a leafy green background.",
      },
      {
        src: nicoleSix,
        alt: "A bride and groom look at each other and hold hands while posing in front of a dark, rustic wooden barn door.",
      },
      {
        src: nicoleSeven,
        alt: "A toddler flower girl in a white dress walks across a grassy field carrying two plush stuffed animal toys.",
      },
      {
        src: nicoleEight,
        alt: "Wide landscape shot of a bride and groom holding hands as they walk together through an open grassy field under a cloudy sky.",
      },
    ],
  },
  {
    id: 11,
    image: thumbEleven,
    couple: "Hannah & Xigg",
    alt: "Hannah and Xigg wedding photography",
    slug: "hannah-xigg",
    images: [
      {
        src: hannahOne,
        alt: "Black-and-white silhouette of a bride and groom holding hands as they exit through arched wooden church doors after their wedding.",
      },
      {
        src: hannahTwo,
        alt: "A joyful bride in an off-the-shoulder slit dress holding hands with the groom in a white dinner jacket as they exit a building surrounded by white floral arrangements.",
      },
      {
        src: hannahThree,
        alt: "Black-and-white profile shot of a bride standing outdoors in a long, lace-trimmed cathedral veil and gown while holding a bouquet of white roses.",
      },
      {
        src: hannahFour,
        alt: "Black-and-white profile shot of a bride standing outdoors in a long, lace-trimmed cathedral veil and gown while holding a bouquet of white roses.",
      },
      {
        src: hannahFive,
        alt: "Black-and-white photo of a bride holding her white bouquet while walking across a lawn alongside laughing bridesmaids in dark gowns.",
      },
      {
        src: hannahSix,
        alt: "Black-and-white shot of a bride gently lifting the edges of her delicate lace veil while posing outdoors in a fitted off-the-shoulder dress.",
      },
      {
        src: hannahSeven,
        alt: "Portrait of a bride standing in front of greenery while wearing a blusher veil draped over her head and holding its lace trim",
      },
      {
        src: hannahEight,
        alt: "Black-and-white rear view of a bride walking away on the grass, showcasing the full length and train of her cathedral-length veil.",
      },
    ],
  },
  {
    id: 12,
    image: thumbTwelve,
    couple: "Carrie & Angus",
    alt: "Carrie and Angus wedding photography",
    slug: "carrie-angus",
    images: [
      {
        src: carrieOne,
        alt: "Black-and-white portrait of a groom smiling away from the camera in a dark velvet tuxedo jacket with a bow tie",
      },
      {
        src: carrieTwo,
        alt: "Groom bending down to pet a golden retriever on a leash outdoors while wedding guests look on.",
      },
      {
        src: carrieThree,
        alt: "Mother of the bride in a blue dress and formal fascinator hat helping the bride adjust her gown's scarf-like train by a window.",
      },
      {
        src: carrieFour,
        alt: "Bride and groom seated at a wooden table decorated with blue, white, and yellow floral arrangements during their ceremony.",
      },
      {
        src: carrieFive,
        alt: "Full-length portrait of a bride standing on a lawn holding a pastel bouquet with a long embroidered train trailing behind her",
      },
      {
        src: carrieSix,
        alt: "Bride leaning down on a lawn to hug and kiss a golden retriever standing on its hind legs",
      },
      {
        src: carrieSeven,
        alt: "Black-and-white photo of a groom filming his bride outdoors using a vintage handheld camera while she smiles back at him.",
      },
      {
        src: carrieEight,
        alt: "Candid indoor reception photo of guests laughing on the dance floor as one man pours a drink for another kneeling below him.",
      },
    ],
  },
];

export { HeroImg, WorkImage, works };
