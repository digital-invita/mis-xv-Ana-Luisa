(() => {
  "use strict";

  
  // Evita listeners, timers y animaciones duplicadas si el script se inyecta dos veces.
  if (window.__DIGITAL_INVITA_APP_INITIALIZED__) {
    console.warn("Digital Invita ya estaba inicializada; se omitio una segunda carga.");
    return;
  }
  window.__DIGITAL_INVITA_APP_INITIALIZED__ = true;

    const INVITATION_CONFIG =
{
  "language": "es",
  "meta": {
    "pageTitle": "Mis XV | Ana Luisa",
    "ogTitle": "",
    "ogDescription": "Acompáñanos a celebrar este día tan especial.",
    "publicUrl": ""
  },
  "event": {
    "template": "xv",
    "label": "Mis XV",
    "age": "",
    "celebrantName": "Ana Luisa ",
    "doubleCelebrantEnabled": false,
    "celebrantName1": "Ana Luisa ",
    "celebrantName2": "",
    "celebrantSeparator": "&",
    "doubleNameLayout": "stacked",
    "person1Name": "",
    "person2Name": "",
    "eventDate": "2026-11-14T18:00",
    "eventEnd": "2026-11-15T02:00",
    "calendarTitle": "XV de Anilu",
    "timeZone": "America/Mexico_City",
    "eventLocation": "Salón de Eventos Condado del Valle",
    "rsvpCountryCode": "52",
    "rsvpPhone": "7222339350"
  },
  "theme": {
    "bgTop": "#101d49",
    "bgMid": "#702652",
    "bgBottom": "#080d23",
    "gold500": "#f2c06f",
    "sectionTitle": "#f5ecde",
    "scriptColor": "#f5ecde",
    "timelineColor": "#d8c8b4",
    "timelineTimeColor": "#f5ecde",
    "timelineTitleColor": "#ffffff",
    "timelineDescColor": "#ddd3df",
    "timelineFont": "Cormorant Garamond",
    "timelineImageSize": 100,
    "locationTitleColor": "#f5ecde",
    "locationTimeColor": "#d8c8b4",
    "locationPlaceColor": "#ffffff",
    "galleryTextColor": "#fffaf3",
    "galleryArrowColor": "#f5ecde",
    "particleColor": "#efe3d1",
    "buttonBg": "#e8dcc8",
    "buttonText": "#101d49",
    "fieldLabel": "#f5ecde",
    "fieldText": "#ffffff",
    "closingColor": "#f5ecde",
    "heroLabelColor": "#fff8ec",
    "heroNameColor": "#fffdf8",
    "heroDateColor": "#fff4cf",
    "heroNameSeparatorColor": "#fff4cf",
    "heroLabelSize": 100,
    "heroNameSize": 100,
    "heroDateSize": 100,
    "heroShadowStrength": 100,
    "heroShadowCoverage": 60,
    "openingKickerSize": 100,
    "openingTitleSize": 100,
    "openingCaptionSize": 100,
    "openingKicker": "#fff4eb",
    "openingTitle": "#fff4eb",
    "openingNameSeparatorColor": "#f2c06f",
    "openingAccent": "#fff4eb",
    "text": "#fffaf3",
    "muted": "#f6d8d0",
    "sectionOpacity": 33,
    "sectionSurface": "#ffffff",
    "sectionFillTopOpacity": 9,
    "sectionFillBottomOpacity": 5,
    "sectionFrameEnabled": true,
    "separatorMode": "line",
    "separatorImage": "",
    "separatorImageWidth": 70,
    "openingMode": "classic",
    "openingOpacity": 50,
    "openingEnvelopeDetailsEnabled": true,
    "openingEnvelopeEventEnabled": false,
    "openingEnvelopeNamesEnabled": false,
    "openingEnvelopeDateEnabled": false,
    "openingEffectEnabled": true,
    "openingEnvelopeBg": "#201b1a",
    "openingEnvelopePaper": "#f3dec0",
    "openingEnvelopeTexture": "",
    "particlesEnabled": true,
    "particlesOverSectionsEnabled": true,
    "particleDensity": 180,
    "particleSize": 100,
    "particleBrightness": 115,
    "particleSpeed": 130,
    "particleFastPercent": 30,
    "appleHeroScrollEnabled": true,
    "heroScrollHintEnabled": true,
    "heroScrollHintOffsetY": 0,
    "heroScrollCueEnabled": true,
    "heroScrollCueDelay": 2,
    "sectionScrollRevealEnabled": true,
    "sectionRevealEffects": {
      "story": true,
      "parents": true,
      "godparents": true,
      "ceremony": true,
      "reception": true,
      "lodging": true,
      "timeline": false,
      "countdown": true,
      "gallery": true,
      "dress": true,
      "adultNotice": true,
      "rsvp": true,
      "gifts": true,
      "agenda": true,
      "album": true,
      "closing": true
    },
    "backgroundImage": "media/fdanm.jpg",
    "backgroundImageOpacity": 33,
    "backgroundImagePositionX": 50,
    "ambientTintEnabled": false,
    "heroGroupOffsetY": -300,
    "heroLabelOffsetY": 0,
    "heroNameOffsetY": 0,
    "heroDateOffsetY": 0,
    "sectionBackgroundEnabled": false,
    "sectionBackgroundConfigured": true,
    "sectionBackgroundVersion": 1,
    "sectionBackgroundImage": "",
    "sectionBackgroundOpacity": 70,
    "sectionBackgroundPositionX": 50,
    "sectionBackgroundFit": "cover",
    "styleMode": "classic",
    "bodyFont": "Cormorant Garamond",
    "scriptFont": "Tangerine",
    "displayFont": "Petit Formal Script"
  },
  "sectionStyles": {
    "story": {
      "inheritTheme": true,
      "frameMode": "theme",
      "solidBg": "#702652",
      "solidOpacity": 92,
      "titleFont": "",
      "textFont": "",
      "fonts": {
        "heading": "",
        "body": ""
      },
      "fontSizes": {
        "heading": 100,
        "body": 100
      },
      "titleColor": "#f5ecde",
      "timeColor": "#f5ecde",
      "textColor": "#fffaf3",
      "buttonBg": "#e8dcc8",
      "buttonText": "#101d49"
    },
    "parents": {
      "inheritTheme": true,
      "frameMode": "theme",
      "solidBg": "#702652",
      "solidOpacity": 92,
      "titleFont": "",
      "textFont": "",
      "fonts": {
        "eyebrow": "",
        "names": "",
        "body": "",
        "notes": ""
      },
      "fontSizes": {
        "eyebrow": 100,
        "names": 100,
        "body": 100,
        "notes": 100
      },
      "titleColor": "#f5ecde",
      "timeColor": "#f5ecde",
      "textColor": "#fffaf3",
      "buttonBg": "#e8dcc8",
      "buttonText": "#101d49"
    },
    "godparents": {
      "inheritTheme": true,
      "frameMode": "theme",
      "solidBg": "#702652",
      "solidOpacity": 92,
      "titleFont": "",
      "textFont": "",
      "fonts": {
        "eyebrow": "",
        "names": "",
        "notes": ""
      },
      "fontSizes": {
        "eyebrow": 100,
        "names": 100,
        "notes": 100
      },
      "titleColor": "#f5ecde",
      "timeColor": "#f5ecde",
      "textColor": "#fffaf3",
      "buttonBg": "#e8dcc8",
      "buttonText": "#101d49"
    },
    "ceremony": {
      "inheritTheme": true,
      "frameMode": "theme",
      "solidBg": "#702652",
      "solidOpacity": 92,
      "titleFont": "",
      "textFont": "",
      "fonts": {
        "heading": "",
        "time": "",
        "place": "",
        "detail": "",
        "button": ""
      },
      "fontSizes": {
        "heading": 100,
        "time": 100,
        "place": 100,
        "detail": 100,
        "button": 100
      },
      "titleColor": "#f5ecde",
      "timeColor": "#d8c8b4",
      "textColor": "#ffffff",
      "buttonBg": "#e8dcc8",
      "buttonText": "#101d49"
    },
    "reception": {
      "inheritTheme": true,
      "frameMode": "theme",
      "solidBg": "#702652",
      "solidOpacity": 92,
      "titleFont": "",
      "textFont": "",
      "fonts": {
        "heading": "",
        "time": "",
        "place": "",
        "detail": "",
        "button": ""
      },
      "fontSizes": {
        "heading": 100,
        "time": 100,
        "place": 100,
        "detail": 100,
        "button": 100
      },
      "titleColor": "#f5ecde",
      "timeColor": "#d8c8b4",
      "textColor": "#ffffff",
      "buttonBg": "#e8dcc8",
      "buttonText": "#101d49"
    },
    "lodging": {
      "inheritTheme": true,
      "frameMode": "theme",
      "solidBg": "#702652",
      "solidOpacity": 92,
      "titleFont": "",
      "textFont": "",
      "fonts": {
        "heading": "",
        "time": "",
        "place": "",
        "detail": "",
        "button": ""
      },
      "fontSizes": {
        "heading": 100,
        "time": 100,
        "place": 100,
        "detail": 100,
        "button": 100
      },
      "titleColor": "#f5ecde",
      "timeColor": "#d8c8b4",
      "textColor": "#ffffff",
      "buttonBg": "#e8dcc8",
      "buttonText": "#101d49"
    },
    "countdown": {
      "inheritTheme": true,
      "frameMode": "solid",
      "solidBg": "#8a2142",
      "solidOpacity": 50,
      "titleFont": "",
      "textFont": "",
      "fonts": {
        "heading": "",
        "intro": "",
        "date": "",
        "numbers": "",
        "labels": "",
        "caption": "",
        "button": ""
      },
      "fontSizes": {
        "heading": 100,
        "intro": 100,
        "date": 100,
        "numbers": 100,
        "labels": 100,
        "caption": 100,
        "button": 100
      },
      "titleColor": "#f5ecde",
      "timeColor": "#f5ecde",
      "textColor": "#fffaf3",
      "buttonBg": "#e8dcc8",
      "buttonText": "#101d49"
    },
    "timeline": {
      "inheritTheme": true,
      "frameMode": "theme",
      "solidBg": "#702652",
      "solidOpacity": 92,
      "titleFont": "",
      "textFont": "",
      "fonts": {
        "heading": "",
        "time": "",
        "title": "",
        "desc": "",
        "note": "",
        "day": ""
      },
      "fontSizes": {
        "heading": 100,
        "time": 100,
        "title": 100,
        "desc": 100,
        "note": 100,
        "day": 100
      },
      "titleColor": "#f5ecde",
      "timeColor": "#f5ecde",
      "textColor": "#fffaf3",
      "buttonBg": "#e8dcc8",
      "buttonText": "#101d49"
    },
    "dress": {
      "inheritTheme": true,
      "frameMode": "theme",
      "solidBg": "#702652",
      "solidOpacity": 92,
      "titleFont": "",
      "textFont": "",
      "fonts": {
        "heading": "",
        "body": "",
        "note": ""
      },
      "fontSizes": {
        "heading": 100,
        "body": 100,
        "note": 100
      },
      "titleColor": "#f5ecde",
      "timeColor": "#f5ecde",
      "textColor": "#fffaf3",
      "buttonBg": "#e8dcc8",
      "buttonText": "#101d49"
    },
    "adultNotice": {
      "inheritTheme": true,
      "frameMode": "theme",
      "solidBg": "#702652",
      "solidOpacity": 92,
      "titleFont": "",
      "textFont": "",
      "fonts": {
        "heading": "",
        "body": ""
      },
      "fontSizes": {
        "heading": 100,
        "body": 100
      },
      "titleColor": "#f5ecde",
      "timeColor": "#f5ecde",
      "textColor": "#fffaf3",
      "buttonBg": "#e8dcc8",
      "buttonText": "#101d49"
    },
    "rsvp": {
      "inheritTheme": true,
      "frameMode": "theme",
      "solidBg": "#702652",
      "solidOpacity": 92,
      "titleFont": "",
      "textFont": "",
      "fonts": {
        "heading": "",
        "body": "",
        "fields": "",
        "buttons": "",
        "personalized": "",
        "receipt": ""
      },
      "fontSizes": {
        "heading": 100,
        "body": 100,
        "fields": 100,
        "buttons": 100,
        "personalized": 100,
        "receipt": 100
      },
      "titleColor": "#f5ecde",
      "timeColor": "#f5ecde",
      "textColor": "#fffaf3",
      "buttonBg": "#e8dcc8",
      "buttonText": "#101d49"
    },
    "gallery": {
      "inheritTheme": true,
      "frameMode": "theme",
      "solidBg": "#702652",
      "solidOpacity": 92,
      "titleFont": "",
      "textFont": "",
      "fonts": {
        "heading": "",
        "body": "",
        "nav": ""
      },
      "fontSizes": {
        "heading": 100,
        "body": 100,
        "nav": 100
      },
      "titleColor": "#f5ecde",
      "timeColor": "#f5ecde",
      "textColor": "#fffaf3",
      "buttonBg": "#e8dcc8",
      "buttonText": "#101d49"
    },
    "gifts": {
      "inheritTheme": true,
      "frameMode": "theme",
      "solidBg": "#702652",
      "solidOpacity": 92,
      "titleFont": "",
      "textFont": "",
      "fonts": {
        "heading": "",
        "body": "",
        "optionTitle": "",
        "button": ""
      },
      "fontSizes": {
        "heading": 100,
        "body": 100,
        "optionTitle": 100,
        "button": 100
      },
      "titleColor": "#f5ecde",
      "timeColor": "#f5ecde",
      "textColor": "#fffaf3",
      "buttonBg": "#e8dcc8",
      "buttonText": "#101d49"
    },
    "album": {
      "inheritTheme": true,
      "frameMode": "theme",
      "solidBg": "#702652",
      "solidOpacity": 92,
      "titleFont": "",
      "textFont": "",
      "fonts": {
        "heading": "",
        "body": "",
        "button": ""
      },
      "fontSizes": {
        "heading": 100,
        "body": 100,
        "button": 100
      },
      "titleColor": "#f5ecde",
      "timeColor": "#f5ecde",
      "textColor": "#fffaf3",
      "buttonBg": "#e8dcc8",
      "buttonText": "#101d49"
    },
    "agenda": {
      "inheritTheme": true,
      "frameMode": "theme",
      "solidBg": "#702652",
      "solidOpacity": 92,
      "titleFont": "",
      "textFont": "",
      "fonts": {
        "heading": "",
        "body": "",
        "button": ""
      },
      "fontSizes": {
        "heading": 100,
        "body": 100,
        "button": 100
      },
      "titleColor": "#f5ecde",
      "timeColor": "#f5ecde",
      "textColor": "#fffaf3",
      "buttonBg": "#e8dcc8",
      "buttonText": "#101d49"
    },
    "closing": {
      "inheritTheme": true,
      "frameMode": "theme",
      "solidBg": "#702652",
      "solidOpacity": 92,
      "titleFont": "",
      "textFont": "",
      "fonts": {
        "body": ""
      },
      "fontSizes": {
        "body": 100
      },
      "titleColor": "#f5ecde",
      "timeColor": "#f5ecde",
      "textColor": "#fffaf3",
      "buttonBg": "#e8dcc8",
      "buttonText": "#101d49"
    }
  },
  "images": {
    "hero": "media/fprincipal.jpg",
    "heroType": "image",
    "og": "media/portada-og.png",
    "story": "media/fhistoria.png",
    "seal": "media/sello_cera.png",
    "dress": "media/vestimenta.png",
    "envelope": "media/sobre.png",
    "surprise": "media/regalo.png",
    "gallery": [
      "media/G1.jpg",
      "media/G2.jpg",
      "media/G3.jpg",
      "media/G4.jpg",
      "media/G5.jpg",
      "media/G6.jpg"
    ],
    "galleryMediaTypes": [
      "image",
      "image",
      "image",
      "image",
      "image",
      "image"
    ],
    "galleryLayouts": [
      "auto",
      "auto",
      "auto",
      "auto",
      "auto",
      "auto"
    ]
  },
  "audio": {
    "src": "cancio.mp3",
    "showControl": false,
    "muteVideos": true,
    "loopVideos": true
  },
  "story": {
    "title": "Mi historia",
    "paragraph1Enabled": true,
    "paragraph1": "Hoy celebro una etapa llena de momentos inolvidables, de sueños que han ido creciendo conmigo y de personas que, con su cariño, han hecho especial cada paso de este camino.",
    "paragraph2Enabled": true,
    "paragraph2": "Mis 15 años marcan el comienzo de una nueva historia, llena de ilusiones, nuevos sueños y experiencias que guardaré para siempre en el corazón.",
    "showImage": true,
    "imageSize": 100
  },
  "family": {
    "parentsEyebrow": "En compañía de mis padres",
    "parentsNamesHtml": "Nombre de mamá<br>&amp;<br>Nombre de papá",
    "parentsGroups": [],
    "showGrandparents": false,
    "grandparentsEyebrow": "Y con la bendición de mis abuelos",
    "grandparentsNamesHtml": "",
    "showChildren": false,
    "childrenEyebrow": "Con el amor de sus hijos",
    "childrenNamesHtml": "",
    "parentsInviteText": "Tenemos el honor de invitarles a celebrar mis XV años.",
    "godparentsEyebrow": "Mis padrinos",
    "godparentsNamesHtml": "Nombre de padrino<br>&amp;<br>Nombre de madrina",
    "splitGodparentsEnabled": false,
    "godparentNoteAboveName": false,
    "godparentNoteSize": 100,
    "godparentNoteColor": "#d8c8b4",
    "godparentsFirstNote": "",
    "godparentsFirstNamesHtml": "",
    "godparentsSecondNote": "",
    "godparentsSecondNamesHtml": "",
    "godparentsItems": []
  },
  "ceremony": {
    "title": "Ceremonia",
    "time": "18:00 hrs",
    "place": "Iglesia de San José",
    "showPlaceDetail": true,
    "placeDetail": "(El Ranchito)",
    "mediaMode": "icon",
    "iconSrc": "media/cereminia.png",
    "mapEmbed": "",
    "photoSrc": "",
    "videoSrc": "",
    "mapLink": "https://maps.app.goo.gl/drRgZSsjNdzittR59"
  },
  "reception": {
    "title": "Recepción",
    "time": "19:30 hrs",
    "place": "Salón Condado del Valle",
    "showPlaceDetail": false,
    "placeDetail": "",
    "mediaMode": "icon",
    "iconSrc": "media/recepcion.png",
    "mapLink": "https://maps.app.goo.gl/rSdvcZ4zrb1GgxSn9",
    "mapEmbed": "",
    "photoSrc": "",
    "videoSrc": ""
  },
  "lodging": {
    "title": "Hospedaje",
    "options": []
  },
  "timeline": {
    "items": [
      {
        "time": "",
        "title": "Ceremonia",
        "desc": "Nombre del lugar de ceremonia.",
        "note": "",
        "image": ""
      },
      {
        "time": "",
        "title": "Recepción",
        "desc": "Nombre del lugar de recepción.",
        "note": "",
        "image": ""
      },
      {
        "time": "20:00 hrs",
        "title": "Vals",
        "desc": "Presentación de la quinceañera.",
        "note": "",
        "image": ""
      }
    ]
  },
  "countdown": {
    "title": "FALTAN",
    "intro": "",
    "caption": "",
    "inheritTheme": true,
    "captionColor": "#f6d8d0",
    "titleColor": "#f5ecde",
    "dateColor": "#f5ecde",
    "numberColor": "#f5ecde",
    "labelColor": "#fffaf3",
    "dateDisplayEnabled": true,
    "showCalendarButton": false,
    "calendarButtonLabel": "Agendar momento",
    "dateDaySuffix": "",
    "style": "date-card"
  },
  "dressCode": {
    "title": "Dress Code",
    "value": "Formal full black ",
    "note": "Azul reservado para la quinceañera.",
    "extraNoteEnabled": false,
    "extraNote": "",
    "paletteEnabled": false,
    "palettePosition": "before-icon",
    "palette": []
  },
  "adultNotice": {
    "title": "Una celebración para adultos",
    "text": "Con mucho cariño, hemos preparado esta celebración exclusivamente para adultos.\nAgradecemos mucho su comprensión."
  },
  "gifts": {
    "title": "Lluvia de sobres",
    "intro": "Tu presencia es el regalo más valioso, pero si deseas tener un detalle será recibido con mucho cariño.",
    "splitTitleEnabled": false,
    "titleLine1": "",
    "titleLine2": "",
    "titleLine1Color": "#f5ecde",
    "titleLine2Color": "#f5ecde",
    "titleLine1Size": 100,
    "titleLine2Size": 100,
    "layoutStyle": "classic",
    "option1Title": "Este día podrás acompañarme ",
    "option1Copy": "con un sobre.",
    "showOption1": true,
    "option2Title": "Regalo sorpresa",
    "option2Copy": "También puedes sorprenderme con un detalle elegido por ti.",
    "showOption2": false,
    "optionTitlePosition": "below",
    "linksIntro": "Si prefieres elegir un detalle en línea, también puedes apoyarte en estas opciones de mesa de regalos:",
    "showLinksTitle": true,
    "linksTitle": "Mesa de regalos",
    "linksTitlePosition": "above",
    "showLinks": false,
    "linkImageSize": 100,
    "links": [],
    "bankTransfer": {
      "enabled": false,
      "eyebrow": "",
      "title": "",
      "intro": "",
      "image": "",
      "bank": "",
      "beneficiary": "",
      "account": "",
      "clabe": "",
      "card": "",
      "concept": "",
      "imageSize": 100,
      "placement": {},
      "note": ""
    }
  },
  "album": {
    "title": "Álbum digital",
    "copy": "Comparte las mejores fotos de este gran día.",
    "buttonLabel": "Ver álbum digital",
    "buttonHref": "#",
    "showQr": true,
    "qrBackgroundOpacity": 100
  },
  "customSections": [],
  "rsvp": {
    "familyMode": false,
    "showGuestCount": false,
    "maxGuests": 2,
    "adultChildCountEnabled": false,
    "dualContactEnabled": false,
    "contact1Label": "Novia",
    "contact1CountryCode": "52",
    "contact1Phone": "",
    "contact2Label": "Novio",
    "contact2CountryCode": "52",
    "contact2Phone": "",
    "advancedConfirmationEnabled": false,
    "personalizedPassesEnabled": false,
    "dynamicPassesEnabled": false,
    "dynamicPasses": [],
    "deadlineNoteEnabled": true,
    "deadlineNoteText": "Agradecemos confirmar su asistencia antes del",
    "deadlineNoteDate": "Martes 20 de octubre",
    "reservedPassesText": "Nos hará mucha ilusión compartir este momento con ustedes.",
    "qrDotStyle": "dots",
    "qrColor": "#393238",
    "qrAccentColor": "#a4774d",
    "qrBackgroundColor": "#ffffff",
    "receiptTitle": "¡Gracias por confirmar!",
    "receiptText": "Nos dará mucho gusto compartir este momento con ustedes. Nos vemos pronto.",
    "confirmMessage": " Confirmación de asistencia \n\nCon mucha alegría confirmo mi presencia para celebrar {celebracion}.\n\nNombre: {nombre}\n{pases}\n\nSerá un honor acompañarte en este día tan especial.",
    "declineMessage": " {evento} \n\nHola, mi nombre es {nombre}.\n\nCon mucho cariño quiero decir que en esta ocasión no podré acompañarte,\npero te deseo un día maravilloso y lleno de felicidad.",
    "familyConfirmMessage": " Confirmación de asistencia familiar \n\nHola, somos la familia {familia}.\nCon mucha alegría confirmamos nuestra asistencia para celebrar {celebracion}.\n\nAsistiremos {cantidad}:\n{integrantes}\n\nSerá un gusto acompañarles en este día tan especial.",
    "familyDeclineMessage": " {evento} \n\nHola, somos la familia {familia}.\nCon mucho cariño queremos avisar que en esta ocasión no podremos acompañarles.\n\nLes deseamos una celebración maravillosa y llena de momentos inolvidables.",
    "firebase": {
      "enabled": false,
      "validateInvites": false,
      "invalidInviteMessage": "Solicita una invitación válida para poder confirmar.",
      "eventId": "mis-xv-ana-luisa",
      "collectionRoot": "rsvp",
      "apiKey": "",
      "authDomain": "",
      "projectId": "",
      "appId": ""
    }
  },
  "sections": {
    "story": true,
    "parents": false,
    "godparents": false,
    "ceremony": true,
    "reception": true,
    "lodging": false,
    "timeline": false,
    "countdown": true,
    "gallery": false,
    "dress": true,
    "adultNotice": false,
    "rsvp": true,
    "gifts": true,
    "agenda": false,
    "album": false,
    "closing": true
  },
  "layout": {
    "sectionOrder": [
      "story",
      "parents",
      "godparents",
      "ceremony",
      "reception",
      "timeline",
      "countdown",
      "gallery",
      "dress",
      "adultNotice",
      "rsvp",
      "gifts",
      "agenda",
      "album",
      "closing",
      "lodging"
    ]
  },
  "closing": {
    "note": "Gracias por ser parte de este momento inolvidable"
  },
  "brand": {
    "creditText": "Creado por Digital Invita",
    "creditHref": "https://www.facebook.com/profile.php?id=61587804296779&locale=es_LA",
    "ctaLabel": "Contáctanos",
    "ctaHref": "https://wa.me/525550591264?text=Hola%2C%20estoy%20interesado%28a%29%20en%20una%20invitaci%C3%B3n%20digital%20para%20mi%20evento.%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20dise%C3%B1os%2C%20precios%20y%20lo%20que%20incluye.",
    "inheritTheme": false,
    "footerBg": "#0f1127"
  }
}
      ;

    const DEFAULT_BRAND_CTA_HREF = "https://wa.me/525550591264?text=Hola%2C%20estoy%20interesado%28a%29%20en%20una%20invitaci%C3%B3n%20digital%20para%20mi%20evento.%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20dise%C3%B1os%2C%20precios%20y%20lo%20que%20incluye.";

    const DEFAULT_CONFIRM_MESSAGE = [
      " Confirmación de asistencia ",
      "",
      "Con mucha alegría confirmo mi presencia para celebrar {celebracion}.",
      "",
      "Nombre: {nombre}",
      "{pases}",
      "",
      "Será un honor acompañarte en este día tan especial."
    ].join("\n");
    const DEFAULT_DECLINE_MESSAGE = [
      " {evento} ",
      "",
      "Hola, mi nombre es {nombre}.",
      "",
      "Con mucho cariño quiero decir que en esta ocasión no podré acompañarte,",
      "pero te deseo un día maravilloso y lleno de felicidad."
    ].join("\n");
    const DEFAULT_FAMILY_CONFIRM_MESSAGE = [
      " Confirmación de asistencia familiar ",
      "",
      "Hola, somos la familia {familia}.",
      "Con mucha alegría confirmamos nuestra asistencia para celebrar {celebracion}.",
      "",
      "Asistiremos {cantidad}:",
      "{integrantes}",
      "",
      "Será un gusto acompañarles en este día tan especial."
    ].join("\n");
    const DEFAULT_FAMILY_DECLINE_MESSAGE = [
      " {evento} ",
      "",
      "Hola, somos la familia {familia}.",
      "Con mucho cariño queremos avisar que en esta ocasión no podremos acompañarles.",
      "",
      "Les deseamos una celebración maravillosa y llena de momentos inolvidables."
    ].join("\n");
    const DEFAULT_CONFIRM_MESSAGE_EN = [
      " Attendance confirmation ",
      "",
      "With joy, I confirm my attendance to celebrate {celebracion}.",
      "",
      "Name: {nombre}",
      "{pases}",
      "",
      "It will be an honor to join you on this special day."
    ].join("\n");
    const DEFAULT_DECLINE_MESSAGE_EN = [
      " {evento} ",
      "",
      "Hello, my name is {nombre}.",
      "",
      "With love, I want to let you know that I will not be able to attend this time,",
      "but I wish you a wonderful day filled with happiness."
    ].join("\n");
    const DEFAULT_FAMILY_CONFIRM_MESSAGE_EN = [
      " Family attendance confirmation ",
      "",
      "Hello, we are the {familia} family.",
      "With joy, we confirm our attendance to celebrate {celebracion}.",
      "",
      "Attending guests: {cantidad}",
      "{integrantes}",
      "",
      "It will be a pleasure to share this special day with you."
    ].join("\n");
    const DEFAULT_FAMILY_DECLINE_MESSAGE_EN = [
      " {evento} ",
      "",
      "Hello, we are the {familia} family.",
      "With love, we want to let you know that we will not be able to attend this time.",
      "",
      "We wish you a wonderful celebration filled with unforgettable moments."
    ].join("\n");
    const LEGACY_RESERVED_PASSES_TEXT = "{destinatario}, hemos reservado {reservados} para ustedes.";
    const DEFAULT_RESERVED_PASSES_TEXT = "Nos hará mucha ilusión compartir este momento con ustedes.";
    const BASE_SECTION_ORDER = [
      "story", "parents", "godparents", "ceremony", "reception", "lodging", "timeline",
      "countdown", "gallery", "dress", "adultNotice", "rsvp", "gifts",
      "agenda", "album", "closing"
    ];

    let EVENT_DATE = new Date(INVITATION_CONFIG.event.eventDate);
    let EVENT_END = new Date(INVITATION_CONFIG.event.eventEnd);
    let EVENT_LOCATION = INVITATION_CONFIG.event.eventLocation;
    let RSVP_PHONE = INVITATION_CONFIG.event.rsvpPhone;
    let RSVP_COUNTRY_CODE = INVITATION_CONFIG.event.rsvpCountryCode || "52";
    let rsvpFirebaseApp = null;
    let rsvpFirestore = null;
    let rsvpValidatedPersonalization = null;
    let rsvpValidationRun = 0;
    let rsvpValidationObserver = null;
    let rsvpValidationScheduled = false;
    let scrollLockY = 0;
    const lazyScriptPromises = new Map();

    const body = document.body;
    const overlay = document.getElementById("overlay");
    const openBtn = document.getElementById("openBtn");
    const audio = document.getElementById("audio");
    const audioSource = audio?.querySelector("source");
    const musicBtn = document.getElementById("musicBtn");
    const toTopBtn = document.getElementById("toTopBtn");
    const warpFlash = document.getElementById("warpFlash");
    const missionAccepted = document.getElementById("missionAccepted");
    const brandFooter = document.querySelector(".brand-footer");
    const overlayTitle = document.getElementById("overlayTitle");
    const heroName = document.getElementById("nombre");
    const heroLabel = document.querySelector(".hero-label");
    const fechaEvento = document.getElementById("fechaEvento");
    const heroSection = document.querySelector(".hero");
    const countdownEl = document.getElementById("countdown");
    const countdownCaption = document.getElementById("countdownCaption");
    const countdownDateCard = document.getElementById("countdownDateCard");
    const countdownDateMonth = document.getElementById("countdownDateMonth");
    const countdownDateWeekday = document.getElementById("countdownDateWeekday");
    const countdownDateDay = document.getElementById("countdownDateDay");
    const countdownDateYear = document.getElementById("countdownDateYear");
    const storySection = document.getElementById("storySection");
    const storyParagraphs = Array.from(document.querySelectorAll(".story-text"));
    let galleryItems = [];
    const galleryPreviewImg = document.getElementById("galleryPreviewImg");
    const galleryPreviewVideo = document.getElementById("galleryPreviewVideo");
    const galleryMetaIndex = document.getElementById("galleryMetaIndex");
    const galleryMetaHint = document.getElementById("galleryMetaHint");
    const galleryPrev = document.getElementById("galleryPrev");
    const galleryNext = document.getElementById("galleryNext");
    const galleryStage = document.getElementById("galleryStage");
    const galleryShowcase = document.querySelector(".gallery-showcase");
    const galleryGrid = document.getElementById("galleryGrid");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxVideo = document.getElementById("lightboxVideo");
    const lightboxMain = document.querySelector(".lightbox-main");
    const viewerCounter = document.getElementById("viewerCounter");
    const thumbs = document.getElementById("thumbs");
    const closeLightbox = document.getElementById("closeLightbox");
    const lightboxPrev = document.getElementById("lightboxPrev");
    const lightboxNext = document.getElementById("lightboxNext");
    const coordinatedGalleryVideos = new Set();
    let resumeMusicAfterGalleryVideo = false;
    let musicResumeTimer = 0;
    let heroScrollCueTimer = 0;
    let galleryVideoObserver = null;
    let galleryMediaLoadObserver = null;
    let galleryPreviewLoadObserver = null;
    let galleryPreviewHydrated = false;
    const guestName = document.getElementById("guestName");
    const guestNameField = document.getElementById("guestNameField");
    const guestNameLabel = document.getElementById("guestNameLabel");
    const guestCount = document.getElementById("guestCount");
    const adultChildCountField = document.getElementById("adultChildCountField");
    const adultChildCountTitle = document.getElementById("adultChildCountTitle");
    const adultChildCountHint = document.getElementById("adultChildCountHint");
    const adultChildSummary = document.getElementById("adultChildSummary");
    const adultCount = document.getElementById("adultCount");
    const childCount = document.getElementById("childCount");
    const adultCountLabel = document.getElementById("adultCountLabel");
    const rsvpPersonalization = document.getElementById("rsvpPersonalization");
    const rsvpPersonalizationRecipient = document.getElementById("rsvpPersonalizationRecipient");
    const rsvpPersonalizationText = document.getElementById("rsvpPersonalizationText");
    const rsvpPersonalizationPasses = document.getElementById("rsvpPersonalizationPasses");
    const rsvpInvalidNotice = document.getElementById("rsvpInvalidNotice");
    const familyMembersField = document.getElementById("familyMembersField");
    const familyMembersList = document.getElementById("familyMembersList");
    const confirmYes = document.getElementById("confirmYes");
    const confirmNo = document.getElementById("confirmNo");
    const rsvpContactButtons = document.getElementById("rsvpContactButtons");
    const rsvpCard = document.querySelector("#rsvpSection .rsvp-card");
    const rsvpReceipt = document.getElementById("rsvpReceipt");
    const rsvpReceiptTitle = document.getElementById("rsvpReceiptTitle");
    const rsvpReceiptText = document.getElementById("rsvpReceiptText");
    const rsvpReceiptName = document.getElementById("rsvpReceiptName");
    const rsvpReceiptCount = document.getElementById("rsvpReceiptCount");
    const rsvpReceiptAttendees = document.getElementById("rsvpReceiptAttendees");
    const rsvpReceiptQr = document.getElementById("rsvpReceiptQr");
    const rsvpReceiptFolio = document.getElementById("rsvpReceiptFolio");
    const rsvpDeadlineNote = document.getElementById("rsvpDeadlineNote");
    const agendaGalleryBtn = document.getElementById("agendaGalleryBtn");
    const countdownCalendarBtn = document.getElementById("countdownCalendarBtn");
    const countdownCalendarAction = document.getElementById("countdownCalendarAction");
    const verCuenta = document.getElementById("verCuenta");
    const toast = document.getElementById("toast");
    const agendaSection = document.getElementById("agendaSectionUi");
    const guestCountField = document.getElementById("guestCountField");
    const giftLinks = document.getElementById("giftLinks");
    const giftOption1Card = document.getElementById("giftOption1Card");
    const giftOption2Card = document.getElementById("giftOption2Card");
    const timelineList = document.getElementById("timelineList");
    const dressColorPalette = document.getElementById("dressColorPalette");
    const overlayScene = document.getElementById("overlayScene");
    const smartBackground = document.getElementById("smartBackground");
    const smartBackgroundImage = document.getElementById("smartBackgroundImage");
    const sealImage = document.getElementById("sealImage");
    const envelopePaperImage = document.getElementById("envelopePaperImage");
    const envelopeEventLabel = document.getElementById("envelopeEventLabel");
    const envelopeNames = document.getElementById("envelopeNames");
    const envelopeDate = document.getElementById("envelopeDate");
    const waxCaption = document.querySelector(".wax-caption");
    const heroImage = document.getElementById("heroImage");
    const heroVideo = document.getElementById("heroVideo");
    const storyImage = document.getElementById("storyImage");
    const ceremonyImage = document.getElementById("ceremonyImage");
    const ceremonyPhoto = document.getElementById("ceremonyPhoto");
    const ceremonyVideo = document.getElementById("ceremonyVideo");
    const ceremonyMapEmbed = document.getElementById("ceremonyMapEmbed");
    const ceremonyIconWrap = document.getElementById("ceremonyIconWrap");
    const ceremonyMapWrap = document.getElementById("ceremonyMapWrap");
    const ceremonyPhotoWrap = document.getElementById("ceremonyPhotoWrap");
    const ceremonyVideoWrap = document.getElementById("ceremonyVideoWrap");
    const receptionImage = document.getElementById("receptionImage");
    const receptionPhoto = document.getElementById("receptionPhoto");
    const receptionVideo = document.getElementById("receptionVideo");
    const receptionMapEmbed = document.getElementById("receptionMapEmbed");
    const receptionIconWrap = document.getElementById("receptionIconWrap");
    const receptionMapWrap = document.getElementById("receptionMapWrap");
    const receptionPhotoWrap = document.getElementById("receptionPhotoWrap");
    const receptionVideoWrap = document.getElementById("receptionVideoWrap");
    const lodgingList = document.getElementById("lodgingList");
    const dressImage = document.getElementById("dressImage");
    const envelopeImage = document.getElementById("envelopeImage");
    const surpriseImage = document.getElementById("surpriseImage");
    const albumQrLink = document.getElementById("albumQrLink");
    const albumQrCanvas = document.getElementById("albumQrCanvas");

    let currentIndex = 0;
    let previewIndex = 0;
    let previousParts = [];
    let envelopeScrollRevealActive = false;
    let envelopeScrollRevealPrimed = false;
    let storyStarted = false;
    let toastTimer = 0;
    let zoomScale = 1;
    let zoomX = 0;
    let zoomY = 0;
    let pinchStartDistance = 0;
    let pinchStartScale = 1;
    let panStartX = 0;
    let panStartY = 0;
    let dragOriginX = 0;
    let dragOriginY = 0;
    let isPanningImage = false;
    let lastTapTime = 0;
    let smartBackgroundNatural = { width: 0, height: 0 };
    let albumQrCode = null;
    let confirmationQrCode = null;
    let activeRsvpReceipt = null;

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const PUBLIC_CONFIG_KEY = "digital_invita_public_config_v1";
    const RSVP_RECEIPT_KEY_PREFIX = "digital_invita_rsvp_receipt_v1";
    const PREVIEW_SKIP_OPENING_KEY = "digital_invita_preview_skip_opening_v1";
    const PREVIEW_SCROLL_KEY = "digital_invita_preview_scroll_y_v1";
    const IS_EMBEDDED_PREVIEW = window.self !== window.top;
    const IS_MOBILE_DEVICE = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const USE_MOBILE_BEHAVIOR = IS_MOBILE_DEVICE || IS_EMBEDDED_PREVIEW;
    const IS_LOW_POWER_DEVICE = IS_MOBILE_DEVICE
      && ((navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 6)
      || (navigator.deviceMemory && navigator.deviceMemory <= 6));
    const EN_TRANSLATIONS = {
      "Abrir invitación": "Open invitation",
      "Iniciar misión": "Start mission",
      "Ingresar al cuartel": "Enter headquarters",
      "Sistemas listos": "Systems ready",
      "Formación lista": "Formation ready",
      "Misión aceptada": "Mission accepted",
      "Acceso autorizado": "Access granted",
      "Mi historia": "Our Story",
      "Hoy celebro no solo mis 15 años, sino cada sonrisa que iluminó mi camino y cada sueño que me ha traído hasta este momento tan especial.": "Today I celebrate not only my 15 years, but every smile that lit my way and every dream that has brought me to this very special moment.",
      "Aquí termina un capítulo lleno de recuerdos y comienza uno nuevo, donde la ilusión marca el inicio de todo lo que está por venir.": "Here, a chapter full of memories comes to a close, and a new one begins, filled with excitement for everything that is yet to come.",
      "Hoy celebro una etapa llena de sueños, aprendizajes y momentos que guardaré siempre en el corazón.": "Today I celebrate a chapter filled with dreams, lessons, and moments I will always hold in my heart.",
      "Gracias por acompañarme en esta noche tan especial, donde la alegría de mi familia y el cariño de quienes amo hacen que todo sea inolvidable.": "Thank you for joining me on this special night, where my family's joy and the love of those closest to me make everything unforgettable.",
      "Hay historias que comienzan sin avisar y, poco a poco, se convierten en hogar. La nuestra nació entre risas, conversaciones largas y sueños compartidos.": "Some stories begin unexpectedly and, little by little, become home. Ours was born through laughter, long conversations, and shared dreams.",
      "Hoy queremos celebrar este amor rodeados de las personas que han sido parte de nuestro camino. Gracias por acompañarnos en el inicio de esta nueva etapa.": "Today we want to celebrate this love surrounded by the people who have been part of our journey. Thank you for joining us as we begin this new chapter.",
      "Con mucha alegría recibiré el sacramento del Bautismo, rodeado del amor de mi familia y de las personas que forman parte de mi vida.": "With great joy, I will receive the sacrament of Baptism, surrounded by the love of my family and the people who are part of my life.",
      "Acompáñanos a compartir este momento de fe, esperanza y amor.": "Join us in sharing this moment of faith, hope, and love.",
      "Un año de aventuras, risas y mucho amor merece una gran celebración. ¡Esperamos contar con tu presencia!": "A year of adventures, laughter, and so much love deserves a wonderful celebration. We hope you can join us!",
      "Mateo cumple años y queremos celebrarlo con una tarde llena de juegos, risas y momentos especiales.": "Mateo is celebrating his birthday, and we want to enjoy an afternoon full of games, laughter, and special moments.",
      "Tu presencia hará que esta misión sea todavía más divertida.": "Your presence will make this mission even more fun.",
      "Con mucha alegría celebraremos el Bautizo de Emiliano, rodeados del amor de nuestra familia.": "With great joy, we will celebrate Emiliano's Baptism, surrounded by the love of our family.",
      "Gracias por acompañarnos en este momento tan especial.": "Thank you for joining us in this very special moment.",
      "Atención, equipo: se aproxima un cumpleaños lleno de alegría, juegos y grandes recuerdos. Tu presencia es parte esencial de esta celebración.": "Attention, team: a birthday full of joy, games, and great memories is coming. Your presence is an essential part of this celebration.",
      "Prepárate para compartir un día especial junto al festejado y toda su unidad familiar.": "Get ready to share a special day with the birthday child and the whole family unit.",
      "En compañía de mis padres": "Together with my parents",
      "Y con la bendición de mis abuelos": "And with the blessing of my grandparents",
      "Mis padrinos": "My godparents",
      "Ceremonia": "Ceremony",
      "Recepción": "Reception",
      "Hospedaje": "Lodging",
      "Mapa de hospedaje": "Lodging map",
      "Itinerario": "Timeline",
      "Galería": "Gallery",
      "Faltan pocos días": "The Countdown Begins",
      "Faltan": "Days to go",
      "FALTAN": "DAYS TO GO",
      "Cuenta regresiva": "Countdown",
      "Cuenta regresiva título": "Countdown title",
      "Días": "Days",
      "Horas": "Hours",
      "Min": "Min",
      "Seg": "Sec",
      "La cuenta regresiva ha comenzado para vivir un momento inolvidable.": "The countdown has begun for an unforgettable celebration.",
      "Preparando una noche inolvidable.": "Preparing an unforgettable evening.",
      "Fecha por definir.": "Date to be confirmed.",
      "Gracias por formar parte de este momento.": "Thank you for being part of this moment.",
      "Objetivo cumplido. El escuadrón ya está reunido.": "Mission accomplished. The squad is gathered.",
      "Agendar momento": "Add to calendar",
      "Cómo llegar": "Get directions",
      "Dress Code": "Dress Code",
      "Una celebración para adultos": "An Adults-Only Celebration",
      "Con mucho cariño, hemos preparado esta celebración exclusivamente para adultos.\nAgradecemos mucho su comprensión.": "With love, we have planned this celebration exclusively for adults.\nThank you for your understanding.",
      "Opciones de regalo": "Gift Options",
      "Tu presencia es el regalo más valioso, pero si deseas tener un detalle será recibido con mucho cariño.": "Your presence is the greatest gift, but if you wish to give a detail, it will be received with love.",
      "Lluvia de sobres": "Envelope Gifts",
      "Podrás acompañarme con un sobre el día del evento.": "You may bring an envelope gift on the day of the event.",
      "Regalo sorpresa": "Surprise Gift",
      "También puedes sorprenderme con un detalle elegido por ti.": "You may also surprise me with a gift of your choice.",
      "Si prefieres elegir un detalle en línea, también puedes apoyarte en estas opciones de mesa de regalos:": "If you prefer to choose a gift online, you can use these gift registry options:",
      "Mesa de regalos": "Gift Registry",
      "Abrir mesa": "Open registry",
      "Botón": "Button",
      "Álbum digital": "Digital Album",
      "Comparte las mejores fotos de este gran día.": "Share the best photos from this special day.",
      "Ver álbum digital": "View digital album",
      "Gracias por ser parte de este momento inolvidable": "Thank you for being part of this unforgettable moment",
      "Invitación creada con amor digital": "Invitation created with digital love",
      "Creado por Digital Invita": "Created by Digital Invita",
      "Invitaciones digitales para eventos": "Digital invitations for events",
      "Contáctanos": "Contact us",
      "Apellido o nombre de la familia": "Family name",
      "Tu nombre": "Your name",
      "Ej. Hernández García": "Example: Smith Family",
      "Escríbelo aquí": "Write it here",
      "Invitación preparada especialmente para": "Invitation prepared especially for",
      "Con mucho cariño": "With love",
      "Cupo reservado": "Reserved seats",
      "Selecciona una opción": "Select an option",
      "No aplica": "Not applicable",
      "Asistiré solo": "I will attend by myself",
      "Confirmar asistencia": "Confirm attendance",
      "No podré asistir": "I will not be able to attend",
      "¡Gracias por confirmar!": "Thank you for confirming!",
      "Nos dará mucho gusto compartir este momento con ustedes. Nos vemos pronto.": "We will be delighted to share this moment with you. See you soon.",
      "Preparando código QR...": "Preparing QR code...",
      "No fue posible generar el código QR.": "The QR code could not be generated.",
      "Revisa el número de WhatsApp en el panel.": "Please check the WhatsApp number in the panel.",
      "Por favor escribe tu nombre.": "Please enter your name.",
      "Escribe el apellido o nombre de la familia.": "Please enter the family name.",
      "Selecciona cuántas personas asistirán.": "Select how many people will attend.",
      "No fue posible preparar el QR. Intenta nuevamente.": "The QR could not be prepared. Please try again.",
      "No fue posible generar el QR. Intenta nuevamente.": "The QR could not be generated. Please try again.",
      "Preparando mensaje...": "Preparing message...",
      "Avisando...": "Sending notice...",
      "Estamos preparando tu confirmación.": "We are preparing your confirmation.",
      "Estamos preparando tu mensaje.": "We are preparing your message.",
      "Calendario listo para Apple Calendar.": "Calendar ready for Apple Calendar.",
      "Calendario listo. Si no se descargó, intenta de nuevo.": "Calendar ready. If it did not download, please try again.",
      "Se abrió Outlook y también se descargó respaldo .ics.": "Outlook opened and a backup .ics file was also downloaded.",
      "Se abrió Google Calendar y también se descargó respaldo .ics.": "Google Calendar opened and a backup .ics file was also downloaded.",
      "Se descargó un archivo .ics compatible con Samsung Calendar.": "A .ics file compatible with Samsung Calendar was downloaded.",
      "Se descargó un archivo .ics compatible con tu calendario.": "A .ics file compatible with your calendar was downloaded.",
      "Solicita una invitación válida para poder confirmar.": "Please request a valid invitation to confirm.",
      "Este enlace no contiene un código de invitación válido.": "This link does not contain a valid invitation code.",
      "Este enlace no contiene los datos necesarios o ya no está registrado para este evento.": "This link does not contain the required information or is no longer registered for this event.",
      "No fue posible validar esta invitación.": "This invitation could not be validated.",
      "Intenta nuevamente más tarde o solicita apoyo al anfitrión.": "Please try again later or contact the host.",
      "Validando invitación...": "Validating invitation...",
      "Estamos revisando que este enlace corresponda al evento.": "We are checking that this link belongs to the event.",
      "Esta invitación ya no está activa.": "This invitation is no longer active.",
      "Solicita apoyo al anfitrión para confirmar tu asistencia.": "Please contact the host to confirm your attendance.",
      "Esta invitación necesita validación.": "This invitation requires validation.",
      "Abre el enlace personalizado que recibiste para poder confirmar.": "Open the personalized link you received to confirm.",
      "Por favor confirma tu asistencia antes del día indicado.": "Please confirm your attendance before the indicated date.",
      "Invitación no válida": "Invalid invitation",
      "Aún no hay multimedia en la galería.": "There is no gallery media yet.",
      "No se pudo copiar automáticamente.": "Could not copy automatically.",
      "Dato bancario copiado.": "Bank detail copied.",
      "Copiar": "Copy",
      "Abrir": "Open",
      "Ver": "View",
      "Foto anterior": "Previous photo",
      "Foto siguiente": "Next photo",
      "Cerrar galería": "Close gallery",
      "Multimedia anterior": "Previous media",
      "Multimedia siguiente": "Next media",
      "Volver arriba": "Back to top",
      "Código QR de confirmación": "Confirmation QR code",
      "Código QR del álbum digital": "Digital album QR code",
      "Galería ampliada": "Expanded gallery",
      "Mapa de la ceremonia": "Ceremony map",
      "Mapa del salón": "Reception map",
      "Banco": "Bank",
      "Beneficiario": "Beneficiary",
      "Cuenta": "Account",
      "Tarjeta": "Card",
      "Concepto": "Reference",
      "Tarjeta para transferencia": "Bank transfer card",
      "Integrante": "Attendee",
      "Nombre completo": "Full name",
      "Confirmación de asistencia": "Attendance confirmation",
      "persona confirmada": "person confirmed",
      "personas confirmadas": "people confirmed",
      "Música desactivada": "Music disabled",
      "Reproducir música": "Play music",
      "Pausar música": "Pause music",
      "Día siguiente": "Next Day",
      "Nombre del lugar de ceremonia.": "Ceremony venue name.",
      "Nombre del lugar de recepción.": "Reception venue name.",
      "Presentación de la quinceañera.": "Quinceañera presentation.",
      "Operación programada. La unidad inicia preparativos.": "Operation scheduled. The unit begins preparations.",
      "La fecha señalada se aproxima. Todo marcha según el plan.": "The appointed date is approaching. Everything is going according to plan.",
      "Formación final. El escuadrón está por reunirse.": "Final formation. The squad is about to gather.",
      "Día de celebración. Presentarse en el punto de encuentro.": "Celebration day. Report to the meeting point.",
      "La nave ya está en preparación para el gran despegue.": "The ship is preparing for the big launch.",
      "La misión está cada vez más cerca.": "The mission is getting closer.",
      "Entramos en la recta final de lanzamiento.": "We are entering the final countdown.",
      "Todo está listo para despegar.": "Everything is ready for takeoff.",
      "Cada día suma emoción para esta noche especial.": "Every day brings more excitement for this special night.",
      "La emoción empieza a sentirse cada vez más cerca.": "The excitement is getting closer.",
      "Entramos en la recta final para celebrar en grande.": "We are entering the final stretch before the celebration.",
      "Todo está listo para una noche inolvidable.": "Everything is ready for an unforgettable evening.",
      "Pases reservados": "Reserved passes"
    };

    function currentLanguage() {
      return INVITATION_CONFIG.language === "en" ? "en" : "es";
    }

    function isEnglish() {
      return currentLanguage() === "en";
    }

    function t(text) {
      if (!isEnglish()) return text;
      return EN_TRANSLATIONS[text] || text;
    }

    function localizedText(value, spanishDefault, englishDefault) {
      const text = String(value || "").trim();
      if (!isEnglish()) return value;
      if (!text) return value;
      if (text === spanishDefault) return englishDefault || t(spanishDefault);
      return value;
    }

    function localizedDefaultText(value) {
      if (!isEnglish()) return value;
      return EN_TRANSLATIONS[value] || value;
    }

    function peopleLabel(total) {
      const number = Math.max(0, Number(total) || 0);
      if (isEnglish()) return number === 1 ? "1 person" : `${number} people`;
      return number === 1 ? "1 persona" : `${number} personas`;
    }

    function passLabel(total) {
      const number = Math.max(0, Number(total) || 0);
      if (isEnglish()) return number === 1 ? "1 pass" : `${number} passes`;
      return number === 1 ? "1 pase" : `${number} pases`;
    }

    function companionOptionLabel(companions) {
      const number = Math.max(0, Number(companions) || 0);
      if (isEnglish()) return number === 1 ? "1 companion" : `${number} companions`;
      const plural = number > 1 ? "s" : "";
      const acompana = number > 1 ? "n" : "";
      return `Me acompaña${acompana} ${number} persona${plural}`;
    }

    function companionOptionValue(companions) {
      const number = Math.max(0, Number(companions) || 0);
      const plural = number > 1 ? "s" : "";
      const acompana = number > 1 ? "n" : "";
      return `Me acompaña${acompana} ${number} persona${plural}`;
    }

    function attendanceSelectionLabel(count, familyMode) {
      if (familyMode) return peopleLabel(count);
      if (!isEnglish()) return count || "";
      if (count === "Asistiré solo") return t("Asistiré solo");
      const companions = Number.parseInt(String(count || "").match(/\d+/)?.[0] || "0", 10);
      if (companions > 0) return companions === 1 ? "I will attend with 1 companion" : `I will attend with ${companions} companions`;
      return count || "";
    }

    function englishOrdinalSuffix(day) {
      const value = Number(day);
      if (!Number.isFinite(value)) return "";
      const lastTwo = value % 100;
      if (lastTwo >= 11 && lastTwo <= 13) return "th";
      switch (value % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    }

    function eventDaySuffix(day) {
      const customSuffix = INVITATION_CONFIG.countdown?.dateDaySuffix || "";
      return isEnglish() ? (customSuffix || englishOrdinalSuffix(day)) : customSuffix;
    }

    function formatDisplayEventDate(date) {
      if (Number.isNaN(date.getTime())) return "";
      const timeZone = INVITATION_CONFIG.event.timeZone || "America/Mexico_City";
      if (!isEnglish()) {
        return date.toLocaleDateString("es-MX", {
          day: "numeric",
          month: "long",
          year: "numeric",
          timeZone
        });
      }
      const dateParts = new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone
      }).formatToParts(date);
      const part = (type) => dateParts.find((item) => item.type === type)?.value || "";
      const day = part("day");
      return [part("month"), `${day}${eventDaySuffix(day)}`, part("year")].filter(Boolean).join(" ");
    }

    if (IS_LOW_POWER_DEVICE) {
      body.classList.add("low-power");
    }
    if (IS_EMBEDDED_PREVIEW) {
      document.documentElement.classList.add("preview-embed");
    }
    if (USE_MOBILE_BEHAVIOR) {
      body.classList.add("mobile-optimized");
    }

    function setText(id, value) {
      const node = document.getElementById(id);
      if (node && value !== undefined && value !== null) node.textContent = value;
    }

    function applyNameLengthClasses(node, value) {
      if (!node) return;
      const length = String(value || "").replace(/\s+/g, " ").trim().length;
      node.classList.toggle("name-long", length > 14);
      node.classList.toggle("name-very-long", length > 26);
    }

    function escapeHtml(value) {
      return String(value || "").replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[char]));
    }

    function renderCelebrantName(node, options = {}) {
      if (!node) return;
      const event = INVITATION_CONFIG.event || {};
      const isWedding = event.template === "wedding";
      const nameParts = String(event.celebrantName || "").split(/\s+[&+•]\s+|\s+y\s+/i).map((part) => part.trim()).filter(Boolean);
      const firstName = (isWedding ? String(event.person1Name || "").trim() : "")
        || String(event.celebrantName1 || "").trim()
        || nameParts[0]
        || "";
      const secondName = (isWedding ? String(event.person2Name || "").trim() : "")
        || String(event.celebrantName2 || "").trim()
        || nameParts[1]
        || "";
      const separator = event.celebrantSeparator || "&";
      const doubleNameLayout = event.doubleNameLayout === "inline" ? "inline" : "stacked";
      const inlineName = String(event.celebrantName || "").trim();
      const isDouble = doubleNameLayout === "inline"
        ? (event.doubleCelebrantEnabled === true || isWedding) && inlineName
        : (event.doubleCelebrantEnabled === true || isWedding) && secondName;
      node.classList.toggle("name-double", isDouble);
      node.classList.toggle("name-wedding", isDouble && isWedding);
      node.classList.toggle("name-inline", isDouble && doubleNameLayout === "inline");
      if (!isDouble) {
        node.textContent = event.celebrantName || firstName;
        applyNameLengthClasses(node, event.celebrantName || firstName);
        return;
      }
      if (doubleNameLayout === "inline") {
        node.textContent = inlineName;
        applyNameLengthClasses(node, inlineName);
        return;
      }
      node.innerHTML = `
        <span class="name-duo ${options.compact ? "name-duo--compact" : ""} ${isWedding ? "name-duo--wedding" : ""} ${doubleNameLayout === "inline" ? "name-duo--inline" : "name-duo--stacked"}">
          <span class="name-duo__item">${escapeHtml(firstName)}</span>
          <span class="name-duo__separator">${escapeHtml(separator)}</span>
          <span class="name-duo__item">${escapeHtml(secondName)}</span>
        </span>
      `;
      applyNameLengthClasses(node, `${firstName} ${separator} ${secondName}`);
    }

    function setHTML(id, value) {
      const node = document.getElementById(id);
      if (node && value !== undefined && value !== null) node.innerHTML = value;
    }

    function setHref(id, value) {
      const node = document.getElementById(id);
      if (node && value !== undefined && value !== null) node.href = value;
    }

    function setOptionalLink(id, value) {
      const node = document.getElementById(id);
      if (!node) return;
      if (value) {
        node.href = value;
        node.hidden = false;
      } else {
        node.href = "#";
        node.hidden = true;
      }
    }

    function setOptionalText(id, value, enabled = true) {
      const node = document.getElementById(id);
      if (!node) return;
      const text = String(value || "").trim();
      node.textContent = text;
      node.hidden = !enabled || !text;
    }

    function renderRsvpDeadlineNote() {
      if (!rsvpDeadlineNote) return;
      const text = String(INVITATION_CONFIG.rsvp?.deadlineNoteText || "").trim();
      const date = String(INVITATION_CONFIG.rsvp?.deadlineNoteDate || "").trim();
      const enabled = INVITATION_CONFIG.rsvp?.deadlineNoteEnabled === true;
      rsvpDeadlineNote.hidden = !enabled || (!text && !date);
      if (rsvpDeadlineNote.hidden) {
        rsvpDeadlineNote.innerHTML = "";
        return;
      }
      rsvpDeadlineNote.innerHTML = [
        text ? `<span class="rsvp-deadline-note__text">${escapeHtml(text)}</span>` : "",
        date ? `<strong class="rsvp-deadline-note__date">${escapeHtml(date)}</strong>` : ""
      ].join("");
    }

    function setOptionalImage(node, value) {
      if (!node) return;
      if (value) {
        node.src = value;
        node.closest(".gift-figure, .dresscode-figure, .featured-photo")?.removeAttribute("hidden");
      } else {
        node.removeAttribute("src");
        node.closest(".gift-figure, .dresscode-figure, .featured-photo")?.setAttribute("hidden", "");
      }
    }

    function setScrollLocked(locked) {
      const wasLocked = body.classList.contains("locked");
      if (locked && !body.classList.contains("locked")) {
        scrollLockY = window.scrollY || document.documentElement.scrollTop || 0;
        body.style.position = "fixed";
        body.style.top = `-${scrollLockY}px`;
        body.style.left = "0";
        body.style.right = "0";
        body.style.width = "100%";
      }
      document.documentElement.classList.toggle("locked-scroll", locked);
      body.classList.toggle("locked", locked);
      if (!locked && wasLocked) {
        body.style.position = "";
        body.style.top = "";
        body.style.left = "";
        body.style.right = "";
        body.style.width = "";
        window.scrollTo(0, scrollLockY);
      }
    }

    function updateOverlayScale() {
      if (!overlayScene) return;
      const widthScale = window.innerWidth / 410;
      const heightScale = window.innerHeight / 900;
      const scale = Math.max(0.72, Math.min(1, Math.min(widthScale, heightScale)));
      document.documentElement.style.setProperty("--overlay-scale", scale.toFixed(3));
    }

    function setVisibility(node, visible) {
      if (!node) return;
      node.hidden = !visible;
    }

    function loadScriptOnce(src) {
      if (!src) return Promise.reject(new Error("Script sin ruta."));
      if (lazyScriptPromises.has(src)) return lazyScriptPromises.get(src);
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing?.dataset.loaded === "true") return Promise.resolve();
      const promise = new Promise((resolve, reject) => {
        const script = existing || document.createElement("script");
        script.src = src;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          script.dataset.loaded = "true";
          resolve();
        };
        script.onerror = () => reject(new Error(`No se pudo cargar ${src}`));
        if (!existing) document.head.appendChild(script);
      });
      lazyScriptPromises.set(src, promise);
      return promise;
    }

    function ensureQrLibrary() {
      if (typeof window.QRCodeStyling === "function") return Promise.resolve(true);
      return loadScriptOnce("assets/qr-code-styling.js?v=20260812-album-qr-center-v20")
        .then(() => typeof window.QRCodeStyling === "function")
        .catch((error) => {
          console.warn("No se pudo cargar QRCodeStyling.", error);
          return false;
        });
    }

    async function ensureFirebaseLibraries() {
      if (typeof window.firebase !== "undefined" && typeof window.firebase.firestore === "function") return true;
      try {
        await loadScriptOnce("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
        await loadScriptOnce("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js");
        return typeof window.firebase !== "undefined" && typeof window.firebase.firestore === "function";
      } catch (error) {
        console.warn("No se pudo cargar Firebase RSVP.", error);
        return false;
      }
    }

    function applyLocationMedia(config, nodes) {
      if (!nodes) return;

      const iconSrc = (config.iconSrc || "").trim();
      const mapEmbed = (config.mapEmbed || "").trim();
      const photoSrc = (config.photoSrc || "").trim();
      const videoSrc = (config.videoSrc || "").trim();
      const requestedMode = config.mediaMode || "icon";

      // El modo del panel decide que recurso existe en DOM activo; evita mapas ocultos cargando en segundo plano.
      let mode = requestedMode;
      if ((mode === "icon" || mode === "combined") && !iconSrc) {
        mode = mapEmbed ? "preview" : (photoSrc ? "photo" : (videoSrc ? "video" : "icon"));
      }
      if ((mode === "preview" || mode === "combined") && !mapEmbed) {
        mode = iconSrc ? "icon" : (photoSrc ? "photo" : (videoSrc ? "video" : "preview"));
      }
      if (mode === "photo" && !photoSrc) {
        mode = videoSrc ? "video" : (iconSrc ? "icon" : (mapEmbed ? "preview" : "photo"));
      }
      if (mode === "video" && !videoSrc) {
        mode = photoSrc ? "photo" : (iconSrc ? "icon" : (mapEmbed ? "preview" : "video"));
      }

      const showIcon = mode === "icon" || mode === "combined";
      const showMap = mode === "preview" || mode === "combined";
      const showPhoto = mode === "photo";
      const showVideo = mode === "video" && Boolean(videoSrc);

      if (nodes.icon) {
        if (showIcon && iconSrc) {
          nodes.icon.src = iconSrc;
        } else {
          nodes.icon.removeAttribute("src");
        }
      }
      if (nodes.map) {
        if (showMap && mapEmbed) {
          nodes.map.src = mapEmbed;
        } else {
          nodes.map.removeAttribute("src");
        }
      }
      if (nodes.photo) {
        if (showPhoto && photoSrc) {
          nodes.photo.src = photoSrc;
        } else {
          nodes.photo.removeAttribute("src");
        }
      }
      if (nodes.video) {
        nodes.video.muted = shouldMuteVideos();
        nodes.video.playsInline = true;
        nodes.video.loop = shouldLoopVideos();
        nodes.video.controls = !shouldMuteVideos();
        nodes.video.dataset.autoplayWhenVisible = shouldMuteVideos() ? "true" : "false";
        if (showVideo && videoSrc) {
          if (nodes.video.getAttribute("src") !== videoSrc) {
            nodes.video.src = videoSrc;
            nodes.video.load?.();
          }
          nodes.video.oncanplay = () => {
            if (shouldMuteVideos()) tryAutoplayGalleryVideo(nodes.video);
          };
          if (shouldMuteVideos()) {
            requestAnimationFrame(() => tryAutoplayGalleryVideo(nodes.video));
          }
        } else {
          nodes.video.oncanplay = null;
          nodes.video.pause?.();
          nodes.video.removeAttribute("src");
          nodes.video.load?.();
        }
      }

      setVisibility(nodes.iconWrap, showIcon);
      setVisibility(nodes.mapWrap, showMap);
      setVisibility(nodes.photoWrap, showPhoto);
      setVisibility(nodes.videoWrap, showVideo);
    }

    function lodgingScheduleText(option) {
      const parts = [];
      if (option.time) parts.push(option.time);
      if (option.checkIn) parts.push(`${isEnglish() ? "Check-in" : "Check-in"} ${option.checkIn}`);
      if (option.checkOut) parts.push(`${isEnglish() ? "Check-out" : "Check-out"} ${option.checkOut}`);
      return parts.join(" · ");
    }

    function renderLodgingOptions() {
      if (!lodgingList) return;
      lodgingList.innerHTML = "";
      const options = Array.isArray(INVITATION_CONFIG.lodging?.options) ? INVITATION_CONFIG.lodging.options : [];
      options.forEach((option, index) => {
        const card = document.createElement("article");
        card.className = "event-card lodging-card";
        const mediaId = `lodging${index}`;
        const detail = option.showPlaceDetail === true && option.placeDetail ? option.placeDetail : "";
        card.innerHTML = `
          ${option.title ? `<h3 class="lodging-card__title">${escapeHtml(option.title)}</h3>` : ""}
          ${lodgingScheduleText(option) ? `<div class="event-time">${escapeHtml(lodgingScheduleText(option))}</div>` : ""}
          <div class="event-place-group">
            ${option.place ? `<div class="event-place">${escapeHtml(option.place)}</div>` : ""}
            ${detail ? `<div class="event-place-detail">${escapeHtml(detail)}</div>` : ""}
          </div>
          <div class="event-media-stack" data-lodging-icon hidden>
            <div class="dresscode-figure">
              <img alt="${escapeAttribute(option.title || option.place || t("Hospedaje"))}" loading="lazy" decoding="async">
            </div>
          </div>
          <div class="event-media-stack" data-lodging-map hidden>
            <div class="map">
              <iframe loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="${escapeAttribute(t("Mapa de hospedaje"))}"></iframe>
            </div>
          </div>
          <div class="event-media-stack" data-lodging-photo hidden>
            <div class="event-place-photo">
              <img alt="${escapeAttribute(option.title || option.place || t("Hospedaje"))}" loading="lazy" decoding="async">
            </div>
          </div>
          <div class="event-media-stack" data-lodging-video hidden>
            <div class="event-place-video">
              <video id="${mediaId}Video" autoplay muted playsinline loop preload="none"></video>
            </div>
          </div>
          ${option.mapLink ? `<div><a class="btn" href="${escapeAttribute(option.mapLink)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("Cómo llegar"))}</a></div>` : ""}
        `;
        lodgingList.appendChild(card);
        const video = card.querySelector("video");
        applyLocationMedia(option, {
          icon: card.querySelector("[data-lodging-icon] img"),
          map: card.querySelector("[data-lodging-map] iframe"),
          photo: card.querySelector("[data-lodging-photo] img"),
          video,
          iconWrap: card.querySelector("[data-lodging-icon]"),
          mapWrap: card.querySelector("[data-lodging-map]"),
          photoWrap: card.querySelector("[data-lodging-photo]"),
          videoWrap: card.querySelector("[data-lodging-video]")
        });
        registerGalleryVideoPlayback(video, { observeVisibility: true, autoplayWhenVisible: true });
      });
    }

    function deepMerge(base, override) {
      if (Array.isArray(base)) {
        return Array.isArray(override) ? override : base;
      }

      const result = { ...base };
      Object.keys(override || {}).forEach((key) => {
        const baseValue = base[key];
        const overrideValue = override[key];
        if (baseValue && typeof baseValue === "object" && !Array.isArray(baseValue) && overrideValue && typeof overrideValue === "object" && !Array.isArray(overrideValue)) {
          result[key] = deepMerge(baseValue, overrideValue);
        } else {
          result[key] = overrideValue;
        }
      });
      return result;
    }

    const DEFAULT_CONFIG = JSON.parse(JSON.stringify(INVITATION_CONFIG));
    let BASE_CONFIG = JSON.parse(JSON.stringify(DEFAULT_CONFIG));

    function readStorageItem(key) {
      try {
        return localStorage.getItem(key);
      } catch (error) {
        console.warn("No se pudo leer almacenamiento local.", error);
        return null;
      }
    }

    function writeStorageItem(key, value) {
      try {
        localStorage.setItem(key, value);
        return true;
      } catch (error) {
        console.warn("No se pudo escribir almacenamiento local.", error);
        return false;
      }
    }

    function loadSavedConfig() {
      try {
        const raw = readStorageItem(PUBLIC_CONFIG_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          Object.assign(INVITATION_CONFIG, deepMerge(INVITATION_CONFIG, parsed));
        }
      } catch (error) {
        console.warn("No se pudo cargar la configuración guardada.", error);
      }
      // Toda configuracion, venga del codigo o del panel, pasa por la misma normalizacion.
      sanitizeInvitationConfig();
    }

    function saveConfigToStorage() {
      sanitizeInvitationConfig();
      return writeStorageItem(STORAGE_KEY, JSON.stringify(INVITATION_CONFIG));
    }

    function saveBaseConfigToStorage() {
      sanitizeInvitationConfig();
      BASE_CONFIG = JSON.parse(JSON.stringify(INVITATION_CONFIG));
      return writeStorageItem(BASE_STORAGE_KEY, JSON.stringify(BASE_CONFIG));
    }

    function validateStorageSnapshot(key) {
      try {
        const saved = readStorageItem(key);
        return Boolean(saved && JSON.parse(saved));
      } catch (error) {
        return false;
      }
    }

    function replaceConfig(target) {
      const clone = JSON.parse(JSON.stringify(target));
      Object.keys(INVITATION_CONFIG).forEach((key) => {
        delete INVITATION_CONFIG[key];
      });
      Object.assign(INVITATION_CONFIG, clone);
    }

    function slugifyFirebaseSegment(value, fallback = "evento-digital") {
      const slug = String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
      return slug || fallback;
    }

    function normalizeRsvpFirebaseConfig(value = {}) {
      const eventFallback = INVITATION_CONFIG.meta?.pageTitle || INVITATION_CONFIG.event?.celebrantName || INVITATION_CONFIG.event?.label || "evento-digital";
      return {
        enabled: value.enabled === true,
        validateInvites: value.validateInvites === true,
        invalidInviteMessage: String(value.invalidInviteMessage || "Solicita una invitación válida para poder confirmar.").trim().slice(0, 180),
        eventId: slugifyFirebaseSegment(value.eventId || eventFallback),
        collectionRoot: slugifyFirebaseSegment(value.collectionRoot || "rsvp", "rsvp"),
        apiKey: String(value.apiKey || "").trim(),
        authDomain: String(value.authDomain || "").trim(),
        projectId: String(value.projectId || "").trim(),
        appId: String(value.appId || "").trim()
      };
    }

    function normalizeDynamicPasses(items) {
      const source = Array.isArray(items) ? items : [];
      const usedCodes = new Set();
      return source.reduce((result, item) => {
        const code = String(item?.code || "").toUpperCase().replace(/[^A-Z0-9_-]/g, "").slice(0, 24);
        const passes = Math.max(1, Math.min(100, Number.parseInt(item?.passes, 10) || 0));
        if (!code || !passes || usedCodes.has(code)) return result;
        usedCodes.add(code);
        result.push({ code, passes });
        return result;
      }, []);
    }

    function setRootVar(name, value) {
      document.documentElement.style.setProperty(name, value);
    }

    function normalizeMediaSource(value, fallback = "") {
      const source = String(value || "").trim() || String(fallback || "").trim();
      if (!source) return "";
      if (/^(https?:|blob:|data:)/i.test(source)) return source;

      const normalized = source.replace(/^\/+/, "").replace(/\\/g, "/");
      if (normalized.startsWith("media/") || normalized.startsWith("assets/")) return normalized;

      const cleaned = normalized.split("/").pop().trim();
      if (!cleaned) return "";
      if (/\.[a-z0-9]{2,5}$/i.test(cleaned)) return `media/${cleaned}`;

      const fallbackMatch = String(fallback || "").trim().match(/\.([a-z0-9]{2,5})$/i);
      const fallbackExt = fallbackMatch ? `.${fallbackMatch[1]}` : ".jpg";
      return `media/${cleaned}${fallbackExt}`;
    }

    function normalizeAudioSource(value, fallback = "cancio.mp3") {
      const source = String(value || "").trim() || String(fallback || "").trim();
      if (!source) return "";
      if (/^(https?:|blob:|data:)/i.test(source)) return source;
      const normalized = source.replace(/^\/+/, "").replace(/\\/g, "/");
      if (normalized === "cancio.mp3" || normalized.startsWith("media/") || normalized.startsWith("assets/")) return normalized;
      const cleaned = normalized.split("/").pop().trim();
      return cleaned ? `media/${cleaned}` : "";
    }

    function mediaTypeFromSource(value, fallback = "image") {
      const hint = String(fallback || "").toLowerCase();
      if (hint === "video" || hint === "image") return hint;
      const source = String(value || "").trim();
      if (/^data:video\//i.test(source)) return "video";
      if (/^data:image\//i.test(source)) return "image";
      return /\.(mp4|m4v|mov|webm|ogv)$/i.test(source.split(/[?#]/)[0]) ? "video" : "image";
    }

    function mediaLabel(type) {
      return type === "video" ? "Video" : (isEnglish() ? "Photo" : "Foto");
    }

    function cssMediaUrl(value) {
      const source = String(value || "").trim();
      if (/^(https?:|blob:|data:)/i.test(source)) return `url("${source}")`;
      return `url("../${source}")`;
    }

    function cleanPublicUrl(value) {
      const source = String(value || "").trim();
      return /^https?:\/\//i.test(source) ? source : "";
    }

    function makeAbsoluteUrl(baseUrl, path) {
      const source = String(path || "").trim();
      if (!source || /^(https?:|data:|blob:)/i.test(source)) return source;
      const base = new URL(baseUrl);
      if (!base.pathname.endsWith("/") && /\.[a-z0-9]{2,8}$/i.test(base.pathname.split("/").pop() || "")) {
        base.pathname = base.pathname.replace(/\/[^/]*$/, "/");
      } else if (!base.pathname.endsWith("/")) {
        base.pathname = `${base.pathname}/`;
      }
      base.search = "";
      base.hash = "";
      return new URL(source.replace(/^\/+/, ""), base.href).href;
    }

    function extractMapEmbedUrl(value) {
      const source = String(value || "").trim();
      if (!source) return "";

      // El panel acepta la URL directa o el iframe completo copiado desde Google Maps.
      const srcMatch = source.match(/\bsrc=(["'])(.*?)\1/i);
      const candidate = srcMatch ? srcMatch[2] : source;
      return /^https:\/\/www\.google\.com\/maps\/embed\?/i.test(candidate) ? candidate : "";
    }

    function normalizeMediaMode(value, fallback = "icon") {
      return ["icon", "preview", "combined", "photo", "video"].includes(value) ? value : fallback;
    }

    function normalizeCountdownStyle(value) {
      return ["classic", "pulse", "crystal", "editorial", "date-card", "military", "military-tags", "military-radar"].includes(value) ? value : "classic";
    }

    function sanitizeImageConfig() {
      if (INVITATION_CONFIG.images.hero === "media/FPrincipal_buzz.jpg") INVITATION_CONFIG.images.hero = "media/FPrincipal.jpg";
      if (INVITATION_CONFIG.images.seal === "media/sello_cera_buzz.png") INVITATION_CONFIG.images.seal = "media/sello_cera.png";
      if (INVITATION_CONFIG.images.envelope === "media/sobre_buzz.svg") INVITATION_CONFIG.images.envelope = "";
      if (INVITATION_CONFIG.images.surprise === "media/regalo_buzz.svg") INVITATION_CONFIG.images.surprise = "";
      INVITATION_CONFIG.images.gallery = (INVITATION_CONFIG.images.gallery || []).filter((item) => ![
        "media/FPrincipal_buzz.jpg",
        "media/sobre_buzz.svg",
        "media/regalo_buzz.svg"
      ].includes(item));
      INVITATION_CONFIG.images.hero = normalizeMediaSource(INVITATION_CONFIG.images.hero, DEFAULT_CONFIG.images.hero);
      INVITATION_CONFIG.images.heroType = mediaTypeFromSource(INVITATION_CONFIG.images.hero, INVITATION_CONFIG.images.heroType);
      INVITATION_CONFIG.images.og = normalizeMediaSource(INVITATION_CONFIG.images.og, "");
      INVITATION_CONFIG.images.story = INVITATION_CONFIG.story?.showImage === false
        ? normalizeMediaSource(INVITATION_CONFIG.images.story, "")
        : normalizeMediaSource(INVITATION_CONFIG.images.story, DEFAULT_CONFIG.images.story);
      INVITATION_CONFIG.images.seal = normalizeMediaSource(INVITATION_CONFIG.images.seal, "media/sello_cera.png");
      INVITATION_CONFIG.images.dress = normalizeMediaSource(INVITATION_CONFIG.images.dress, DEFAULT_CONFIG.images.dress);
      INVITATION_CONFIG.images.envelope = normalizeMediaSource(INVITATION_CONFIG.images.envelope, "");
      INVITATION_CONFIG.images.surprise = normalizeMediaSource(INVITATION_CONFIG.images.surprise, "");
      INVITATION_CONFIG.images.gallery = (INVITATION_CONFIG.images.gallery || [])
        .map((item, index) => normalizeMediaSource(item, DEFAULT_CONFIG.images.gallery[index] || "foto.jpg"))
        .filter(Boolean);
      const galleryTypes = Array.isArray(INVITATION_CONFIG.images.galleryMediaTypes)
        ? INVITATION_CONFIG.images.galleryMediaTypes
        : [];
      INVITATION_CONFIG.images.galleryMediaTypes = INVITATION_CONFIG.images.gallery
        .map((item, index) => mediaTypeFromSource(item, galleryTypes[index]));
      const galleryLayouts = Array.isArray(INVITATION_CONFIG.images.galleryLayouts)
        ? INVITATION_CONFIG.images.galleryLayouts
        : [];
      INVITATION_CONFIG.images.galleryLayouts = INVITATION_CONFIG.images.gallery
        .map((_, index) => normalizeGalleryLayout(galleryLayouts[index]));
    }

    function normalizeGalleryLayout(value) {
      return ["portrait", "landscape", "panorama", "square"].includes(value) ? value : "auto";
    }

    function customSectionOrderKey(section) {
      return `custom:${section.id}`;
    }

    function normalizeSectionOrder(order, customSections = []) {
      const validKeys = [...BASE_SECTION_ORDER, ...customSections.map(customSectionOrderKey)];
      const validSet = new Set(validKeys);
      const normalized = [];
      (Array.isArray(order) ? order : []).forEach((key) => {
        if (!validSet.has(key) || normalized.includes(key)) return;
        normalized.push(key);
      });
      validKeys.forEach((key) => {
        if (!normalized.includes(key)) normalized.push(key);
      });
      return normalized;
    }

    function defaultSectionRevealEnabled(key) {
      return key !== "timeline";
    }

    function normalizeSectionRevealEffects(effects, customSections = []) {
      const validKeys = [...BASE_SECTION_ORDER, ...customSections.map(customSectionOrderKey)];
      const source = effects && typeof effects === "object" ? effects : {};
      return validKeys.reduce((normalized, key) => {
        normalized[key] = Object.prototype.hasOwnProperty.call(source, key)
          ? source[key] !== false
          : defaultSectionRevealEnabled(key);
        return normalized;
      }, {});
    }

    function sanitizeLocationConfig(locationConfig, fallbackMode = "icon") {
      if (!locationConfig) return;
      locationConfig.title = String(locationConfig.title || "").trim();
      locationConfig.time = String(locationConfig.time || "").trim();
      locationConfig.place = String(locationConfig.place || "").trim();
      locationConfig.placeDetail = String(locationConfig.placeDetail || "").trim();
      locationConfig.showPlaceDetail = locationConfig.showPlaceDetail === true;
      locationConfig.mediaMode = normalizeMediaMode(locationConfig.mediaMode, fallbackMode);
      locationConfig.iconSrc = normalizeMediaSource(locationConfig.iconSrc, "");
      locationConfig.photoSrc = normalizeMediaSource(locationConfig.photoSrc, "");
      locationConfig.videoSrc = normalizeMediaSource(locationConfig.videoSrc, "");
      locationConfig.mapEmbed = extractMapEmbedUrl(locationConfig.mapEmbed);
      locationConfig.mapLink = String(locationConfig.mapLink || "").trim();
    }

    function hasLodgingContent(option) {
      return [
        option?.title,
        option?.time,
        option?.checkIn,
        option?.checkOut,
        option?.place,
        option?.placeDetail,
        option?.iconSrc,
        option?.photoSrc,
        option?.videoSrc,
        option?.mapEmbed,
        option?.mapLink
      ].some((value) => String(value || "").trim());
    }

    function normalizeLodgingOptions(options) {
      return (Array.isArray(options) ? options : []).map((option) => {
        const normalized = {
          title: String(option?.title || "").trim(),
          time: String(option?.time || "").trim(),
          checkIn: String(option?.checkIn || "").trim(),
          checkOut: String(option?.checkOut || "").trim(),
          place: String(option?.place || "").trim(),
          showPlaceDetail: option?.showPlaceDetail === true,
          placeDetail: String(option?.placeDetail || "").trim(),
          mediaMode: normalizeMediaMode(option?.mediaMode, "photo"),
          iconSrc: normalizeMediaSource(option?.iconSrc, ""),
          mapEmbed: extractMapEmbedUrl(option?.mapEmbed || ""),
          photoSrc: normalizeMediaSource(option?.photoSrc, ""),
          videoSrc: normalizeMediaSource(option?.videoSrc, ""),
          mapLink: String(option?.mapLink || "").trim()
        };
        return normalized;
      }).filter(hasLodgingContent);
    }

    function sanitizeInvitationConfig() {
      INVITATION_CONFIG.language = INVITATION_CONFIG.language === "en" ? "en" : "es";
      sanitizeImageConfig();
      const eventAge = Number(INVITATION_CONFIG.event?.age);
      INVITATION_CONFIG.event.age = Number.isFinite(eventAge) && eventAge >= 1 && eventAge <= 99 ? Math.round(eventAge) : "";
      INVITATION_CONFIG.event.doubleCelebrantEnabled = INVITATION_CONFIG.event.doubleCelebrantEnabled === true;
      INVITATION_CONFIG.event.celebrantName1 = String(INVITATION_CONFIG.event.celebrantName1 || "").trim();
      INVITATION_CONFIG.event.celebrantName2 = String(INVITATION_CONFIG.event.celebrantName2 || "").trim();
      INVITATION_CONFIG.event.celebrantSeparator = ["&", "+", "y", "•"].includes(INVITATION_CONFIG.event.celebrantSeparator)
        ? INVITATION_CONFIG.event.celebrantSeparator
        : "&";
      INVITATION_CONFIG.event.doubleNameLayout = INVITATION_CONFIG.event.doubleNameLayout === "inline" ? "inline" : "stacked";
      INVITATION_CONFIG.event.celebrantName = dedupeCelebrantName(
        INVITATION_CONFIG.event.celebrantName || "",
        INVITATION_CONFIG.event.celebrantSeparator
      );
      INVITATION_CONFIG.audio = INVITATION_CONFIG.audio || {};
      INVITATION_CONFIG.audio.src = normalizeAudioSource(INVITATION_CONFIG.audio.src, DEFAULT_CONFIG.audio?.src || "cancio.mp3");
      INVITATION_CONFIG.audio.showControl = INVITATION_CONFIG.audio.showControl !== false;
      INVITATION_CONFIG.audio.muteVideos = INVITATION_CONFIG.audio.muteVideos !== false;
      INVITATION_CONFIG.audio.loopVideos = INVITATION_CONFIG.audio.loopVideos !== false;
      INVITATION_CONFIG.story.paragraph1Enabled = INVITATION_CONFIG.story?.paragraph1Enabled !== false;
      INVITATION_CONFIG.story.paragraph2Enabled = INVITATION_CONFIG.story?.paragraph2Enabled !== false;
      INVITATION_CONFIG.story.imageSize = clampNumber(INVITATION_CONFIG.story?.imageSize, 50, 110, 100);
      const usedCustomSectionIds = new Set();
      INVITATION_CONFIG.customSections = (Array.isArray(INVITATION_CONFIG.customSections) ? INVITATION_CONFIG.customSections : []).map((section, index) => {
        let id = String(section?.id || `section-${index + 1}`)
          .toLowerCase()
          .replace(/[^a-z0-9_-]+/g, "-")
          .replace(/^-+|-+$/g, "") || `section-${index + 1}`;
        const baseId = id;
        let suffix = 2;
        while (usedCustomSectionIds.has(id)) id = `${baseId}-${suffix++}`;
        usedCustomSectionIds.add(id);
        return {
          id,
          enabled: section?.enabled !== false,
          title: String(section?.title || ""),
          text: String(section?.text || ""),
          images: (Array.isArray(section?.images) ? section.images : [])
            .map((image) => normalizeMediaSource(image, ""))
            .filter(Boolean),
          imageLayout: ["stack", "grid", "featured"].includes(section?.imageLayout) ? section.imageLayout : "stack"
        };
      });
      INVITATION_CONFIG.layout = INVITATION_CONFIG.layout || {};
      INVITATION_CONFIG.layout.sectionOrder = normalizeSectionOrder(INVITATION_CONFIG.layout.sectionOrder, INVITATION_CONFIG.customSections);
      INVITATION_CONFIG.theme.sectionRevealEffects = normalizeSectionRevealEffects(
        INVITATION_CONFIG.theme.sectionRevealEffects,
        INVITATION_CONFIG.customSections
      );
      sanitizeLocationConfig(INVITATION_CONFIG.ceremony, "icon");
      sanitizeLocationConfig(INVITATION_CONFIG.reception, "icon");
      INVITATION_CONFIG.lodging = INVITATION_CONFIG.lodging || {};
      INVITATION_CONFIG.lodging.title = String(INVITATION_CONFIG.lodging.title || "Hospedaje").trim();
      INVITATION_CONFIG.lodging.options = normalizeLodgingOptions(INVITATION_CONFIG.lodging.options);
      INVITATION_CONFIG.dressCode = INVITATION_CONFIG.dressCode || {};
      INVITATION_CONFIG.dressCode.extraNoteEnabled = INVITATION_CONFIG.dressCode.extraNoteEnabled === true;
      INVITATION_CONFIG.dressCode.extraNote = String(INVITATION_CONFIG.dressCode.extraNote || "");
      INVITATION_CONFIG.dressCode.paletteEnabled = INVITATION_CONFIG.dressCode.paletteEnabled === true;
      INVITATION_CONFIG.dressCode.palettePosition = normalizeDressPalettePosition(INVITATION_CONFIG.dressCode.palettePosition);
      INVITATION_CONFIG.dressCode.palette = normalizeDressPalette(INVITATION_CONFIG.dressCode.palette);
      INVITATION_CONFIG.theme.particlesEnabled = INVITATION_CONFIG.theme.particlesEnabled !== false;
      INVITATION_CONFIG.theme.particlesOverSectionsEnabled = INVITATION_CONFIG.theme.particlesOverSectionsEnabled !== false;
      INVITATION_CONFIG.theme.openingEffectEnabled = INVITATION_CONFIG.theme.openingEffectEnabled !== false;
      INVITATION_CONFIG.theme.particleDensity = clampNumber(INVITATION_CONFIG.theme.particleDensity, 25, 180, 100);
      INVITATION_CONFIG.theme.particleSize = clampNumber(INVITATION_CONFIG.theme.particleSize, 50, 180, 100);
      INVITATION_CONFIG.theme.particleBrightness = clampNumber(INVITATION_CONFIG.theme.particleBrightness, 40, 180, 100);
      INVITATION_CONFIG.theme.particleSpeed = clampNumber(INVITATION_CONFIG.theme.particleSpeed, 35, 240, 100);
      INVITATION_CONFIG.theme.particleFastPercent = clampNumber(INVITATION_CONFIG.theme.particleFastPercent, 0, 50, 18);
      INVITATION_CONFIG.theme.appleHeroScrollEnabled = INVITATION_CONFIG.theme.appleHeroScrollEnabled !== false;
      INVITATION_CONFIG.theme.heroScrollHintEnabled = INVITATION_CONFIG.theme.heroScrollHintEnabled !== false;
      INVITATION_CONFIG.theme.heroScrollHintOffsetY = clampNumber(INVITATION_CONFIG.theme.heroScrollHintOffsetY, -220, 650, 0);
      INVITATION_CONFIG.theme.heroScrollCueEnabled = INVITATION_CONFIG.theme.heroScrollCueEnabled !== false;
      INVITATION_CONFIG.theme.heroScrollCueDelay = clampNumber(INVITATION_CONFIG.theme.heroScrollCueDelay, 1, 3, 2);
      INVITATION_CONFIG.theme.sectionScrollRevealEnabled = INVITATION_CONFIG.theme.sectionScrollRevealEnabled !== false;
      INVITATION_CONFIG.theme.backgroundImage = normalizeMediaSource(INVITATION_CONFIG.theme.backgroundImage, "");
      INVITATION_CONFIG.theme.backgroundImageOpacity = clampPercent(INVITATION_CONFIG.theme.backgroundImageOpacity, 55);
      INVITATION_CONFIG.theme.backgroundImagePositionX = clampPercent(INVITATION_CONFIG.theme.backgroundImagePositionX, 50);
      INVITATION_CONFIG.theme.heroGroupOffsetY = clampNumber(INVITATION_CONFIG.theme.heroGroupOffsetY, -700, 700, 0);
      INVITATION_CONFIG.theme.heroLabelOffsetY = clampNumber(INVITATION_CONFIG.theme.heroLabelOffsetY, -650, 650, 0);
      INVITATION_CONFIG.theme.heroNameOffsetY = clampNumber(INVITATION_CONFIG.theme.heroNameOffsetY, -650, 650, 0);
      INVITATION_CONFIG.theme.heroDateOffsetY = clampNumber(INVITATION_CONFIG.theme.heroDateOffsetY, -650, 650, 0);
      INVITATION_CONFIG.theme.heroLabelColor = normalizeHexColor(INVITATION_CONFIG.theme.heroLabelColor, "#fff8ec");
      INVITATION_CONFIG.theme.heroNameColor = normalizeHexColor(INVITATION_CONFIG.theme.heroNameColor, "#fffdf8");
      INVITATION_CONFIG.theme.heroDateColor = normalizeHexColor(INVITATION_CONFIG.theme.heroDateColor, "#fff4cf");
      INVITATION_CONFIG.theme.heroNameSeparatorColor = normalizeHexColor(INVITATION_CONFIG.theme.heroNameSeparatorColor, INVITATION_CONFIG.theme.heroDateColor);
      INVITATION_CONFIG.theme.heroLabelSize = clampNumber(INVITATION_CONFIG.theme.heroLabelSize, 70, 135, 100);
      INVITATION_CONFIG.theme.heroNameSize = clampNumber(INVITATION_CONFIG.theme.heroNameSize, 70, 190, 100);
      INVITATION_CONFIG.theme.heroDateSize = clampNumber(INVITATION_CONFIG.theme.heroDateSize, 70, 135, 100);
      INVITATION_CONFIG.theme.heroShadowStrength = clampNumber(INVITATION_CONFIG.theme.heroShadowStrength, 0, 160, 100);
      INVITATION_CONFIG.theme.heroShadowCoverage = clampNumber(INVITATION_CONFIG.theme.heroShadowCoverage, 18, 90, 60);
      INVITATION_CONFIG.theme.openingKickerSize = clampNumber(INVITATION_CONFIG.theme.openingKickerSize, 70, 145, 100);
      INVITATION_CONFIG.theme.openingTitleSize = clampNumber(INVITATION_CONFIG.theme.openingTitleSize, 60, 180, 100);
      INVITATION_CONFIG.theme.openingCaptionSize = clampNumber(INVITATION_CONFIG.theme.openingCaptionSize, 70, 145, 100);
      INVITATION_CONFIG.theme.openingEnvelopeBg = normalizeHexColor(INVITATION_CONFIG.theme.openingEnvelopeBg, "#201b1a");
      INVITATION_CONFIG.theme.openingEnvelopePaper = normalizeHexColor(INVITATION_CONFIG.theme.openingEnvelopePaper, "#f3dec0");
      INVITATION_CONFIG.theme.openingEnvelopeTexture = normalizeMediaSource(INVITATION_CONFIG.theme.openingEnvelopeTexture, "");
      INVITATION_CONFIG.theme.openingMode = INVITATION_CONFIG.theme.openingMode === "envelope" ? "envelope" : "classic";
      const legacyEnvelopeDetailsEnabled = INVITATION_CONFIG.theme.openingEnvelopeDetailsEnabled !== false;
      INVITATION_CONFIG.theme.openingEnvelopeDetailsEnabled = legacyEnvelopeDetailsEnabled;
      INVITATION_CONFIG.theme.openingEnvelopeEventEnabled = legacyEnvelopeDetailsEnabled && INVITATION_CONFIG.theme.openingEnvelopeEventEnabled === true;
      INVITATION_CONFIG.theme.openingEnvelopeNamesEnabled = legacyEnvelopeDetailsEnabled && INVITATION_CONFIG.theme.openingEnvelopeNamesEnabled === true;
      INVITATION_CONFIG.theme.openingEnvelopeDateEnabled = legacyEnvelopeDetailsEnabled && INVITATION_CONFIG.theme.openingEnvelopeDateEnabled === true;
      INVITATION_CONFIG.theme.styleMode = ["space-ranger", "military"].includes(INVITATION_CONFIG.theme.styleMode) ? INVITATION_CONFIG.theme.styleMode : "classic";
      INVITATION_CONFIG.theme.sectionBackgroundEnabled = INVITATION_CONFIG.theme.sectionBackgroundEnabled === true;
      INVITATION_CONFIG.theme.sectionBackgroundImage = normalizeMediaSource(INVITATION_CONFIG.theme.sectionBackgroundImage, "");
      INVITATION_CONFIG.theme.sectionBackgroundOpacity = clampPercent(INVITATION_CONFIG.theme.sectionBackgroundOpacity, 70);
      INVITATION_CONFIG.theme.sectionBackgroundPositionX = clampPercent(INVITATION_CONFIG.theme.sectionBackgroundPositionX, 50);
      INVITATION_CONFIG.theme.sectionBackgroundFit = INVITATION_CONFIG.theme.sectionBackgroundFit === "pattern" ? "pattern" : "cover";
      INVITATION_CONFIG.theme.sectionFrameEnabled = INVITATION_CONFIG.theme.sectionFrameEnabled !== false;
      INVITATION_CONFIG.theme.separatorMode = ["line", "image", "none"].includes(INVITATION_CONFIG.theme.separatorMode)
        ? INVITATION_CONFIG.theme.separatorMode
        : "line";
      INVITATION_CONFIG.theme.separatorImage = normalizeMediaSource(INVITATION_CONFIG.theme.separatorImage, "");
      INVITATION_CONFIG.theme.separatorImageWidth = clampNumber(INVITATION_CONFIG.theme.separatorImageWidth, 20, 100, 70);
      INVITATION_CONFIG.rsvp = {
        familyMode: INVITATION_CONFIG.rsvp?.familyMode === true,
        showGuestCount: INVITATION_CONFIG.rsvp?.showGuestCount !== false,
        maxGuests: Math.max(1, Number(INVITATION_CONFIG.rsvp?.maxGuests) || 1),
        adultChildCountEnabled: INVITATION_CONFIG.rsvp?.adultChildCountEnabled === true,
        dualContactEnabled: INVITATION_CONFIG.rsvp?.dualContactEnabled === true,
        contact1Label: String(INVITATION_CONFIG.rsvp?.contact1Label || (isEnglish() ? "Bride" : "Novia")).trim().slice(0, 32),
        contact1CountryCode: String(INVITATION_CONFIG.rsvp?.contact1CountryCode || INVITATION_CONFIG.event?.rsvpCountryCode || "52").replace(/\D/g, ""),
        contact1Phone: String(INVITATION_CONFIG.rsvp?.contact1Phone || "").replace(/\D/g, ""),
        contact2Label: String(INVITATION_CONFIG.rsvp?.contact2Label || (isEnglish() ? "Groom" : "Novio")).trim().slice(0, 32),
        contact2CountryCode: String(INVITATION_CONFIG.rsvp?.contact2CountryCode || INVITATION_CONFIG.event?.rsvpCountryCode || "52").replace(/\D/g, ""),
        contact2Phone: String(INVITATION_CONFIG.rsvp?.contact2Phone || "").replace(/\D/g, ""),
        advancedConfirmationEnabled: INVITATION_CONFIG.rsvp?.advancedConfirmationEnabled === true,
        personalizedPassesEnabled: INVITATION_CONFIG.rsvp?.personalizedPassesEnabled === true,
        dynamicPassesEnabled: INVITATION_CONFIG.rsvp?.dynamicPassesEnabled === true,
        dynamicPasses: normalizeDynamicPasses(INVITATION_CONFIG.rsvp?.dynamicPasses),
        previewDynamicAccess: String(INVITATION_CONFIG.rsvp?.previewDynamicAccess || "").toUpperCase().replace(/[^A-Z0-9_-]/g, "").slice(0, 24),
        deadlineNoteEnabled: INVITATION_CONFIG.rsvp?.deadlineNoteEnabled === true,
        deadlineNoteText: String(INVITATION_CONFIG.rsvp?.deadlineNoteText || "").trim().slice(0, 1200),
        deadlineNoteDate: String(INVITATION_CONFIG.rsvp?.deadlineNoteDate || "").trim().slice(0, 80),
        qrDotStyle: ["dots", "rounded", "classy-rounded", "square"].includes(INVITATION_CONFIG.rsvp?.qrDotStyle) ? INVITATION_CONFIG.rsvp.qrDotStyle : "dots",
        qrColor: normalizeHexColor(INVITATION_CONFIG.rsvp?.qrColor, "#393238"),
        qrAccentColor: normalizeHexColor(INVITATION_CONFIG.rsvp?.qrAccentColor, "#a4774d"),
        qrBackgroundColor: normalizeHexColor(INVITATION_CONFIG.rsvp?.qrBackgroundColor, "#ffffff"),
        receiptTitle: String(INVITATION_CONFIG.rsvp?.receiptTitle || "¡Gracias por confirmar!").trim().slice(0, 90),
        receiptText: String(INVITATION_CONFIG.rsvp?.receiptText || "Nos dará mucho gusto compartir este momento con ustedes. Nos vemos pronto.").trim().slice(0, 280),
        reservedPassesText: INVITATION_CONFIG.rsvp?.reservedPassesText === LEGACY_RESERVED_PASSES_TEXT
          ? DEFAULT_RESERVED_PASSES_TEXT
          : INVITATION_CONFIG.rsvp?.reservedPassesText || DEFAULT_RESERVED_PASSES_TEXT,
        previewRecipient: String(INVITATION_CONFIG.rsvp?.previewRecipient || "").trim().slice(0, 120),
        previewPasses: Math.max(0, Math.min(100, Number(INVITATION_CONFIG.rsvp?.previewPasses) || 0)),
        confirmMessage: INVITATION_CONFIG.rsvp?.confirmMessage || DEFAULT_CONFIRM_MESSAGE,
        declineMessage: INVITATION_CONFIG.rsvp?.declineMessage || DEFAULT_DECLINE_MESSAGE,
        familyConfirmMessage: INVITATION_CONFIG.rsvp?.familyConfirmMessage || DEFAULT_FAMILY_CONFIRM_MESSAGE,
        familyDeclineMessage: INVITATION_CONFIG.rsvp?.familyDeclineMessage || DEFAULT_FAMILY_DECLINE_MESSAGE,
        firebase: normalizeRsvpFirebaseConfig(INVITATION_CONFIG.rsvp?.firebase)
      };
      if (INVITATION_CONFIG.rsvp.dynamicPassesEnabled) {
        INVITATION_CONFIG.rsvp.personalizedPassesEnabled = false;
      }
      INVITATION_CONFIG.gifts.links = (INVITATION_CONFIG.gifts.links || []).map((link) => ({
        ...link,
        image: normalizeMediaSource(link.image, ""),
        showImage: Boolean(link.showImage && link.image)
      }));
      INVITATION_CONFIG.gifts.showOption1 = INVITATION_CONFIG.gifts.showOption1 !== false;
      INVITATION_CONFIG.gifts.showOption2 = INVITATION_CONFIG.gifts.showOption2 !== false;
      INVITATION_CONFIG.gifts.showLinks = INVITATION_CONFIG.gifts.showLinks !== false;
      INVITATION_CONFIG.gifts.splitTitleEnabled = INVITATION_CONFIG.gifts.splitTitleEnabled === true;
      INVITATION_CONFIG.gifts.titleLine1 = String(INVITATION_CONFIG.gifts.titleLine1 || "").trim().slice(0, 80);
      INVITATION_CONFIG.gifts.titleLine2 = String(INVITATION_CONFIG.gifts.titleLine2 || "").trim().slice(0, 80);
      INVITATION_CONFIG.gifts.titleLine1Color = normalizeHexColor(INVITATION_CONFIG.gifts.titleLine1Color, "");
      INVITATION_CONFIG.gifts.titleLine2Color = normalizeHexColor(INVITATION_CONFIG.gifts.titleLine2Color, "");
      INVITATION_CONFIG.gifts.titleLine1Size = clampNumber(INVITATION_CONFIG.gifts.titleLine1Size, 70, 150, 100);
      INVITATION_CONFIG.gifts.titleLine2Size = clampNumber(INVITATION_CONFIG.gifts.titleLine2Size, 70, 150, 100);
      INVITATION_CONFIG.gifts.layoutStyle = INVITATION_CONFIG.gifts.layoutStyle === "editorial" ? "editorial" : "classic";
      INVITATION_CONFIG.gifts.optionTitlePosition = INVITATION_CONFIG.gifts.optionTitlePosition === "above" ? "above" : "below";
      INVITATION_CONFIG.gifts.showLinksTitle = INVITATION_CONFIG.gifts.showLinksTitle !== false;
      INVITATION_CONFIG.gifts.linksTitle = String(INVITATION_CONFIG.gifts.linksTitle || "Mesa de regalos").trim().slice(0, 90);
      INVITATION_CONFIG.gifts.linksTitlePosition = INVITATION_CONFIG.gifts.linksTitlePosition === "below" ? "below" : "above";
      INVITATION_CONFIG.gifts.linkImageSize = clampNumber(INVITATION_CONFIG.gifts.linkImageSize, 70, 130, 100);
      INVITATION_CONFIG.gifts.bankTransfer = {
        enabled: INVITATION_CONFIG.gifts.bankTransfer?.enabled === true,
        eyebrow: String(INVITATION_CONFIG.gifts.bankTransfer?.eyebrow || "").trim(),
        title: String(INVITATION_CONFIG.gifts.bankTransfer?.title || "").trim(),
        intro: String(INVITATION_CONFIG.gifts.bankTransfer?.intro || "").trim(),
        image: normalizeMediaSource(INVITATION_CONFIG.gifts.bankTransfer?.image, ""),
        bank: String(INVITATION_CONFIG.gifts.bankTransfer?.bank || "").trim(),
        beneficiary: String(INVITATION_CONFIG.gifts.bankTransfer?.beneficiary || "").trim(),
        account: String(INVITATION_CONFIG.gifts.bankTransfer?.account || "").trim(),
        clabe: String(INVITATION_CONFIG.gifts.bankTransfer?.clabe || "").trim(),
        card: String(INVITATION_CONFIG.gifts.bankTransfer?.card || "").trim(),
        concept: String(INVITATION_CONFIG.gifts.bankTransfer?.concept || "").trim(),
        imageSize: clampNumber(INVITATION_CONFIG.gifts.bankTransfer?.imageSize, 70, 130, 100),
        placement: INVITATION_CONFIG.gifts.bankTransfer?.placement || {},
        note: String(INVITATION_CONFIG.gifts.bankTransfer?.note || "").trim()
      };
      INVITATION_CONFIG.album = INVITATION_CONFIG.album || {};
      INVITATION_CONFIG.album.showQr = INVITATION_CONFIG.album.showQr !== false;
      INVITATION_CONFIG.album.qrBackgroundOpacity = clampPercent(INVITATION_CONFIG.album.qrBackgroundOpacity, 100);
      INVITATION_CONFIG.brand = INVITATION_CONFIG.brand || {};
      INVITATION_CONFIG.brand.inheritTheme = INVITATION_CONFIG.brand.inheritTheme !== false;
      INVITATION_CONFIG.brand.footerBg = normalizeHexColor(INVITATION_CONFIG.brand.footerBg, INVITATION_CONFIG.theme.bgMid);
      if (["", "https://wa.me/525550591264", "https://wa.me/525550591264?text=Hola%21%20Quiero%20una%20invitaci%C3%B3n%20digital%20con%20estilo%20elegante%20y%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n."].includes(String(INVITATION_CONFIG.brand.ctaHref || "").trim())) {
        INVITATION_CONFIG.brand.ctaHref = DEFAULT_BRAND_CTA_HREF;
      }
      const countdownInheritTheme = INVITATION_CONFIG.countdown?.inheritTheme !== false;
      const countdownThemeColors = {
        captionColor: normalizeHexColor(INVITATION_CONFIG.theme?.muted, DEFAULT_CONFIG.countdown?.captionColor || "#fff4cf"),
        titleColor: normalizeHexColor(INVITATION_CONFIG.theme?.sectionTitle, "#ffffff"),
        dateColor: normalizeHexColor(INVITATION_CONFIG.theme?.sectionTitle, "#ffffff"),
        numberColor: normalizeHexColor(INVITATION_CONFIG.theme?.sectionTitle, "#ffffff"),
        labelColor: normalizeHexColor(INVITATION_CONFIG.theme?.text, "#ffffff")
      };
      INVITATION_CONFIG.countdown = {
        title: String(INVITATION_CONFIG.countdown?.title || "").trim(),
        intro: String(INVITATION_CONFIG.countdown?.intro || "").trim(),
        caption: String(INVITATION_CONFIG.countdown?.caption || "").trim(),
        inheritTheme: countdownInheritTheme,
        captionColor: normalizeHexColor(
          countdownInheritTheme ? countdownThemeColors.captionColor : INVITATION_CONFIG.countdown?.captionColor,
          countdownThemeColors.captionColor
        ),
        titleColor: normalizeHexColor(
          countdownInheritTheme ? countdownThemeColors.titleColor : INVITATION_CONFIG.countdown?.titleColor,
          countdownThemeColors.titleColor
        ),
        dateColor: normalizeHexColor(
          countdownInheritTheme ? countdownThemeColors.dateColor : INVITATION_CONFIG.countdown?.dateColor,
          countdownThemeColors.dateColor
        ),
        numberColor: normalizeHexColor(
          countdownInheritTheme ? countdownThemeColors.numberColor : INVITATION_CONFIG.countdown?.numberColor,
          countdownThemeColors.numberColor
        ),
        labelColor: normalizeHexColor(
          countdownInheritTheme ? countdownThemeColors.labelColor : INVITATION_CONFIG.countdown?.labelColor,
          countdownThemeColors.labelColor
        ),
        dateDisplayEnabled: INVITATION_CONFIG.countdown?.dateDisplayEnabled === true,
        dateDaySuffix: String(INVITATION_CONFIG.countdown?.dateDaySuffix || "").trim().slice(0, 6),
        showCalendarButton: INVITATION_CONFIG.countdown?.showCalendarButton === true,
        calendarButtonLabel: String(INVITATION_CONFIG.countdown?.calendarButtonLabel || "Agendar momento").trim().slice(0, 50) || "Agendar momento",
        style: normalizeCountdownStyle(INVITATION_CONFIG.countdown?.style)
      };
      INVITATION_CONFIG.family = INVITATION_CONFIG.family || {};
      INVITATION_CONFIG.family.showGrandparents = INVITATION_CONFIG.family.showGrandparents === true;
      INVITATION_CONFIG.family.grandparentsEyebrow = INVITATION_CONFIG.family.grandparentsEyebrow || "Y con la bendición de mis abuelos";
      INVITATION_CONFIG.family.grandparentsNamesHtml = INVITATION_CONFIG.family.grandparentsNamesHtml || "";
      INVITATION_CONFIG.family.parentsGroups = Array.isArray(INVITATION_CONFIG.family.parentsGroups)
        ? INVITATION_CONFIG.family.parentsGroups.map((group) => ({
          label: String(group?.label || ""),
          namesHtml: String(group?.namesHtml || ""),
          namesText: String(group?.namesText || ""),
          note1: String(group?.note1 || ""),
          note2: String(group?.note2 || "")
        })).filter((group) => group.label || group.namesHtml || group.note1 || group.note2)
        : [];
      INVITATION_CONFIG.family.godparentsItems = Array.isArray(INVITATION_CONFIG.family.godparentsItems)
        ? INVITATION_CONFIG.family.godparentsItems.filter((item) => item?.role || item?.namesHtml || item?.note)
        : [];
      INVITATION_CONFIG.family.showChildren = INVITATION_CONFIG.family.showChildren === true;
      INVITATION_CONFIG.family.childrenEyebrow = INVITATION_CONFIG.family.childrenEyebrow || "Con el amor de sus hijos";
      INVITATION_CONFIG.family.childrenNamesHtml = INVITATION_CONFIG.family.childrenNamesHtml || "";
      INVITATION_CONFIG.family.godparentNoteSize = clampNumber(INVITATION_CONFIG.family.godparentNoteSize, 70, 130, 100);
      INVITATION_CONFIG.family.godparentNoteAboveName = INVITATION_CONFIG.family.godparentNoteAboveName === true;
      INVITATION_CONFIG.family.godparentNoteColor = normalizeHexColor(INVITATION_CONFIG.family.godparentNoteColor, INVITATION_CONFIG.theme?.timelineColor || "#f2c06f");
    }

    function normalizeEventLabel(label) {
      return (label || "").trim().replace(/\s+/g, " ");
    }

    function normalizeNameKey(value) {
      return String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim();
    }

    function splitCelebrantNameParts(value) {
      return String(value || "")
        .split(/\s*(?:[&+•]|\by\b)\s*/i)
        .map((part) => part.trim())
        .filter(Boolean);
    }

    function dedupeCelebrantName(value, separator = "&") {
      const unique = [];
      const seen = new Set();
      splitCelebrantNameParts(value).forEach((part) => {
        const key = normalizeNameKey(part);
        if (!key || seen.has(key)) return;
        seen.add(key);
        unique.push(part);
      });
      return unique.join(` ${separator || "&"} `);
    }

    function getEventCopy() {
      const name = dedupeCelebrantName(
        INVITATION_CONFIG.event.celebrantName || "",
        INVITATION_CONFIG.event.celebrantSeparator || "&"
      ).trim();
      const label = normalizeEventLabel(INVITATION_CONFIG.event.label);
      const normalized = label.toLowerCase();
      const customCalendarTitle = String(INVITATION_CONFIG.event.calendarTitle || "").trim();
      const english = isEnglish();

      if (!label && !name) {
        return {
          pageTitle: english ? "Digital Invitation" : "Invitación digital",
          celebrationText: english ? "this special event" : "este evento tan especial",
          eventHeader: english ? "Digital Invitation" : "Invitación digital",
          calendarTitle: customCalendarTitle || (english ? "Digital Invitation" : "Invitación digital"),
          calendarDetails: english ? "Join me to celebrate this special moment." : "Acompáñame a celebrar este momento especial."
        };
      }

      if (/^mis\s*xv$/.test(normalized) || /^xv$/.test(normalized)) {
        return {
          pageTitle: name ? `${label} | ${name}` : label,
          celebrationText: name ? (english ? `${name}'s XV` : `los XV de ${name}`) : "XV",
          eventHeader: name ? `XV de ${name}` : "XV",
          calendarTitle: customCalendarTitle || (name ? `XV de ${name}` : "XV"),
          calendarDetails: name
            ? (english ? `Join me to celebrate ${name}'s XV.` : `Acompáñame a celebrar los XV de ${name}.`)
            : (english ? "Join me to celebrate an unforgettable XV." : "Acompáñame a celebrar unos XV inolvidables.")
        };
      }

      if (INVITATION_CONFIG.event.template === "wedding" || normalized.includes("boda") || normalized.includes("matrimonio")) {
        return {
          pageTitle: [label || (english ? "Our Wedding" : "Nuestra Boda"), name].filter(Boolean).join(" | "),
          celebrationText: name ? (english ? `${name}'s wedding` : `la boda de ${name}`) : (english ? "our wedding" : "nuestra boda"),
          eventHeader: name ? (english ? `${name}'s Wedding` : `Boda de ${name}`) : (label || (english ? "Our Wedding" : "Nuestra Boda")),
          calendarTitle: customCalendarTitle || (name ? (english ? `${name}'s Wedding` : `Boda de ${name}`) : (label || (english ? "Our Wedding" : "Nuestra Boda"))),
          calendarDetails: name
            ? (english ? `Join us to celebrate ${name}'s wedding.` : `Acompáñanos a celebrar la boda de ${name}.`)
            : (english ? "Join us to celebrate our wedding." : "Acompáñanos a celebrar nuestra boda.")
        };
      }

      if (INVITATION_CONFIG.event.template === "baptism" || normalized.includes("bautizo") || normalized.includes("bautismo")) {
        return {
          pageTitle: [label || (english ? "My Baptism" : "Mi Bautizo"), name].filter(Boolean).join(" | "),
          celebrationText: name ? (english ? `${name}'s baptism` : `el Bautizo de ${name}`) : (english ? "this baptism" : "este Bautizo"),
          eventHeader: name ? (english ? `${name}'s Baptism` : `Bautizo de ${name}`) : (label || (english ? "My Baptism" : "Mi Bautizo")),
          calendarTitle: customCalendarTitle || (name ? (english ? `${name}'s Baptism` : `Bautizo de ${name}`) : (label || (english ? "My Baptism" : "Mi Bautizo"))),
          calendarDetails: name
            ? (english ? `Join us to celebrate ${name}'s baptism.` : `Acompáñanos a celebrar el Bautizo de ${name}.`)
            : (english ? "Join us to celebrate this day of faith and love." : "Acompáñanos a celebrar este día de fe y amor.")
        };
      }

      if (INVITATION_CONFIG.event.template === "kids" || normalized.includes("misión") || normalized.includes("mision") || normalized.includes("cumple") || normalized.includes("añito")) {
        if (INVITATION_CONFIG.theme.styleMode === "military") {
          return {
            pageTitle: [label || (english ? "Birthday Operation" : "Operación cumpleaños"), name].filter(Boolean).join(" | "),
            celebrationText: name ? (english ? `${name}'s birthday` : `el cumpleaños de ${name}`) : (english ? "this birthday celebration" : "esta celebración de cumpleaños"),
            eventHeader: name ? (english ? `${name}'s Birthday Operation` : `Operación cumpleaños de ${name}`) : (label || (english ? "Birthday Operation" : "Operación cumpleaños")),
            calendarTitle: customCalendarTitle || (name ? (english ? `${name}'s Birthday` : `Cumpleaños de ${name}`) : (label || (english ? "Birthday Operation" : "Operación cumpleaños"))),
            calendarDetails: name
              ? (english ? `You have been invited to celebrate ${name}'s birthday.` : `Has sido convocado para celebrar el cumpleaños de ${name}.`)
              : (english ? "You have been invited to celebrate this birthday." : "Has sido convocado para celebrar este cumpleaños.")
          };
        }
        return {
          pageTitle: [label || (english ? "Birthday Mission" : "Misión de cumpleaños"), name].filter(Boolean).join(" | "),
          celebrationText: name ? (english ? `${name}'s birthday mission` : `la misión de cumpleaños de ${name}`) : (english ? "this birthday mission" : "esta misión de cumpleaños"),
          eventHeader: name ? (english ? `${name}'s Mission` : `Misión de ${name}`) : (label || (english ? "Birthday Mission" : "Misión de cumpleaños")),
          calendarTitle: customCalendarTitle || (name ? (english ? `${name}'s Birthday` : `Cumpleaños de ${name}`) : (label || (english ? "Birthday Mission" : "Misión de cumpleaños"))),
          calendarDetails: name
            ? (english ? `Join us to celebrate ${name}'s birthday mission.` : `Acompáñanos a celebrar la misión de cumpleaños de ${name}.`)
            : (english ? "Join us to celebrate this birthday mission." : "Acompáñanos a celebrar esta misión de cumpleaños.")
        };
      }

      const joinedTitle = [label, name].filter(Boolean).join(" de ");
      return {
        pageTitle: joinedTitle || label || name,
        celebrationText: joinedTitle || label || name,
        eventHeader: joinedTitle || label || name,
        calendarTitle: customCalendarTitle || joinedTitle || label || name,
        calendarDetails: joinedTitle
          ? (english ? `Join me to celebrate ${joinedTitle}.` : `Acompáñame a celebrar ${joinedTitle}.`)
          : (english ? "Join me to celebrate this special moment." : "Acompáñame a celebrar este momento especial.")
      };
    }

    function getVisibleEventLabel() {
      const isMilitaryKids = INVITATION_CONFIG.event?.template === "kids"
        && INVITATION_CONFIG.theme?.styleMode === "military";
      if (!isMilitaryKids) return INVITATION_CONFIG.event.label;

      const age = Number(INVITATION_CONFIG.event.age);
      if (!Number.isFinite(age) || age < 1) return isEnglish() ? "Birthday Mission" : "Misión de cumpleaños";
      if (isEnglish()) return `Mission: ${age} ${age === 1 ? "year" : "years"}`;
      return `Misión: ${age} ${age === 1 ? "año" : "años"}`;
    }

    function cssFontValue(label, fallback) {
      label = String(label || "").split(" - ")[0].trim();
      const knownFonts = new Set([
        "Alex Brush",
        "Allura",
        "Bodoni Moda",
        "Cinzel",
        "Cormorant Garamond",
        "Cormorant Infant",
        "Cormorant Upright",
        "Dancing Script",
        "EB Garamond",
        "Alegreya",
        "Belleza",
        "Birthstone",
        "Forum",
        "Fredoka",
        "GFS Didot",
        "Great Vibes",
        "Imperial Script",
        "Italianno",
        "Libre Baskerville",
        "Lora",
        "Marcellus",
        "Montserrat",
        "Mrs Saint Delafield",
        "Nanum Myeongjo",
        "Orbitron",
        "Parisienne",
        "Petit Formal Script",
        "Pinyon Script",
        "Playfair Display",
        "Poppins",
        "Prata",
        "Quicksand",
        "Sacramento",
        "Spectral",
        "Mea Culpa",
        "Tangerine"
      ]);
      if (label === "Georgia") return "Georgia, serif";
      if (label === "Times New Roman") return "\"Times New Roman\", serif";
      if (knownFonts.has(label)) {
        const fallbackFamily = ["Montserrat", "Poppins", "Fredoka", "Orbitron", "Quicksand"].includes(label) ? "sans-serif" : "serif";
        return `"${label}", ${fallbackFamily}`;
      }
      return fallback;
    }

    function slugifyText(value) {
      return (value || "invitacion-digital")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        || "invitacion-digital";
    }

    function clampColorChannel(value) {
      return Math.max(0, Math.min(255, Math.round(value)));
    }

    function normalizeHexColor(value, fallback = "#ffffff") {
      const source = String(value || "").trim();
      const shortMatch = source.match(/^#([0-9a-f]{3})$/i);
      if (shortMatch) {
        return `#${shortMatch[1].split("").map((char) => char + char).join("")}`.toLowerCase();
      }
      if (/^#[0-9a-f]{6}$/i.test(source)) return source.toLowerCase();
      return fallback;
    }

    function hexToRgb(value, fallback = "#ffffff") {
      const hex = normalizeHexColor(value, fallback).slice(1);
      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16)
      };
    }

    function rgbToHex({ r, g, b }) {
      return `#${[r, g, b].map((channel) => clampColorChannel(channel).toString(16).padStart(2, "0")).join("")}`;
    }

    function mixColors(color, target, amount) {
      const base = hexToRgb(color);
      const mix = hexToRgb(target);
      return rgbToHex({
        r: base.r + (mix.r - base.r) * amount,
        g: base.g + (mix.g - base.g) * amount,
        b: base.b + (mix.b - base.b) * amount
      });
    }

    function rgbList(value, fallback = "#ffffff") {
      const { r, g, b } = hexToRgb(value, fallback);
      return `${r}, ${g}, ${b}`;
    }

    function rgbaColor(value, alpha) {
      return `rgba(${rgbList(value)}, ${alpha})`;
    }

    function clampPercent(value, fallback = 100) {
      const number = Number(value);
      if (!Number.isFinite(number)) return fallback;
      return Math.max(0, Math.min(100, Math.round(number)));
    }

    function clampNumber(value, min, max, fallback) {
      const number = Number(value);
      if (!Number.isFinite(number)) return fallback;
      return Math.max(min, Math.min(max, Math.round(number)));
    }

    function applyThemeColors() {
      const bgTop = normalizeHexColor(INVITATION_CONFIG.theme.bgTop, DEFAULT_CONFIG.theme.bgTop);
      const bgMid = normalizeHexColor(INVITATION_CONFIG.theme.bgMid, DEFAULT_CONFIG.theme.bgMid);
      const bgBottom = normalizeHexColor(INVITATION_CONFIG.theme.bgBottom, DEFAULT_CONFIG.theme.bgBottom);
      const gold = normalizeHexColor(INVITATION_CONFIG.theme.gold500, DEFAULT_CONFIG.theme.gold500);
      const gold100 = mixColors(gold, "#ffffff", 0.72);
      const gold300 = mixColors(gold, "#ffffff", 0.34);
      const gold700 = mixColors(gold, "#000000", 0.36);
      const sectionTitle = normalizeHexColor(INVITATION_CONFIG.theme.sectionTitle || gold100, gold100);
      const scriptColor = normalizeHexColor(INVITATION_CONFIG.theme.scriptColor || sectionTitle, sectionTitle);
      const timelineColor = normalizeHexColor(INVITATION_CONFIG.theme.timelineColor || gold, gold);
      const text = normalizeHexColor(INVITATION_CONFIG.theme.text, DEFAULT_CONFIG.theme.text);
      const muted = normalizeHexColor(INVITATION_CONFIG.theme.muted, DEFAULT_CONFIG.theme.muted || text);
      const timelineTimeColor = normalizeHexColor(INVITATION_CONFIG.theme.timelineTimeColor || sectionTitle, sectionTitle);
      const timelineTitleColor = normalizeHexColor(INVITATION_CONFIG.theme.timelineTitleColor || text, text);
      const timelineDescColor = normalizeHexColor(INVITATION_CONFIG.theme.timelineDescColor || muted, muted);
      const godparentNoteColor = normalizeHexColor(INVITATION_CONFIG.family?.godparentNoteColor || timelineColor, timelineColor);
      const timelineFont = INVITATION_CONFIG.theme.timelineFont || INVITATION_CONFIG.theme.bodyFont || DEFAULT_CONFIG.theme.bodyFont;
      const timelineImageSize = clampNumber(INVITATION_CONFIG.theme.timelineImageSize, 70, 115, 100);
      const locationTitleColor = normalizeHexColor(INVITATION_CONFIG.theme.locationTitleColor || sectionTitle, sectionTitle);
      const locationTimeColor = normalizeHexColor(INVITATION_CONFIG.theme.locationTimeColor || sectionTitle, sectionTitle);
      const locationPlaceColor = normalizeHexColor(INVITATION_CONFIG.theme.locationPlaceColor || text, text);
      const galleryTextColor = normalizeHexColor(INVITATION_CONFIG.theme.galleryTextColor || text, text);
      const galleryArrowColor = normalizeHexColor(INVITATION_CONFIG.theme.galleryArrowColor || sectionTitle, sectionTitle);
      const particleColor = normalizeHexColor(INVITATION_CONFIG.theme.particleColor || gold100, gold100);
      const buttonBg = normalizeHexColor(INVITATION_CONFIG.theme.buttonBg || gold, gold);
      const buttonText = normalizeHexColor(INVITATION_CONFIG.theme.buttonText || "#ffffff", "#ffffff");
      const fieldLabel = normalizeHexColor(INVITATION_CONFIG.theme.fieldLabel || sectionTitle, sectionTitle);
      const fieldText = normalizeHexColor(INVITATION_CONFIG.theme.fieldText || text, text);
      const closingColor = normalizeHexColor(INVITATION_CONFIG.theme.closingColor || sectionTitle, sectionTitle);
      const heroLabelColor = normalizeHexColor(INVITATION_CONFIG.theme.heroLabelColor || "#fff8ec", "#fff8ec");
      const heroNameColor = normalizeHexColor(INVITATION_CONFIG.theme.heroNameColor || "#fffdf8", "#fffdf8");
      const heroDateColor = normalizeHexColor(INVITATION_CONFIG.theme.heroDateColor || gold100, gold100);
      const heroNameSeparatorColor = normalizeHexColor(INVITATION_CONFIG.theme.heroNameSeparatorColor || heroDateColor, heroDateColor);
      const heroLabelSize = clampNumber(INVITATION_CONFIG.theme.heroLabelSize, 70, 135, 100);
      const heroNameSize = clampNumber(INVITATION_CONFIG.theme.heroNameSize, 70, 190, 100);
      const heroDateSize = clampNumber(INVITATION_CONFIG.theme.heroDateSize, 70, 135, 100);
      const heroShadowStrength = clampNumber(INVITATION_CONFIG.theme.heroShadowStrength, 0, 160, 100);
      const heroShadowCoverage = clampNumber(INVITATION_CONFIG.theme.heroShadowCoverage, 18, 90, 60);
      const openingKickerSize = clampNumber(INVITATION_CONFIG.theme.openingKickerSize, 70, 145, 100);
      const openingTitleSize = clampNumber(INVITATION_CONFIG.theme.openingTitleSize, 60, 180, 100);
      const openingCaptionSize = clampNumber(INVITATION_CONFIG.theme.openingCaptionSize, 70, 145, 100);
      const openingKicker = normalizeHexColor(INVITATION_CONFIG.theme.openingKicker || sectionTitle, sectionTitle);
      const openingTitle = normalizeHexColor(INVITATION_CONFIG.theme.openingTitle || scriptColor, scriptColor);
      const openingAccent = normalizeHexColor(INVITATION_CONFIG.theme.openingAccent || gold, gold);
      const openingNameSeparatorColor = normalizeHexColor(INVITATION_CONFIG.theme.openingNameSeparatorColor || openingAccent, openingAccent);
      const openingEnvelopeBg = normalizeHexColor(INVITATION_CONFIG.theme.openingEnvelopeBg, "#201b1a");
      const openingEnvelopePaper = normalizeHexColor(INVITATION_CONFIG.theme.openingEnvelopePaper, "#f3dec0");
      const openingEnvelopeTexture = normalizeMediaSource(INVITATION_CONFIG.theme.openingEnvelopeTexture, "");
      const openingEnvelopePaperSoft = mixColors(openingEnvelopePaper, "#ffffff", 0.34);
      const openingEnvelopePaperDeep = mixColors(openingEnvelopePaper, "#8a6744", 0.28);
      const openingTitleSoft = mixColors(openingTitle, "#ffffff", 0.34);
      const sectionOpacity = clampPercent(INVITATION_CONFIG.theme.sectionOpacity, 100);
      const sectionSurface = normalizeHexColor(INVITATION_CONFIG.theme.sectionSurface, "#ffffff");
      const sectionFillTopOpacity = clampPercent(INVITATION_CONFIG.theme.sectionFillTopOpacity, 9);
      const sectionFillBottomOpacity = clampPercent(INVITATION_CONFIG.theme.sectionFillBottomOpacity, 5);
      const sectionFrameEnabled = INVITATION_CONFIG.theme.sectionFrameEnabled !== false;
      const separatorMode = ["line", "image", "none"].includes(INVITATION_CONFIG.theme.separatorMode)
        ? INVITATION_CONFIG.theme.separatorMode
        : "line";
      const separatorImage = normalizeMediaSource(INVITATION_CONFIG.theme.separatorImage, "");
      const separatorImageWidth = clampNumber(INVITATION_CONFIG.theme.separatorImageWidth, 20, 100, 70);
      const openingMode = INVITATION_CONFIG.theme.openingMode === "envelope" ? "envelope" : "classic";
      const openingOpacity = clampPercent(INVITATION_CONFIG.theme.openingOpacity, 100);
      const legacyEnvelopeDetailsEnabled = INVITATION_CONFIG.theme.openingEnvelopeDetailsEnabled !== false;
      const openingEnvelopeDetailsEnabled = legacyEnvelopeDetailsEnabled;
      const openingEnvelopeEventEnabled = legacyEnvelopeDetailsEnabled && INVITATION_CONFIG.theme.openingEnvelopeEventEnabled !== false;
      const openingEnvelopeNamesEnabled = legacyEnvelopeDetailsEnabled && INVITATION_CONFIG.theme.openingEnvelopeNamesEnabled !== false;
      const openingEnvelopeDateEnabled = legacyEnvelopeDetailsEnabled && INVITATION_CONFIG.theme.openingEnvelopeDateEnabled !== false;
      const openingEffectEnabled = INVITATION_CONFIG.theme.openingEffectEnabled !== false;
      const particlesEnabled = INVITATION_CONFIG.theme.particlesEnabled !== false;
      const particlesOverSectionsEnabled = INVITATION_CONFIG.theme.particlesOverSectionsEnabled !== false;
      const particleSpeed = clampNumber(INVITATION_CONFIG.theme.particleSpeed, 35, 240, 100);
      const particleFastPercent = clampNumber(INVITATION_CONFIG.theme.particleFastPercent, 0, 50, 18);
      const appleHeroScrollEnabled = INVITATION_CONFIG.theme.appleHeroScrollEnabled !== false;
      const heroScrollHintEnabled = INVITATION_CONFIG.theme.heroScrollHintEnabled !== false;
      const heroScrollHintOffsetY = clampNumber(INVITATION_CONFIG.theme.heroScrollHintOffsetY, -220, 650, 0);
      const heroScrollCueEnabled = INVITATION_CONFIG.theme.heroScrollCueEnabled !== false;
      const heroScrollCueDelay = clampNumber(INVITATION_CONFIG.theme.heroScrollCueDelay, 1, 3, 2);
      const sectionScrollRevealEnabled = INVITATION_CONFIG.theme.sectionScrollRevealEnabled !== false;
      const backgroundImage = normalizeMediaSource(INVITATION_CONFIG.theme.backgroundImage, "");
      const backgroundImageOpacity = clampPercent(INVITATION_CONFIG.theme.backgroundImageOpacity, 55);
      const backgroundImagePositionX = clampPercent(INVITATION_CONFIG.theme.backgroundImagePositionX, 50);
      const ambientTintEnabled = INVITATION_CONFIG.theme.ambientTintEnabled !== false;
      const heroGroupOffsetY = clampNumber(INVITATION_CONFIG.theme.heroGroupOffsetY, -700, 700, 0);
      const heroLabelOffsetY = clampNumber(INVITATION_CONFIG.theme.heroLabelOffsetY, -650, 650, 0);
      const heroNameOffsetY = clampNumber(INVITATION_CONFIG.theme.heroNameOffsetY, -650, 650, 0);
      const heroDateOffsetY = clampNumber(INVITATION_CONFIG.theme.heroDateOffsetY, -650, 650, 0);
      const sectionBackgroundEnabled = INVITATION_CONFIG.theme.sectionBackgroundEnabled === true;
      const sectionBackgroundImage = normalizeMediaSource(INVITATION_CONFIG.theme.sectionBackgroundImage, "");
      const sectionBackgroundOpacity = clampPercent(INVITATION_CONFIG.theme.sectionBackgroundOpacity, 70);
      const sectionBackgroundPositionX = clampPercent(INVITATION_CONFIG.theme.sectionBackgroundPositionX, 50);
      const sectionBackgroundFit = INVITATION_CONFIG.theme.sectionBackgroundFit === "pattern" ? "pattern" : "cover";
      const styleMode = ["space-ranger", "military"].includes(INVITATION_CONFIG.theme.styleMode) ? INVITATION_CONFIG.theme.styleMode : "classic";
      const footerBg = INVITATION_CONFIG.brand?.inheritTheme !== false
        ? bgMid
        : normalizeHexColor(INVITATION_CONFIG.brand?.footerBg, bgMid);
      const footerRgb = hexToRgb(footerBg);
      const footerBrightness = (footerRgb.r * 299 + footerRgb.g * 587 + footerRgb.b * 114) / 1000;
      const footerText = footerBrightness > 168 ? "#172033" : "#fff8ec";
      const sectionRatio = sectionOpacity / 100;
      const openingRatio = openingOpacity / 100;

      Object.assign(INVITATION_CONFIG.theme, {
        bgTop,
        bgMid,
        bgBottom,
        gold500: gold,
        sectionTitle,
        scriptColor,
        timelineColor,
        timelineTimeColor,
        timelineTitleColor,
        timelineDescColor,
        timelineFont,
        timelineImageSize,
        locationTitleColor,
        locationTimeColor,
        locationPlaceColor,
        particleColor,
        buttonBg,
        buttonText,
        fieldLabel,
        fieldText,
        closingColor,
        heroLabelColor,
        heroNameColor,
        heroDateColor,
        heroNameSeparatorColor,
        heroLabelSize,
        heroNameSize,
        heroDateSize,
        heroShadowStrength,
        heroShadowCoverage,
        openingKickerSize,
        openingTitleSize,
        openingCaptionSize,
        openingKicker,
        openingTitle,
        openingNameSeparatorColor,
        openingAccent,
        openingEnvelopeBg,
        openingEnvelopePaper,
        openingEnvelopeTexture,
        openingTitleSoft,
        text,
        muted,
        sectionOpacity,
        sectionSurface,
        sectionFillTopOpacity,
        sectionFillBottomOpacity,
        sectionFrameEnabled,
        separatorMode,
        separatorImage,
        separatorImageWidth,
        openingMode,
        openingOpacity,
        openingEnvelopeDetailsEnabled,
        openingEnvelopeEventEnabled,
        openingEnvelopeNamesEnabled,
        openingEnvelopeDateEnabled,
        openingEffectEnabled,
        particlesEnabled,
        particlesOverSectionsEnabled,
        particleSpeed,
        particleFastPercent,
        appleHeroScrollEnabled,
        heroScrollHintEnabled,
        heroScrollHintOffsetY,
        heroScrollCueEnabled,
        heroScrollCueDelay,
        sectionScrollRevealEnabled,
        backgroundImage,
        backgroundImageOpacity,
        backgroundImagePositionX,
        ambientTintEnabled,
        heroGroupOffsetY,
        heroLabelOffsetY,
        heroNameOffsetY,
        heroDateOffsetY,
        sectionBackgroundEnabled,
        sectionBackgroundImage,
        sectionBackgroundOpacity,
        sectionBackgroundPositionX,
        sectionBackgroundFit,
        styleMode
      });

      setRootVar("--bg-top", bgTop);
      setRootVar("--bg-mid", bgMid);
      setRootVar("--bg-bottom", bgBottom);
      body.classList.toggle("ambient-tint-off", !ambientTintEnabled);
      setRootVar("--bg-glow-top", ambientTintEnabled ? rgbaColor(bgTop, 0.18) : "transparent");
      setRootVar("--bg-glow-mid", ambientTintEnabled ? rgbaColor(bgMid, 0.18) : "transparent");
      setRootVar("--bg-glow-bottom", ambientTintEnabled ? rgbaColor(bgBottom, 0.14) : "transparent");
      setRootVar("--gold-100", gold100);
      setRootVar("--gold-300", gold300);
      setRootVar("--gold-500", gold);
      setRootVar("--gold-700", gold700);
      setRootVar("--gold-rgb", rgbList(gold));
      setRootVar("--gold-soft-rgb", rgbList(gold100));
      setRootVar("--section-title", sectionTitle);
      setRootVar("--section-title-rgb", rgbList(sectionTitle));
      setRootVar("--script-color", scriptColor);
      setRootVar("--script-rgb", rgbList(scriptColor));
      setRootVar("--timeline-color", timelineColor);
      setRootVar("--timeline-rgb", rgbList(timelineColor));
      setRootVar("--timeline-time-color", timelineTimeColor);
      setRootVar("--timeline-title-color", timelineTitleColor);
      setRootVar("--timeline-desc-color", timelineDescColor);
      setRootVar("--godparent-note-color", godparentNoteColor);
      setRootVar("--timeline-font", cssFontValue(timelineFont, "\"Cormorant Garamond\", serif"));
      setRootVar("--timeline-image-scale", (timelineImageSize / 100).toFixed(2));
      setRootVar("--location-title-color", locationTitleColor);
      setRootVar("--location-time-color", locationTimeColor);
      setRootVar("--location-place-color", locationPlaceColor);
      setRootVar("--gallery-text-color", galleryTextColor);
      setRootVar("--gallery-arrow-color", galleryArrowColor);
      setRootVar("--particle-color", particleColor);
      setRootVar("--particle-rgb", rgbList(particleColor));
      setRootVar("--button-bg", buttonBg);
      setRootVar("--button-bg-rgb", rgbList(buttonBg));
      setRootVar("--button-text", buttonText);
      setRootVar("--field-label", fieldLabel);
      setRootVar("--field-text", fieldText);
      setRootVar("--closing-color", closingColor);
      setRootVar("--hero-label-color", heroLabelColor);
      setRootVar("--hero-name-color", heroNameColor);
      setRootVar("--hero-date-color", heroDateColor);
      setRootVar("--hero-name-separator-color", heroNameSeparatorColor);
      setRootVar("--hero-label-size-scale", (heroLabelSize / 100).toFixed(2));
      setRootVar("--hero-name-size-scale", (heroNameSize / 100).toFixed(2));
      setRootVar("--hero-date-size-scale", (heroDateSize / 100).toFixed(2));
      const heroShadowRatio = heroShadowStrength / 100;
      const heroShadowAlpha = (base) => Math.min(0.98, Math.max(0, base * heroShadowRatio)).toFixed(3);
      const heroShadowStop = (ratio) => `${(heroShadowCoverage * ratio).toFixed(2)}%`;
      const heroShadowVars = {
        "--hero-readable-gradient-opacity": heroShadowStrength > 0 ? "1" : "0",
        "--hero-readable-gradient-s2": heroShadowStop(0.17),
        "--hero-readable-gradient-s3": heroShadowStop(0.37),
        "--hero-readable-gradient-s4": heroShadowStop(0.60),
        "--hero-readable-gradient-s5": heroShadowStop(0.80),
        "--hero-readable-gradient-a1": heroShadowAlpha(0.92),
        "--hero-readable-gradient-a2": heroShadowAlpha(0.68),
        "--hero-readable-gradient-a3": heroShadowAlpha(0.42),
        "--hero-readable-gradient-a4": heroShadowAlpha(0.18),
        "--hero-readable-gradient-a5": heroShadowAlpha(0.055),
        "--hero-readable-gradient-end": `${heroShadowCoverage}%`
      };
      Object.entries(heroShadowVars).forEach(([property, value]) => {
        setRootVar(property, value);
        heroSection?.style.setProperty(property, value);
      });
      setRootVar("--opening-kicker-size-scale", (openingKickerSize / 100).toFixed(2));
      setRootVar("--opening-title-size-scale", (openingTitleSize / 100).toFixed(2));
      setRootVar("--opening-caption-size-scale", (openingCaptionSize / 100).toFixed(2));
      setRootVar("--footer-bg-rgb", rgbList(footerBg));
      setRootVar("--footer-text", footerText);
      setRootVar("--footer-text-rgb", rgbList(footerText));
      setRootVar("--gift-link-image-scale", (clampNumber(INVITATION_CONFIG.gifts?.linkImageSize, 70, 130, 100) / 100).toFixed(2));
      setRootVar("--bank-transfer-image-scale", (clampNumber(INVITATION_CONFIG.gifts?.bankTransfer?.imageSize, 70, 130, 100) / 100).toFixed(2));
      setRootVar("--opening-kicker", openingKicker);
      setRootVar("--opening-title", openingTitle);
      setRootVar("--opening-title-soft", openingTitleSoft);
      setRootVar("--opening-title-rgb", rgbList(openingTitle));
      setRootVar("--opening-name-separator-color", openingNameSeparatorColor);
      setRootVar("--opening-accent", openingAccent);
      setRootVar("--opening-accent-rgb", rgbList(openingAccent));
      setRootVar("--opening-envelope-bg", openingEnvelopeBg);
      setRootVar("--opening-envelope-bg-rgb", rgbList(openingEnvelopeBg));
      setRootVar("--opening-envelope-paper", openingEnvelopePaper);
      setRootVar("--opening-envelope-paper-soft", openingEnvelopePaperSoft);
      setRootVar("--opening-envelope-paper-deep", openingEnvelopePaperDeep);
      setRootVar("--opening-envelope-paper-rgb", rgbList(openingEnvelopePaper));
      setRootVar("--opening-envelope-texture", openingEnvelopeTexture ? cssMediaUrl(openingEnvelopeTexture) : "none");
      setRootVar("--line", rgbaColor(gold, 0.28));
      setRootVar("--text", text);
      setRootVar("--muted", muted);
      setRootVar("--section-fill-top", rgbaColor(sectionSurface, ((sectionFillTopOpacity / 100) * sectionRatio).toFixed(3)));
      setRootVar("--section-fill-bottom", rgbaColor(sectionSurface, ((sectionFillBottomOpacity / 100) * sectionRatio).toFixed(3)));
      setRootVar("--space-section-fill-bottom", `rgba(8, 20, 47, ${(0.42 * sectionRatio).toFixed(3)})`);
      setRootVar("--space-section-accent-a", (0.08 * sectionRatio).toFixed(3));
      setRootVar("--space-section-particle-a", (0.06 * sectionRatio).toFixed(3));
      setRootVar("--section-blur", `${(18 * sectionRatio).toFixed(1)}px`);
      setRootVar("--separator-image", separatorImage ? cssMediaUrl(separatorImage) : "none");
      setRootVar("--separator-image-width", `${separatorImageWidth}%`);
      setRootVar("--separator-line-width", `${Math.round(72 + ((separatorImageWidth - 20) / 80) * 228)}px`);
      setRootVar("--smart-bg-opacity", (backgroundImageOpacity / 100).toFixed(3));
      setRootVar("--hero-group-offset-y", `${heroGroupOffsetY}px`);
      setRootVar("--hero-label-offset-y", `${heroLabelOffsetY}px`);
      setRootVar("--hero-name-offset-y", `${heroNameOffsetY}px`);
      setRootVar("--hero-date-offset-y", `${heroDateOffsetY}px`);
      setRootVar("--hero-scroll-hint-offset-y", `${heroScrollHintOffsetY}px`);
      setRootVar("--hero-scroll-cue-delay", `${heroScrollCueDelay}s`);
      setRootVar("--godparent-note-scale", (clampNumber(INVITATION_CONFIG.family?.godparentNoteSize, 70, 130, 100) / 100).toFixed(2));
      const sectionTextureRatio = sectionBackgroundEnabled && sectionBackgroundImage ? sectionBackgroundOpacity / 100 : 0;
      setRootVar("--military-section-texture", sectionBackgroundEnabled && sectionBackgroundImage ? `url(${JSON.stringify(sectionBackgroundImage)})` : "none");
      setRootVar("--military-section-texture-position", `${sectionBackgroundPositionX}% center`);
      setRootVar("--military-section-texture-size", sectionBackgroundFit === "pattern" ? "480px auto" : "cover");
      setRootVar("--military-section-texture-repeat", sectionBackgroundFit === "pattern" ? "repeat" : "no-repeat");
      setRootVar("--military-section-shade-top", (0.98 - (0.38 * sectionTextureRatio)).toFixed(3));
      setRootVar("--military-section-shade-bottom", (0.98 - (0.34 * sectionTextureRatio)).toFixed(3));
      setRootVar("--opening-bg-a", (0.82 * openingRatio).toFixed(3));
      setRootVar("--opening-bg-strong-a", (0.9 * openingRatio).toFixed(3));
      setRootVar("--opening-photo-a", (0.2 * openingRatio).toFixed(3));
      setRootVar("--opening-glass-top-a", (0.065 * openingRatio).toFixed(3));
      setRootVar("--opening-glass-mid-a", (0.018 * openingRatio).toFixed(3));
      setRootVar("--opening-glass-bottom-a", (0.04 * openingRatio).toFixed(3));
      setRootVar("--overlay-glass-blur", `${(14 * openingRatio).toFixed(1)}px`);
      document.documentElement.classList.toggle("particles-disabled", !particlesEnabled);
      document.documentElement.classList.toggle("particles-over-sections-disabled", !particlesOverSectionsEnabled);
      document.documentElement.classList.toggle("hero-scroll-hint-off", !heroScrollHintEnabled);
      document.documentElement.classList.toggle("hero-scroll-cue-off", !heroScrollCueEnabled);
      document.documentElement.classList.toggle("section-scroll-reveal", sectionScrollRevealEnabled);
      document.documentElement.classList.toggle("sections-frameless", !sectionFrameEnabled);
      document.documentElement.classList.toggle("separator-image", separatorMode === "image" && Boolean(separatorImage));
      document.documentElement.classList.toggle("separator-none", separatorMode === "none");
      document.documentElement.classList.toggle("opening-mode-envelope", openingMode === "envelope");
      document.documentElement.classList.toggle("opening-envelope-details-off", !openingEnvelopeDetailsEnabled);
      document.documentElement.classList.toggle("opening-envelope-event-off", !openingEnvelopeEventEnabled);
      document.documentElement.classList.toggle("opening-envelope-names-off", !openingEnvelopeNamesEnabled);
      document.documentElement.classList.toggle("opening-envelope-date-off", !openingEnvelopeDateEnabled);
      document.documentElement.classList.toggle("theme-space-ranger", styleMode === "space-ranger");
      document.documentElement.classList.toggle("theme-military", styleMode === "military");
      document.documentElement.classList.remove("opening-mode-pending");
    }

    function getDocumentHeight() {
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        window.innerHeight
      );
    }

    function updateSmartBackgroundLayout() {
      if (!smartBackground || !smartBackgroundImage || !smartBackground.classList.contains("is-active")) return;
      const naturalWidth = smartBackgroundNatural.width || smartBackgroundImage.naturalWidth;
      const naturalHeight = smartBackgroundNatural.height || smartBackgroundImage.naturalHeight;
      if (!naturalWidth || !naturalHeight) return;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const documentHeight = getDocumentHeight();
      const scale = Math.max(viewportWidth / naturalWidth, viewportHeight / naturalHeight);
      const renderedWidth = Math.ceil(naturalWidth * scale);
      const renderedHeight = Math.ceil(naturalHeight * scale);
      const extraX = Math.max(0, renderedWidth - viewportWidth);
      const extraY = Math.max(0, renderedHeight - viewportHeight);
      const scrollablePage = Math.max(1, documentHeight - viewportHeight);
      const scrollProgress = Math.max(0, Math.min(1, window.scrollY / scrollablePage));
      const positionX = clampPercent(INVITATION_CONFIG.theme.backgroundImagePositionX, 50) / 100;
      const x = -extraX * positionX;
      const y = extraY > 1 ? -extraY * scrollProgress : 0;

      smartBackgroundImage.style.width = `${renderedWidth}px`;
      smartBackgroundImage.style.height = `${renderedHeight}px`;
      smartBackgroundImage.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      setRootVar("--smart-bg-y", `${y}px`);
    }

    function applySmartBackground() {
      if (!smartBackground || !smartBackgroundImage) return;
      const source = INVITATION_CONFIG.theme.backgroundImage;
      const active = Boolean(source);
      smartBackground.classList.toggle("is-active", active);
      if (!active) {
        smartBackgroundImage.removeAttribute("src");
        smartBackgroundNatural = { width: 0, height: 0 };
        return;
      }

      if (smartBackgroundImage.getAttribute("src") !== source) {
        smartBackgroundNatural = { width: 0, height: 0 };
        smartBackgroundImage.onload = () => {
          smartBackgroundNatural = {
            width: smartBackgroundImage.naturalWidth,
            height: smartBackgroundImage.naturalHeight
          };
          updateSmartBackgroundLayout();
        };
        smartBackgroundImage.src = source;
      } else {
        updateSmartBackgroundLayout();
      }
    }

    function renderGiftButtons() {
      if (!giftLinks) return;
      giftLinks.innerHTML = "";

      const links = INVITATION_CONFIG.gifts.links || [];
      const showLinks = INVITATION_CONFIG.gifts.showLinks !== false;
      const intro = document.getElementById("giftLinksIntro");
      const linksTitle = document.getElementById("giftLinksTitle");
      const linksPanel = document.getElementById("giftLinksPanel");
      const editorialLayout = INVITATION_CONFIG.gifts.layoutStyle === "editorial";
      const titlePosition = editorialLayout ? "below" : (INVITATION_CONFIG.gifts.optionTitlePosition === "above" ? "above" : "below");
      const linksTitlePosition = INVITATION_CONFIG.gifts.linksTitlePosition === "below" ? "below" : "above";
      const hasLinks = showLinks && links.length > 0;

      [
        ["giftOption1Card", "giftOption1Title"],
        ["giftOption2Card", "giftOption2Title"]
      ].forEach(([cardId, titleId]) => {
        const card = document.getElementById(cardId);
        const title = document.getElementById(titleId);
        const media = card?.querySelector(".gift-option-media");
        if (!card || !title || !media) return;
        card.classList.toggle("gift-option-card--title-above", titlePosition === "above");
        if (titlePosition === "above") card.insertBefore(title, media);
        else card.insertBefore(media, title);
      });

      document.getElementById("giftSection")?.classList.toggle("gift-section--editorial", editorialLayout);
      linksPanel?.classList.toggle("gift-links-panel--title-below", linksTitlePosition === "below");
      if (linksTitle) {
        linksTitle.textContent = localizedText(INVITATION_CONFIG.gifts.linksTitle || "Mesa de regalos", "Mesa de regalos", "Gift Registry");
        linksTitle.hidden = !(hasLinks && INVITATION_CONFIG.gifts.showLinksTitle !== false && linksTitle.textContent.trim());
      }

      if (intro) intro.style.display = hasLinks ? "" : "none";
      if (!hasLinks) {
        giftLinks.style.display = "none";
        if (linksPanel) linksPanel.hidden = true;
        return;
      }

      if (linksPanel) linksPanel.hidden = false;
      giftLinks.style.display = "grid";
      links.forEach((link) => {
        const anchor = document.createElement("a");
        const hasImage = Boolean(link.showImage && link.image);
        const label = localizedDefaultText(link.label || (hasImage ? "Abrir mesa" : "Botón"));
        anchor.className = hasImage
          ? `gift-link-card gift-link-card--${link.style === "secondary" ? "secondary" : "primary"}`
          : (link.style === "secondary" ? "btn btn-secondary" : "btn");
        anchor.href = link.href || "#";
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        if (hasImage) {
          const media = document.createElement("span");
          media.className = "gift-link-card__media";
          const image = document.createElement("img");
          image.src = link.image;
          image.alt = label || t("Mesa de regalos");
          image.loading = "lazy";
          image.decoding = "async";
          media.appendChild(image);
          const text = document.createElement("span");
          text.className = "gift-link-card__button";
          text.textContent = label;
          anchor.append(media, text);
        } else {
          anchor.textContent = label;
        }
        giftLinks.appendChild(anchor);
      });
    }

    function renderGiftTitle() {
      const title = document.getElementById("giftTitle");
      if (!title) return;
      const splitEnabled = INVITATION_CONFIG.gifts.splitTitleEnabled === true;
      title.classList.toggle("gift-title--split", splitEnabled);
      if (!splitEnabled) {
        title.removeAttribute("style");
        title.textContent = localizedText(INVITATION_CONFIG.gifts.title, "Opciones de regalo", "Gift Options");
        return;
      }
      const line1 = localizedText(INVITATION_CONFIG.gifts.titleLine1 || "Sugerencia", "Sugerencia", "Gift");
      const line2 = localizedText(INVITATION_CONFIG.gifts.titleLine2 || "de regalos", "de regalos", "Suggestions");
      const color1 = INVITATION_CONFIG.gifts.titleLine1Color || "var(--section-title)";
      const color2 = INVITATION_CONFIG.gifts.titleLine2Color || color1;
      const size1 = clampNumber(INVITATION_CONFIG.gifts.titleLine1Size, 70, 150, 100) / 100;
      const size2 = clampNumber(INVITATION_CONFIG.gifts.titleLine2Size, 70, 150, 100) / 100;
      title.innerHTML = `
        <span class="gift-title-line gift-title-line--one" style="--gift-title-line-color:${escapeAttribute(color1)};--gift-title-line-scale:${size1.toFixed(2)}">${escapeHtml(line1)}</span>
        <span class="gift-title-line gift-title-line--two" style="--gift-title-line-color:${escapeAttribute(color2)};--gift-title-line-scale:${size2.toFixed(2)}">${escapeHtml(line2)}</span>
      `;
    }

    function renderBankTransferCard() {
      const card = document.getElementById("bankTransferCard");
      const details = document.getElementById("bankTransferDetails");
      const visual = document.getElementById("bankTransferVisual");
      const image = document.getElementById("bankTransferImage");
      const overlay = document.getElementById("bankTransferOverlay");
      if (!card || !details) return;
      const bank = INVITATION_CONFIG.gifts.bankTransfer || {};
      const fields = [
        { key: "bank", label: "Banco", value: bank.bank, copy: false },
        { key: "beneficiary", label: "Beneficiario", value: bank.beneficiary, copy: false },
        { key: "account", label: "Cuenta", value: bank.account, copy: true },
        { key: "clabe", label: "CLABE", value: bank.clabe, copy: true },
        { key: "card", label: "Tarjeta", value: bank.card, copy: true },
        { key: "concept", label: "Concepto", value: bank.concept, copy: false }
      ].filter((field) => String(field.value || "").trim());
      const copyButton = (field) => field.copy
        ? `<button type="button" class="bank-copy-btn" data-copy-bank="${escapeHtml(field.value)}">${escapeHtml(t("Copiar"))}</button>`
        : "";
      const rowMarkup = (field) => `
        <div class="bank-transfer-row${field.copy ? " bank-transfer-row--copyable" : ""}">
          <div class="bank-transfer-row__content">
            <dt>${escapeHtml(localizedDefaultText(field.label))}</dt>
            <dd>${escapeHtml(field.value)}</dd>
          </div>
            ${copyButton(field)}
        </div>
      `;
      const visible = bank.enabled === true && (fields.length > 0 || Boolean(bank.image));
      card.hidden = !visible;
      if (!visible) {
        details.innerHTML = "";
        if (visual) visual.hidden = true;
        if (overlay) overlay.innerHTML = "";
        return;
      }
      setText("bankTransferEyebrow", bank.eyebrow || "");
      setText("bankTransferTitle", bank.title || "");
      setText("bankTransferIntro", bank.intro || "");
      setText("bankTransferNote", bank.note || "");
      if (visual && image && overlay) {
        visual.hidden = !bank.image;
        image.src = bank.image || "";
        image.alt = bank.title || t("Tarjeta para transferencia");
        overlay.innerHTML = "";
      }
      details.innerHTML = fields.map(rowMarkup).join("");
    }

    function configureInlineVideo(video, src, options = {}) {
      if (!video) return;
      if (src) video.src = src;
      else video.removeAttribute("src");
      video.muted = shouldMuteVideos() || options.muted !== false;
      video.loop = options.loop === false ? false : shouldLoopVideos();
      video.playsInline = true;
      video.preload = options.preload || "metadata";
      video.controls = Boolean(options.controls);
      if (options.autoplay !== false) {
        if (video.dataset.musicCoordinator === "true") {
          playCoordinatedGalleryVideo(video);
        } else {
          video.play().catch(() => {});
        }
      }
    }

    function shouldMuteVideos() {
      return INVITATION_CONFIG.audio?.muteVideos === true;
    }

    function shouldLoopVideos() {
      return INVITATION_CONFIG.audio?.loopVideos !== false;
    }

    function loadProgressiveGalleryMedia(media) {
      const source = media?.dataset?.src;
      if (!media || !source) return;
      media.src = source;
      delete media.dataset.src;
      if (media.tagName === "VIDEO") {
        media.addEventListener("canplay", () => tryAutoplayGalleryVideo(media), { once: true });
        media.load();
        if (media.readyState >= 2) requestAnimationFrame(() => tryAutoplayGalleryVideo(media));
      }
    }

    function prepareProgressiveGalleryMedia(media, src) {
      if (!media || !src) return;
      media.dataset.src = src;
      if (typeof IntersectionObserver !== "function") {
        loadProgressiveGalleryMedia(media);
        return;
      }
      galleryMediaLoadObserver ||= new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          galleryMediaLoadObserver.unobserve(entry.target);
          loadProgressiveGalleryMedia(entry.target);
        });
      }, { rootMargin: "650px 0px", threshold: 0.01 });
      galleryMediaLoadObserver.observe(media);
    }

    function updateMusicButtonForPlayback() {
      if (!musicBtn || INVITATION_CONFIG.audio?.showControl === false) return;
      musicBtn.classList.toggle("is-paused", audio.paused);
      musicBtn.setAttribute("aria-label", t(audio.paused ? "Reproducir música" : "Pausar música"));
    }

    function resumeMusicAfterVideoIfNeeded() {
      clearTimeout(musicResumeTimer);
      musicResumeTimer = window.setTimeout(() => {
        const anotherVideoIsPlaying = Array.from(coordinatedGalleryVideos)
          .some((video) => !video.paused && !video.ended);
        if (anotherVideoIsPlaying || !resumeMusicAfterGalleryVideo) return;

        resumeMusicAfterGalleryVideo = false;
        if (INVITATION_CONFIG.audio?.showControl === false || !overlay.classList.contains("hidden")) return;
        if (!audio.paused) {
          updateMusicButtonForPlayback();
          return;
        }
        audio.play().then(updateMusicButtonForPlayback).catch(() => {});
      }, 90);
    }

    function tryAutoplayGalleryVideo(video) {
      if (!video || video.dataset.autoplayWhenVisible !== "true") return;
      const canAutoplay = video.dataset.galleryVisible === "true"
        && !video.hidden
        && !video.ended
        && Boolean(video.currentSrc || video.src)
        && overlay.classList.contains("hidden")
        && !lightbox.classList.contains("show");
      if (canAutoplay && video.paused) playCoordinatedGalleryVideo(video);
    }

    function playCoordinatedGalleryVideo(video) {
      if (!video || !video.paused) return;
      clearTimeout(musicResumeTimer);
      if (!shouldMuteVideos()) {
        if (!audio.paused) resumeMusicAfterGalleryVideo = true;
        audio.pause();
        updateMusicButtonForPlayback();
      }
      video.play().catch(() => {
        resumeMusicAfterVideoIfNeeded();
      });
    }

    function registerGalleryVideoPlayback(video, options = {}) {
      if (!video || video.dataset.musicCoordinator === "true") return;
      video.dataset.musicCoordinator = "true";
      video.dataset.autoplayWhenVisible = options.autoplayWhenVisible === true ? "true" : "false";
      coordinatedGalleryVideos.add(video);

      video.addEventListener("play", () => {
        clearTimeout(musicResumeTimer);
        coordinatedGalleryVideos.forEach((otherVideo) => {
          if (otherVideo !== video && !otherVideo.paused) otherVideo.pause();
        });
        if (!shouldMuteVideos()) {
          if (!audio.paused) resumeMusicAfterGalleryVideo = true;
          audio.pause();
          updateMusicButtonForPlayback();
        }
      });
      video.addEventListener("pause", resumeMusicAfterVideoIfNeeded);
      video.addEventListener("ended", resumeMusicAfterVideoIfNeeded);

      if (options.observeVisibility === true && typeof IntersectionObserver === "function") {
        galleryVideoObserver ||= new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const video = entry.target;
            video.dataset.galleryVisible = entry.intersectionRatio >= 0.65 ? "true" : "false";
            if (entry.intersectionRatio < 0.2) {
              if (!video.paused) video.pause();
              return;
            }
            tryAutoplayGalleryVideo(video);
          });
        }, { threshold: [0, 0.2, 0.55, 0.65] });
        galleryVideoObserver.observe(video);
      }
    }

    function releaseGalleryVideoPlayback(video) {
      if (!video) return;
      galleryVideoObserver?.unobserve(video);
      galleryMediaLoadObserver?.unobserve(video);
      video.dataset.galleryVisible = "false";
      coordinatedGalleryVideos.delete(video);
      if (!video.paused) video.pause();
    }

    registerGalleryVideoPlayback(galleryPreviewVideo, { observeVisibility: true });
    registerGalleryVideoPlayback(lightboxVideo);
    registerGalleryVideoPlayback(ceremonyVideo, { observeVisibility: true, autoplayWhenVisible: true });
    registerGalleryVideoPlayback(receptionVideo, { observeVisibility: true, autoplayWhenVisible: true });

    function createGalleryMedia(item, options = {}) {
      const node = document.createElement(item.type === "video" ? "video" : "img");
      node.className = "gallery-media";
      node.dataset.mediaType = item.type;
      const progressive = options.progressive === true;
      if (item.type === "video") {
        const autoplayWhenVisible = options.autoplayWhenVisible === true;
        configureInlineVideo(node, progressive ? "" : item.src, {
          controls: false,
          muted: !autoplayWhenVisible,
          loop: !autoplayWhenVisible,
          preload: progressive ? "none" : "metadata",
          autoplay: false
        });
        if (progressive) prepareProgressiveGalleryMedia(node, item.src);
        if (autoplayWhenVisible) {
          registerGalleryVideoPlayback(node, { observeVisibility: true, autoplayWhenVisible: true });
        }
        node.setAttribute("aria-label", item.alt);
      } else {
        node.alt = item.alt;
        node.loading = "lazy";
        node.decoding = "async";
        node.fetchPriority = "low";
        node.src = item.src;
      }
      return node;
    }

    function applyHeroMedia() {
      const src = INVITATION_CONFIG.images.hero;
      const type = mediaTypeFromSource(src, INVITATION_CONFIG.images.heroType);
      if (type === "video" && heroVideo) {
        if (heroImage) heroImage.hidden = true;
        heroVideo.hidden = false;
        configureInlineVideo(heroVideo, src, { controls: false, muted: true, loop: true, preload: "metadata" });
      } else if (heroImage) {
        if (heroVideo) {
          heroVideo.pause();
          heroVideo.removeAttribute("src");
          heroVideo.load();
          heroVideo.hidden = true;
        }
        heroImage.hidden = false;
        if (heroImage.getAttribute("src") !== src) heroImage.src = src;
        heroImage.alt = `Portada de ${INVITATION_CONFIG.event.celebrantName}`;
      }
    }

    function renderGalleryGrid() {
      if (!galleryGrid) return;
      galleryGrid.querySelectorAll("video").forEach(releaseGalleryVideoPlayback);
      galleryGrid.querySelectorAll("[data-src]").forEach((media) => galleryMediaLoadObserver?.unobserve(media));
      galleryGrid.innerHTML = "";
      const items = INVITATION_CONFIG.images.gallery || [];
      const types = INVITATION_CONFIG.images.galleryMediaTypes || [];
      const layouts = INVITATION_CONFIG.images.galleryLayouts || [];
      galleryItems = items.map((src, index) => {
        const type = mediaTypeFromSource(src, types[index]);
        const layout = normalizeGalleryLayout(layouts[index]);
        const item = {
          src,
          type,
          alt: `${mediaLabel(type)} ${index + 1}`,
          element: null
        };
        const button = document.createElement("button");
        button.type = "button";
        button.className = "gallery-item";
        button.classList.toggle("gallery-item--video", item.type === "video");
        button.dataset.galleryIndex = String(index);
        button.dataset.galleryLayout = layout;
        button.setAttribute("aria-label", `${t("Abrir")} ${item.alt}`);
        button.addEventListener("click", () => {
          updateGalleryPreview(index);
          openLightbox(index);
        });
        const completesThreePhotoLayout = items.length === 3 && index === 2;
        const usesExpandedGalleryPattern = items.length > 3 && (index % 6 === 2 || index % 6 === 3);
        if (layout === "auto") {
          if (completesThreePhotoLayout || usesExpandedGalleryPattern) button.classList.add("big");
        } else {
          button.classList.add(`gallery-item--${layout}`);
        }
        const mediaNode = createGalleryMedia(item, {
          autoplayWhenVisible: item.type === "video",
          progressive: item.type === "video"
        });
        button.appendChild(mediaNode);
        if (type === "video") {
          const badge = document.createElement("span");
          badge.className = "gallery-video-badge";
          badge.setAttribute("aria-hidden", "true");
          mediaNode.addEventListener("play", () => badge.classList.add("is-playing"));
          mediaNode.addEventListener("pause", () => badge.classList.remove("is-playing"));
          mediaNode.addEventListener("ended", () => badge.classList.remove("is-playing"));
          button.appendChild(badge);
        }
        item.element = button;
        galleryGrid.appendChild(button);
        return item;
      });
      if (galleryItems.length) {
        if (galleryShowcase) galleryShowcase.style.display = "";
        previewIndex = Math.min(previewIndex, galleryItems.length - 1);
        currentIndex = Math.min(currentIndex, galleryItems.length - 1);
        scheduleGalleryPreviewHydration();
      } else {
        if (galleryShowcase) galleryShowcase.style.display = "none";
        previewIndex = 0;
        currentIndex = 0;
        galleryPreviewHydrated = false;
      }
    }

    function scheduleGalleryPreviewHydration() {
      if (!galleryItems.length || !galleryShowcase) return;
      galleryPreviewLoadObserver?.disconnect();
      galleryPreviewLoadObserver = null;
      galleryPreviewHydrated = false;
      if (galleryMetaIndex) galleryMetaIndex.textContent = `${mediaLabel(galleryItems[previewIndex]?.type || "image")} ${previewIndex + 1} ${isEnglish() ? "of" : "de"} ${galleryItems.length}`;
      if (galleryMetaHint) galleryMetaHint.textContent = isEnglish() ? "Use the arrows or tap a thumbnail to explore." : "Usa las flechas o toca una miniatura para explorar.";

      if (document.documentElement.classList.contains("preview-embed") || typeof IntersectionObserver !== "function") {
        hydrateGalleryPreview(previewIndex);
        return;
      }

      galleryPreviewLoadObserver = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        hydrateGalleryPreview(previewIndex);
      }, { rootMargin: "650px 0px", threshold: 0.01 });
      galleryPreviewLoadObserver.observe(galleryShowcase);
    }

    function hydrateGalleryPreview(index = previewIndex) {
      if (!galleryItems.length) return;
      galleryPreviewHydrated = true;
      galleryPreviewLoadObserver?.disconnect();
      galleryPreviewLoadObserver = null;
      updateGalleryPreview(index);
    }

    function renderTimeline() {
      if (!timelineList) return;
      timelineList.innerHTML = "";
      const items = INVITATION_CONFIG.timeline.items || [];
      timelineList.classList.toggle("timeline--with-images", items.some((item) => item?.type !== "day-separator" && item?.image));

      items.forEach((item) => {
        const node = document.createElement("div");
        if (item.type === "day-separator") {
          node.className = "timeline-item timeline-day-separator";
          const label = document.createElement("div");
          label.className = "timeline-day-label";
          label.textContent = localizedDefaultText(item.title || "Día siguiente");
          node.appendChild(label);
          timelineList.appendChild(node);
          return;
        }
        const image = normalizeMediaSource(item.image, "");
        node.className = `timeline-item${image ? " timeline-item--image" : ""}`;
        node.innerHTML = `
          ${image ? `<div class="timeline-image"><img src="${escapeAttribute(image)}" alt="" loading="lazy" decoding="async"></div>` : ""}
          <div class="timeline-time">${escapeHtml(item.time || "")}</div>
          <div class="timeline-title">${escapeHtml(localizedDefaultText(item.title || ""))}</div>
          <div class="timeline-desc">${escapeHtml(localizedDefaultText(item.desc || ""))}</div>
          ${item.note ? `<strong class="timeline-note">${escapeHtml(item.note)}</strong>` : ""}
        `;
        timelineList.appendChild(node);
      });
    }

    function renderDressCodeList(value) {
      const dressValue = document.getElementById("dressValue");
      if (!dressValue) return;
      const items = String(value || "")
        .split(/\r?\n/)
        .map((item) => item.replace(/^[\s\-–—•]+/, "").trim())
        .filter(Boolean);

      dressValue.innerHTML = "";
      items.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        dressValue.appendChild(listItem);
      });
      dressValue.hidden = items.length === 0;
    }

    function normalizeDressPalette(items) {
      const source = Array.isArray(items)
        ? items
        : items && typeof items === "object"
          ? Object.keys(items).sort((a, b) => Number(a) - Number(b)).map((key) => items[key])
          : [];
      return source
        .map((item) => {
          if (typeof item === "string") {
            return { color: normalizeHexColor(item, ""), label: "" };
          }
          return {
            color: normalizeHexColor(item?.color, ""),
            label: String(item?.label || "").trim().slice(0, 28)
          };
        })
        .filter((item) => item.color);
    }

    function normalizeDressPalettePosition(value) {
      return ["before-title", "after-title", "before-icon", "after-note"].includes(value) ? value : "before-icon";
    }

    function placeDressColorPalette() {
      if (!dressColorPalette) return;
      const position = normalizeDressPalettePosition(INVITATION_CONFIG.dressCode?.palettePosition);
      const dressSection = document.getElementById("dressSection");
      const dressTitle = document.getElementById("dressTitle");
      const dressValue = document.getElementById("dressValue");
      const dressFigure = dressImage?.closest(".dresscode-figure");
      const dressNote = document.getElementById("dressNote");
      if (!dressSection) return;
      if (position === "before-title" && dressTitle) {
        dressSection.insertBefore(dressColorPalette, dressTitle);
        return;
      }
      if (position === "after-title" && dressTitle) {
        dressTitle.insertAdjacentElement("afterend", dressColorPalette);
        return;
      }
      if (position === "after-note" && dressNote) {
        dressNote.insertAdjacentElement("afterend", dressColorPalette);
        return;
      }
      if (dressFigure) {
        dressSection.insertBefore(dressColorPalette, dressFigure);
      } else if (dressValue) {
        dressValue.insertAdjacentElement("afterend", dressColorPalette);
      }
    }

    function renderDressColorPalette() {
      if (!dressColorPalette) return;
      const items = normalizeDressPalette(INVITATION_CONFIG.dressCode?.palette);
      const visible = INVITATION_CONFIG.dressCode?.paletteEnabled === true && items.length > 0;
      placeDressColorPalette();
      dressColorPalette.hidden = !visible;
      dressColorPalette.innerHTML = "";
      if (!visible) return;
      items.forEach((item) => {
        const swatch = document.createElement("div");
        swatch.className = "dress-color-swatch";
        swatch.style.setProperty("--swatch-color", item.color);
        dressColorPalette.appendChild(swatch);
      });
    }

    function renderAnnotatedFamilyNames(group) {
      const notes = [group.note1, group.note2].map((note) => String(note || "").trim());
      if (!notes.some(Boolean)) return group.namesHtml ? `<div class="family-names">${group.namesHtml}</div>` : "";
      const lines = String(group.namesText || "")
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);
      let personIndex = 0;
      const content = lines.map((line) => {
        if (/^(&|\+|•|y)$/i.test(line)) {
          return `<span class="family-name-separator">${escapeHtml(line)}</span>`;
        }
        const note = notes[personIndex] || "";
        personIndex += 1;
        return `
          <span class="family-name-entry">
            <span>${escapeHtml(line)}</span>
            ${note ? `<small class="family-name-note">${escapeHtml(note)}</small>` : ""}
          </span>
        `;
      }).join("");
      return content ? `<div class="family-names family-names--annotated">${content}</div>` : "";
    }

    function renderFamilyGroups() {
      const simpleParents = document.getElementById("parentsNames");
      const groupsWrap = document.getElementById("parentsGroups");
      const groups = INVITATION_CONFIG.family.parentsGroups || [];
      if (!groupsWrap || !simpleParents) return;
      groupsWrap.innerHTML = "";
      groupsWrap.hidden = !groups.length;
      simpleParents.hidden = Boolean(groups.length);
      groups.forEach((group) => {
        const node = document.createElement("article");
        node.className = "family-group";
        node.innerHTML = `
          ${group.label ? `<strong class="family-label">${group.label}</strong>` : ""}
          ${renderAnnotatedFamilyNames(group)}
        `;
        groupsWrap.appendChild(node);
      });
    }

    function renderChildrenBlock() {
      const block = document.getElementById("childrenBlock");
      const title = document.getElementById("childrenEyebrow");
      const names = document.getElementById("childrenNames");
      if (!block || !title || !names) return;
      const enabled = INVITATION_CONFIG.family?.showChildren === true;
      const titleText = INVITATION_CONFIG.family?.childrenEyebrow || "";
      const namesHtml = INVITATION_CONFIG.family?.childrenNamesHtml || "";
      block.hidden = !(enabled && (titleText || namesHtml));
      title.textContent = localizedText(titleText, "Con el amor de sus hijos", "With the love of their children");
      names.innerHTML = namesHtml;
      title.hidden = !titleText;
      names.hidden = !namesHtml;
    }

    function renderGrandparentsBlock() {
      const block = document.getElementById("grandparentsBlock");
      const title = document.getElementById("grandparentsEyebrow");
      const names = document.getElementById("grandparentsNames");
      if (!block || !title || !names) return;
      const enabled = INVITATION_CONFIG.family?.showGrandparents === true;
      const titleText = INVITATION_CONFIG.family?.grandparentsEyebrow || "";
      const namesHtml = INVITATION_CONFIG.family?.grandparentsNamesHtml || "";
      block.hidden = !(enabled && (titleText || namesHtml));
      title.textContent = titleText;
      names.innerHTML = namesHtml;
      title.hidden = !titleText;
      names.hidden = !namesHtml;
    }

    function renderGodparentsItems() {
      const simpleGodparents = document.getElementById("godparentsNames");
      const itemsWrap = document.getElementById("godparentsItems");
      const items = INVITATION_CONFIG.family.godparentsItems || [];
      if (!itemsWrap || !simpleGodparents) return;
      itemsWrap.innerHTML = "";
      itemsWrap.hidden = !items.length;
      simpleGodparents.hidden = Boolean(items.length);
      items.forEach((item) => {
        const node = document.createElement("article");
        node.className = `godparent-item${item.noteAboveName === true ? " godparent-item--note-above" : ""}`;
        node.innerHTML = `
          ${item.role ? `<strong class="godparent-role">${item.role}</strong>` : ""}
          ${item.noteAboveName === true && item.note ? `<span class="godparent-note">${escapeHtml(item.note)}</span>` : ""}
          ${item.namesHtml ? `<div class="godparent-names">${item.namesHtml}</div>` : ""}
          ${item.noteAboveName !== true && item.note ? `<span class="godparent-note">${escapeHtml(item.note)}</span>` : ""}
        `;
        itemsWrap.appendChild(node);
      });
    }

    function renderCustomSections() {
      const page = document.querySelector(".page");
      if (!page || !brandFooter) return;
      page.querySelectorAll("[data-custom-section-key]").forEach((node) => node.remove());

      INVITATION_CONFIG.customSections.forEach((section) => {
        const orderKey = customSectionOrderKey(section);
        const node = document.createElement("section");
        node.className = "section custom-section";
        node.id = `custom-${section.id}`;
        node.dataset.customSectionKey = orderKey;

        if (section.title) {
          const title = document.createElement("h2");
          title.textContent = section.title;
          node.appendChild(title);
        }
        if (section.text) {
          const text = document.createElement("p");
          text.className = "custom-section-text";
          text.textContent = section.text;
          node.appendChild(text);
        }
        if (section.images.length) {
          const media = document.createElement("div");
          media.className = `custom-section-media custom-section-media--${section.imageLayout}`;
          section.images.forEach((src, imageIndex) => {
            const image = document.createElement("img");
            image.src = src;
            image.alt = section.title ? `${section.title}, imagen ${imageIndex + 1}` : `Imagen ${imageIndex + 1}`;
            image.loading = "lazy";
            image.decoding = "async";
            media.appendChild(image);
          });
          node.appendChild(media);
        }
        page.insertBefore(node, brandFooter);
      });
    }

    function getSectionMap() {
      const map = {
        story: document.getElementById("storySection"),
        parents: document.getElementById("parentsSection"),
        godparents: document.getElementById("godparentsSection"),
        ceremony: document.getElementById("ceremonySection"),
        reception: document.getElementById("receptionSection"),
        lodging: document.getElementById("lodgingSection"),
        timeline: document.getElementById("timelineSection"),
        countdown: document.getElementById("countdown-section"),
        gallery: document.getElementById("gallerySection"),
        dress: document.getElementById("dressSection"),
        adultNotice: document.getElementById("adultNoticeSection"),
        rsvp: document.getElementById("rsvpSection"),
        gifts: document.getElementById("giftSection"),
        agenda: document.getElementById("agendaSectionUi"),
        album: document.getElementById("albumSection"),
        closing: document.getElementById("closingNote")
      };
      document.querySelectorAll("[data-custom-section-key]").forEach((node) => {
        map[node.dataset.customSectionKey] = node;
      });
      return map;
    }

    function applySectionStyles() {
      const styles = INVITATION_CONFIG.sectionStyles || {};
      const sectionMap = getSectionMap();
      const fontSizeSlots = [
        "heading", "body", "eyebrow", "names", "notes", "time", "place", "detail", "button",
        "title", "desc", "note", "day", "intro", "date", "numbers", "labels", "caption",
        "nav", "fields", "buttons", "personalized", "receipt", "optionTitle"
      ];
      const fontSlots = fontSizeSlots;
      Object.entries(sectionMap).forEach(([key, element]) => {
        if (!element) return;
        const style = styles[key] || {};
        const properties = [
          "--section-title", "--script-color", "--text", "--muted",
          "--button-bg", "--button-bg-rgb", "--button-text",
          "--field-label", "--field-text",
          "--location-title-color", "--location-time-color", "--location-place-color",
          "--timeline-time-color", "--timeline-title-color", "--timeline-desc-color",
          "--closing-color", "--section-solid-bg-rgb", "--section-solid-opacity",
          "--section-solid-opacity-bottom", "--countdown-title-color", "--countdown-date-color",
          "--countdown-number-color", "--countdown-label-color",
          "--section-heading-font", "--section-text-font", "--font-body", "--font-script", "--font-display", "--timeline-font"
        ];
        properties.forEach((property) => element.style.removeProperty(property));
        fontSlots.forEach((slot) => {
          element.style.removeProperty(`--section-font-${slot}`);
        });
        Object.keys(style.fontSizes || {}).forEach((slot) => {
          element.style.removeProperty(`--section-font-size-${slot}`);
        });
        fontSizeSlots.forEach((slot) => {
          element.classList.remove(`section-font-size-${slot}`);
        });
        fontSlots.forEach((slot) => {
          element.classList.remove(`section-font-${slot}`);
        });
        element.classList.remove("section-frame-forced", "section-frame-none", "section-frame-solid");
        if (key === "countdown") {
          element.style.setProperty("--countdown-title-color", INVITATION_CONFIG.countdown?.titleColor || INVITATION_CONFIG.theme?.sectionTitle || "#ffffff");
          element.style.setProperty("--countdown-date-color", INVITATION_CONFIG.countdown?.dateColor || INVITATION_CONFIG.theme?.sectionTitle || "#ffffff");
          element.style.setProperty("--countdown-number-color", INVITATION_CONFIG.countdown?.numberColor || INVITATION_CONFIG.theme?.sectionTitle || "#ffffff");
          element.style.setProperty("--countdown-label-color", INVITATION_CONFIG.countdown?.labelColor || INVITATION_CONFIG.theme?.text || "#ffffff");
        }
        Object.entries(style.fonts || {}).forEach(([slot, font]) => {
          const fontValue = cssFontValue(font, "");
          if (fontValue) {
            element.style.setProperty(`--section-font-${slot}`, fontValue);
            element.classList.add(`section-font-${slot}`);
          }
        });
        Object.entries(style.fontSizes || {}).forEach(([slot, size]) => {
          const scale = clampNumber(size, 70, 160, 100) / 100;
          if (Math.abs(scale - 1) < 0.005) return;
          element.style.setProperty(`--section-font-size-${slot}`, scale.toFixed(2));
          element.classList.add(`section-font-size-${slot}`);
        });

        const frameMode = ["theme", "frame", "none", "solid"].includes(style.frameMode) ? style.frameMode : "theme";
        if (frameMode === "frame") {
          element.classList.add("section-frame-forced");
        } else if (frameMode === "none") {
          element.classList.add("section-frame-none");
        } else if (frameMode === "solid") {
          const solidBg = normalizeHexColor(style.solidBg, INVITATION_CONFIG.theme.bgMid);
          const solidOpacity = clampPercent(style.solidOpacity, 92) / 100;
          element.classList.add("section-frame-solid");
          element.style.setProperty("--section-solid-bg-rgb", rgbList(solidBg));
          element.style.setProperty("--section-solid-opacity", solidOpacity.toFixed(2));
          element.style.setProperty("--section-solid-opacity-bottom", Math.max(0.4, solidOpacity * 0.94).toFixed(2));
        }

        if (style.inheritTheme !== false) return;

        const titleFont = cssFontValue(style.titleFont, "");
        const textFont = cssFontValue(style.textFont, "");
        const titleColor = normalizeHexColor(style.titleColor, INVITATION_CONFIG.theme.sectionTitle);
        const textColor = normalizeHexColor(style.textColor, INVITATION_CONFIG.theme.text);
        const buttonBg = normalizeHexColor(style.buttonBg, INVITATION_CONFIG.theme.buttonBg);
        const buttonText = normalizeHexColor(style.buttonText, INVITATION_CONFIG.theme.buttonText);
        if (titleFont) {
          element.style.setProperty("--section-heading-font", titleFont);
          element.style.setProperty("--font-script", titleFont);
          element.style.setProperty("--font-display", titleFont);
        }
        if (textFont) {
          element.style.setProperty("--section-text-font", textFont);
          element.style.setProperty("--font-body", textFont);
          if (key === "timeline") element.style.setProperty("--timeline-font", textFont);
        }
        element.style.setProperty("--section-title", titleColor);
        element.style.setProperty("--script-color", titleColor);
        element.style.setProperty("--text", textColor);
        element.style.setProperty("--muted", textColor);
        element.style.setProperty("--button-bg", buttonBg);
        element.style.setProperty("--button-bg-rgb", rgbList(buttonBg));
        element.style.setProperty("--button-text", buttonText);
        if (["ceremony", "reception", "lodging"].includes(key)) {
          const timeColor = normalizeHexColor(style.timeColor, INVITATION_CONFIG.theme.locationTimeColor);
          element.style.setProperty("--location-title-color", titleColor);
          element.style.setProperty("--location-time-color", timeColor);
          element.style.setProperty("--location-place-color", textColor);
        }
        if (key === "timeline") {
          element.style.setProperty("--timeline-time-color", textColor);
          element.style.setProperty("--timeline-title-color", textColor);
          element.style.setProperty("--timeline-desc-color", textColor);
        }
        if (key === "rsvp") {
          element.style.setProperty("--field-label", textColor);
          element.style.setProperty("--field-text", textColor);
        }
        if (key === "closing") {
          element.style.setProperty("--closing-color", titleColor);
        }
      });
    }

    function applySectionRevealEffects() {
      const globalEnabled = INVITATION_CONFIG.theme?.sectionScrollRevealEnabled !== false;
      const effects = normalizeSectionRevealEffects(
        INVITATION_CONFIG.theme?.sectionRevealEffects,
        INVITATION_CONFIG.customSections
      );
      Object.entries(getSectionMap()).forEach(([key, element]) => {
        if (!element) return;
        element.querySelectorAll(".section-reveal-item").forEach((item) => {
          item.classList.remove("section-reveal-item", "is-revealed");
          item.style.removeProperty("--reveal-delay");
        });
        element.dataset.sectionKey = key;
        const enabled = globalEnabled && effects[key] !== false;
        element.classList.toggle("reveal-effect-enabled", enabled);
        element.classList.toggle("reveal-effect-disabled", !enabled);
        if (!enabled) return;

        getSectionRevealItems(element, key).forEach((item, index) => {
          item.classList.add("section-reveal-item");
          item.classList.toggle("section-reveal-item--visual", isVisualRevealItem(item));
          item.classList.toggle("section-reveal-item--button", isButtonRevealItem(item));
          item.style.setProperty("--reveal-delay", `${Math.min(index * 76, 380)}ms`);
        });
      });
    }

    function isButtonRevealItem(item) {
      return item.matches(".btn, .utilities")
        || (item.children.length === 1 && item.firstElementChild?.matches(".btn, button"));
    }

    function isVisualRevealItem(item) {
      if (isButtonRevealItem(item) || item.matches(".gallery, .gift-links")) return false;
      return item.matches(
        [
          ".featured-photo",
          ".event-media-stack",
          ".event-place-photo",
          ".event-place-video",
          ".dresscode-figure",
          ".countdown-shell",
          ".gallery-showcase",
          ".rsvp-card",
          ".rsvp-receipt",
          ".gift-options",
          ".album-card",
          ".album-qr",
        ].join(",")
      ) || Boolean(item.querySelector("img, video, iframe, canvas, svg, .count-box"));
    }

    function getSectionRevealItems(section, key) {
      const selectors = key === "ceremony" || key === "reception" || key === "lodging"
        ? [
            ":scope > h2",
            ":scope > .lodging-list > .lodging-card",
            ":scope > .event-card > .event-time",
            ":scope > .event-card > .event-place-group",
            ":scope > .event-card > .event-media-stack",
            ":scope > .event-card > div"
          ]
        : [
            ":scope > h2",
            ":scope > .eyebrow",
            ":scope > .script-block",
            ":scope > .parents-grid",
            ":scope > .parents-grid > *",
            ":scope > .grandparents-block",
            ":scope > .children-block",
            ":scope > .godparents-list",
            ":scope > .godparents-list > *",
            ":scope > p",
            ":scope > .featured-photo",
            ":scope > .dress-code-list",
            ":scope > .dresscode-figure",
            ":scope > .mini-note",
            ":scope > .countdown-shell",
            ":scope > .gallery-showcase",
            ":scope > .gallery",
            ":scope > .rsvp-personalization",
            ":scope > .rsvp-invalid",
            ":scope > .rsvp-card",
            ":scope > .rsvp-receipt",
            ":scope > .gift-options",
            ":scope > .gift-links",
            ":scope > .album-card > p",
            ":scope > .album-card > .album-qr",
            ":scope > .album-card > .utilities",
            ":scope > .utilities",
            ":scope > .custom-section-text",
            ":scope > .custom-section-media"
          ];
      const items = [];
      const seen = new Set();
      selectors.forEach((selector) => {
        section.querySelectorAll(selector).forEach((item) => {
          if (seen.has(item)) return;
          if (item.hidden || item.closest("[hidden]")) return;
          if (item.classList.contains("event-card")) return;
          seen.add(item);
          items.push(item);
        });
      });
      return items.filter((item) => {
        const style = getComputedStyle(item);
        if (style.display === "none" || style.visibility === "hidden") return false;
        return item.textContent.trim() || item.querySelector("img, video, iframe, a, button, input, select, .count-box");
      });
    }

    function applySectionOrder() {
      const page = document.querySelector(".page");
      if (!page || !brandFooter) return;

      const blockMap = getSectionMap();

      const requestedOrder = Array.isArray(INVITATION_CONFIG.layout?.sectionOrder)
        ? INVITATION_CONFIG.layout.sectionOrder
        : [];
      const resolvedOrder = [];
      const seen = new Set();

      requestedOrder.forEach((key) => {
        if (!blockMap[key] || seen.has(key)) return;
        resolvedOrder.push(key);
        seen.add(key);
      });

      Object.keys(blockMap).forEach((key) => {
        if (!blockMap[key] || seen.has(key)) return;
        resolvedOrder.push(key);
      });

      Array.from(page.querySelectorAll(".separator")).forEach((separator) => separator.remove());
      Object.values(blockMap).forEach((node) => {
        if (node?.parentNode === page) page.removeChild(node);
      });

      const fragment = document.createDocumentFragment();
      resolvedOrder.forEach((key) => {
        const node = blockMap[key];
        if (!node) return;
        const separator = document.createElement("div");
        separator.className = "separator";
        fragment.appendChild(separator);
        fragment.appendChild(node);
      });

      page.insertBefore(fragment, brandFooter);
    }

    function syncSeparators() {
      const page = document.querySelector(".page");
      if (!page) return;

      const children = Array.from(page.children);
      const isVisibleBlock = (node) => {
        if (!node) return false;
        if (!node.matches(".section, .closing-note")) return false;
        return getComputedStyle(node).display !== "none";
      };

      children.filter((node) => node.classList.contains("separator")).forEach((separator) => {
        separator.style.display = "none";
        separator.classList.remove("reveal-effect-enabled", "reveal-effect-disabled", "show");
        delete separator.dataset.revealOwnerKey;
      });

      let previousVisibleBlock = null;
      let pendingSeparator = null;
      children.forEach((node) => {
        if (node.classList.contains("separator")) {
          if (previousVisibleBlock && !pendingSeparator) pendingSeparator = node;
          return;
        }
        if (!node.matches(".section, .closing-note")) {
          previousVisibleBlock = null;
          pendingSeparator = null;
          return;
        }
        if (!isVisibleBlock(node)) return;
        if (previousVisibleBlock && pendingSeparator) {
          const revealEnabled = previousVisibleBlock.classList.contains("reveal-effect-enabled");
          pendingSeparator.style.display = "";
          pendingSeparator.dataset.revealOwnerKey = previousVisibleBlock.dataset.sectionKey || "";
          pendingSeparator.classList.toggle("reveal-effect-enabled", revealEnabled);
          pendingSeparator.classList.toggle("reveal-effect-disabled", !revealEnabled);
        }
        previousVisibleBlock = node;
        pendingSeparator = null;
      });
    }

    function applySectionVisibility() {
      const sectionMap = getSectionMap();

      Object.entries(sectionMap).forEach(([key, element]) => {
        if (!element) return;
        if (key.startsWith("custom:")) {
          const section = INVITATION_CONFIG.customSections.find((item) => customSectionOrderKey(item) === key);
          element.style.display = section?.enabled === false ? "none" : "";
        } else {
          element.style.display = INVITATION_CONFIG.sections[key] === false ? "none" : "";
        }
      });

      syncSeparators();
    }

    function applyCountdownStyle() {
      const countdownSection = document.getElementById("countdown-section");
      if (!countdownSection) return;
      const style = normalizeCountdownStyle(INVITATION_CONFIG.countdown?.style);
      countdownSection.classList.remove(
        "countdown-style-classic",
        "countdown-style-pulse",
        "countdown-style-crystal",
        "countdown-style-editorial",
        "countdown-style-date-card",
        "countdown-style-military",
        "countdown-style-military-tags",
        "countdown-style-military-radar"
      );
      countdownSection.classList.add(`countdown-style-${style}`);
    }

    function syncEventRuntimeValues() {
      EVENT_DATE = new Date(INVITATION_CONFIG.event.eventDate);
      EVENT_END = new Date(INVITATION_CONFIG.event.eventEnd);
      EVENT_LOCATION = INVITATION_CONFIG.reception.place
        || INVITATION_CONFIG.event.eventLocation
        || INVITATION_CONFIG.ceremony.place
        || "";
      RSVP_PHONE = INVITATION_CONFIG.event.rsvpPhone;
      RSVP_COUNTRY_CODE = INVITATION_CONFIG.event.rsvpCountryCode || "52";

      fechaEvento.textContent = formatDisplayEventDate(EVENT_DATE);
    }

    function resolveAlbumQrColor() {
      const candidate = String(INVITATION_CONFIG.theme?.buttonBg || INVITATION_CONFIG.theme?.sectionTitle || "#172033").trim();
      const match = candidate.match(/^#([0-9a-f]{6})$/i);
      if (!match) return "#172033";
      const value = Number.parseInt(match[1], 16);
      const red = (value >> 16) & 255;
      const green = (value >> 8) & 255;
      const blue = value & 255;
      const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
      return brightness > 170 ? "#172033" : candidate;
    }

    function resolveAlbumQrHref() {
      const href = String(INVITATION_CONFIG.album?.buttonHref || "").trim();
      if (!href || href === "#" || /^javascript:/i.test(href)) return "";
      try {
        return new URL(href, window.location.href).href;
      } catch {
        return "";
      }
    }

    function normalizeAlbumQrLayout() {
      const svg = albumQrCanvas?.querySelector("svg");
      if (!svg) return;
      const width = Number(svg.getAttribute("width")) || 200;
      const height = Number(svg.getAttribute("height")) || width;
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
      svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    }

    function renderAlbumQr() {
      if (!albumQrLink || !albumQrCanvas) return;
      const href = resolveAlbumQrHref();
      const visible = INVITATION_CONFIG.album?.showQr !== false && Boolean(href);
      albumQrLink.hidden = !visible;
      if (!visible) return;

	      const backgroundOpacity = clampPercent(INVITATION_CONFIG.album?.qrBackgroundOpacity, 100) / 100;
      albumQrLink.style.setProperty("--album-qr-bg-opacity", backgroundOpacity.toFixed(2));
      if (typeof window.QRCodeStyling !== "function") {
        albumQrLink.hidden = true;
        ensureQrLibrary().then((loaded) => {
          if (loaded) renderAlbumQr();
        });
        return;
      }

      const color = resolveAlbumQrColor();
      const options = {
        width: 200,
        height: 200,
        type: "svg",
        data: href,
        margin: 10,
        qrOptions: { errorCorrectionLevel: "Q" },
        dotsOptions: { color, type: "dots" },
        cornersSquareOptions: { color, type: "extra-rounded" },
        cornersDotOptions: { color, type: "dot" },
        backgroundOptions: { color: "rgba(255,255,255,0)" }
      };

      if (!albumQrCode) {
        albumQrCode = new window.QRCodeStyling(options);
        albumQrCode.append(albumQrCanvas);
      } else {
        albumQrCode.update(options);
      }
      normalizeAlbumQrLayout();
      window.requestAnimationFrame(normalizeAlbumQrLayout);
    }

    function applyAudioSource() {
      if (!audioSource) return;
      const nextSource = normalizeAudioSource(INVITATION_CONFIG.audio?.src, "cancio.mp3");
      if (audioSource.getAttribute("src") === nextSource) return;
      const wasPaused = audio.paused;
      audioSource.setAttribute("src", nextSource);
      audio.load();
      if (!wasPaused) audio.play().catch(() => {});
    }

    function applyInvitationConfig() {
      sanitizeInvitationConfig();
      document.documentElement.lang = currentLanguage();
      const eventCopy = getEventCopy();
      const resolvedPageTitle = INVITATION_CONFIG.meta.pageTitle?.trim()
        || eventCopy.pageTitle;
      const resolvedOgTitle = INVITATION_CONFIG.meta.ogTitle?.trim()
        || resolvedPageTitle;
      document.title = resolvedPageTitle;

      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      const itempropName = document.querySelector('meta[itemprop="name"]');
      const itempropDescription = document.querySelector('meta[itemprop="description"]');
      const ogImage = document.querySelector('meta[property="og:image"]');
      const ogImageUrl = document.querySelector('meta[property="og:image:url"]');
      const ogSecureImage = document.querySelector('meta[property="og:image:secure_url"]');
      const ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
      const itempropImage = document.querySelector('meta[itemprop="image"]');
      const itempropThumbnail = document.querySelector('meta[itemprop="thumbnailUrl"]');
      const thumbnailImage = document.querySelector('meta[name="thumbnail"]');
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      const twitterDescription = document.querySelector('meta[name="twitter:description"]');
      const twitterImage = document.querySelector('meta[name="twitter:image"]');
      const imageSrcLink = document.querySelector('link[rel="image_src"]');
      const itempropThumbnailLink = document.querySelector('link[itemprop="thumbnailUrl"]');
      const ogUrl = document.querySelector('meta[property="og:url"]');
      const publicUrl = cleanPublicUrl(INVITATION_CONFIG.meta.publicUrl || "");
      const shareImage = INVITATION_CONFIG.images.og || (mediaTypeFromSource(INVITATION_CONFIG.images.hero, INVITATION_CONFIG.images.heroType) === "image" ? INVITATION_CONFIG.images.hero : INVITATION_CONFIG.images.story);
      const shareImageUrl = publicUrl ? makeAbsoluteUrl(publicUrl, shareImage) : shareImage;
      if (ogTitle) ogTitle.setAttribute("content", resolvedOgTitle);
      if (ogDescription) ogDescription.setAttribute("content", INVITATION_CONFIG.meta.ogDescription);
      if (itempropName) itempropName.setAttribute("content", resolvedOgTitle);
      if (itempropDescription) itempropDescription.setAttribute("content", INVITATION_CONFIG.meta.ogDescription);
      if (ogImage && shareImageUrl) ogImage.setAttribute("content", shareImageUrl);
      if (ogImageUrl && shareImageUrl) ogImageUrl.setAttribute("content", shareImageUrl);
      if (ogSecureImage && shareImageUrl) ogSecureImage.setAttribute("content", shareImageUrl);
      if (itempropImage && shareImageUrl) itempropImage.setAttribute("content", shareImageUrl);
      if (itempropThumbnail && shareImageUrl) itempropThumbnail.setAttribute("content", shareImageUrl);
      if (thumbnailImage && shareImageUrl) thumbnailImage.setAttribute("content", shareImageUrl);
      if (imageSrcLink && shareImageUrl) imageSrcLink.setAttribute("href", shareImageUrl);
      if (itempropThumbnailLink && shareImageUrl) itempropThumbnailLink.setAttribute("href", shareImageUrl);
      if (ogImageAlt) ogImageAlt.setAttribute("content", resolvedOgTitle);
      if (twitterTitle) twitterTitle.setAttribute("content", resolvedOgTitle);
      if (twitterDescription) twitterDescription.setAttribute("content", INVITATION_CONFIG.meta.ogDescription);
      if (twitterImage && shareImageUrl) twitterImage.setAttribute("content", shareImageUrl);
      if (ogUrl) ogUrl.setAttribute("content", publicUrl);

      const visibleEventLabel = getVisibleEventLabel();
      setText("overlayKicker", visibleEventLabel);
      setText("heroLabel", visibleEventLabel);
      setText("heroScrollHintText", isEnglish() ? "Swipe to continue" : "Desliza para continuar");
      setText("envelopeEventLabel", visibleEventLabel);
      setText("envelopeNames", INVITATION_CONFIG.event.celebrantName || visibleEventLabel);
      renderCelebrantName(overlayTitle, { compact: true });
      renderCelebrantName(heroName);
      applyNameLengthClasses(overlayTitle, INVITATION_CONFIG.event.celebrantName);
      applyNameLengthClasses(heroName, INVITATION_CONFIG.event.celebrantName);
      syncEventRuntimeValues();
      if (envelopeDate) envelopeDate.textContent = fechaEvento?.textContent || "";
      applyMusicControlState();

      applyThemeColors();
      applySectionStyles();
      applyCountdownStyle();
      applySmartBackground();
      window.dispatchEvent(new CustomEvent("digitalInvita:visualSettingsChanged"));
      document.documentElement.style.setProperty("--overlay-image", cssMediaUrl(INVITATION_CONFIG.images.hero));
      const envelopePaperSource = mediaTypeFromSource(INVITATION_CONFIG.images.hero, INVITATION_CONFIG.images.heroType) === "image"
        ? INVITATION_CONFIG.images.hero
        : (INVITATION_CONFIG.images.og || INVITATION_CONFIG.images.story);
      document.documentElement.style.setProperty("--envelope-paper-image", cssMediaUrl(envelopePaperSource));
      // La postal emerge completa; la portada final conserva su propio encuadre.
      document.documentElement.style.setProperty("--envelope-paper-fit", "contain");
      if (envelopePaperImage) {
        envelopePaperImage.src = envelopePaperSource || "";
        envelopePaperImage.closest(".envelope-paper")?.classList.toggle("envelope-paper--has-image", Boolean(envelopePaperSource));
      }
      setRootVar("--font-body", cssFontValue(INVITATION_CONFIG.theme.bodyFont, "\"Cormorant Garamond\", serif"));
      setRootVar("--font-script", cssFontValue(INVITATION_CONFIG.theme.scriptFont, "\"Dancing Script\", cursive"));
      setRootVar("--font-display", cssFontValue(INVITATION_CONFIG.theme.displayFont, "\"Great Vibes\", cursive"));
      setRootVar("--story-image-width", `${INVITATION_CONFIG.story.imageSize}%`);
      if (waxCaption) waxCaption.textContent = t(INVITATION_CONFIG.theme.styleMode === "military"
        ? "Ingresar al cuartel"
        : INVITATION_CONFIG.theme.styleMode === "space-ranger" ? "Iniciar misión" : "Abrir invitación");
      if (openBtn) openBtn.setAttribute("aria-label", t("Abrir invitación"));
      const launchStatusText = document.querySelector(".launch-status strong");
      if (launchStatusText) launchStatusText.textContent = t(INVITATION_CONFIG.theme.styleMode === "military" ? "Formación lista" : "Sistemas listos");
      if (missionAccepted) missionAccepted.textContent = t(INVITATION_CONFIG.theme.styleMode === "military" ? "Acceso autorizado" : "Misión aceptada");
      if (sealImage) sealImage.src = INVITATION_CONFIG.images.seal || "sello_cera.png";
      applyHeroMedia();
      if (storyImage) storyImage.src = INVITATION_CONFIG.images.story;
      if (storyImage) storyImage.alt = `Fotografía de ${INVITATION_CONFIG.event.celebrantName}`;
      if (dressImage) dressImage.src = INVITATION_CONFIG.images.dress;
      setOptionalImage(envelopeImage, INVITATION_CONFIG.images.envelope);
      setOptionalImage(surpriseImage, INVITATION_CONFIG.images.surprise);
      if (storySection) storySection.classList.toggle("story-no-image", INVITATION_CONFIG.story.showImage === false);
      renderGalleryGrid();

      setText("storyTitle", localizedText(INVITATION_CONFIG.story.title, "Mi historia", "Our Story"));
      const story1 = document.getElementById("storyText1");
      const story2 = document.getElementById("storyText2");
      const storyParagraph1 = localizedDefaultText(INVITATION_CONFIG.story.paragraph1);
      const storyParagraph2 = localizedDefaultText(INVITATION_CONFIG.story.paragraph2);
      if (story1) {
        const visible = INVITATION_CONFIG.story.paragraph1Enabled !== false && storyParagraph1.trim();
        story1.hidden = !visible;
        story1.dataset.fulltext = visible ? storyParagraph1 : "";
        story1.textContent = visible && storyStarted ? storyParagraph1 : "";
      }
      if (story2) {
        const visible = INVITATION_CONFIG.story.paragraph2Enabled !== false && storyParagraph2.trim();
        story2.hidden = !visible;
        story2.dataset.fulltext = visible ? storyParagraph2 : "";
        story2.textContent = visible && storyStarted ? storyParagraph2 : "";
      }

      setText("parentsEyebrow", localizedText(INVITATION_CONFIG.family.parentsEyebrow, "En compañía de mis padres", "Together with my parents"));
      setHTML("parentsNames", INVITATION_CONFIG.family.parentsNamesHtml);
      renderFamilyGroups();
      renderGrandparentsBlock();
      renderChildrenBlock();
      setText("parentsInviteText", localizedText(INVITATION_CONFIG.family.parentsInviteText, "Tenemos el honor de invitarles a celebrar mis XV años.", "We are honored to invite you to celebrate my XV."));
      setText("godparentsEyebrow", localizedText(INVITATION_CONFIG.family.godparentsEyebrow, "Mis padrinos", "My godparents"));
      setHTML("godparentsNames", INVITATION_CONFIG.family.godparentsNamesHtml);
      renderGodparentsItems();

      setText("ceremonyTitle", localizedText(INVITATION_CONFIG.ceremony.title, "Ceremonia", "Ceremony"));
      setText("ceremonyTime", INVITATION_CONFIG.ceremony.time);
      setText("ceremonyPlace", INVITATION_CONFIG.ceremony.place);
      setOptionalText("ceremonyPlaceDetail", INVITATION_CONFIG.ceremony.placeDetail, INVITATION_CONFIG.ceremony.showPlaceDetail === true);
      setOptionalLink("ceremonyMapLink", INVITATION_CONFIG.ceremony.mapLink);
      setText("ceremonyMapLink", t("Cómo llegar"));
      if (ceremonyMapEmbed) ceremonyMapEmbed.title = t("Mapa de la ceremonia");
      applyLocationMedia({
        ...INVITATION_CONFIG.ceremony
      }, {
        icon: ceremonyImage,
        map: ceremonyMapEmbed,
        photo: ceremonyPhoto,
        video: ceremonyVideo,
        iconWrap: ceremonyIconWrap,
        mapWrap: ceremonyMapWrap,
        photoWrap: ceremonyPhotoWrap,
        videoWrap: ceremonyVideoWrap
      });

      setText("receptionTitle", localizedText(INVITATION_CONFIG.reception.title, "Recepción", "Reception"));
      setText("receptionTime", INVITATION_CONFIG.reception.time);
      setText("receptionPlace", INVITATION_CONFIG.reception.place);
      setOptionalText("receptionPlaceDetail", INVITATION_CONFIG.reception.placeDetail, INVITATION_CONFIG.reception.showPlaceDetail === true);
      setOptionalLink("receptionMapLink", INVITATION_CONFIG.reception.mapLink);
      setText("receptionMapLink", t("Cómo llegar"));
      if (receptionMapEmbed) receptionMapEmbed.title = t("Mapa del salón");
      applyLocationMedia(INVITATION_CONFIG.reception, {
        icon: receptionImage,
        map: receptionMapEmbed,
        photo: receptionPhoto,
        video: receptionVideo,
        iconWrap: receptionIconWrap,
        mapWrap: receptionMapWrap,
        photoWrap: receptionPhotoWrap,
        videoWrap: receptionVideoWrap
      });
      setText("lodgingTitle", localizedText(INVITATION_CONFIG.lodging?.title || "Hospedaje", "Hospedaje", "Lodging"));
      renderLodgingOptions();
      const timelineHeading = document.querySelector("#timelineSection h2");
      if (timelineHeading) timelineHeading.textContent = t("Itinerario");
      renderTimeline();

      setOptionalText("countdownTitle", localizedDefaultText(localizedText(INVITATION_CONFIG.countdown.title, "Faltan pocos días", "The Countdown Begins")));
      setOptionalText("countdownIntro", localizedText(INVITATION_CONFIG.countdown.intro, "La cuenta regresiva ha comenzado para vivir un momento inolvidable.", "The countdown has begun for an unforgettable celebration."));
      if (countdownCaption) countdownCaption.style.color = INVITATION_CONFIG.countdown.captionColor;
      const showCountdownCalendar = INVITATION_CONFIG.countdown.showCalendarButton === true;
      if (countdownCalendarAction) countdownCalendarAction.hidden = !showCountdownCalendar;
      if (countdownCalendarBtn) countdownCalendarBtn.textContent = localizedText(INVITATION_CONFIG.countdown.calendarButtonLabel, "Agendar momento", "Add to calendar");
      const countdownSection = document.getElementById("countdown-section");
      if (countdownSection) {
        countdownSection.style.setProperty("--countdown-title-color", INVITATION_CONFIG.countdown.titleColor);
        countdownSection.style.setProperty("--countdown-date-color", INVITATION_CONFIG.countdown.dateColor);
        countdownSection.style.setProperty("--countdown-number-color", INVITATION_CONFIG.countdown.numberColor);
        countdownSection.style.setProperty("--countdown-label-color", INVITATION_CONFIG.countdown.labelColor);
      }

      const galleryHeading = document.querySelector("#gallerySection h2");
      if (galleryHeading) galleryHeading.textContent = t("Galería");
      const galleryPrevBtn = document.getElementById("galleryPrev");
      const galleryNextBtn = document.getElementById("galleryNext");
      const closeLightboxBtn = document.getElementById("closeLightbox");
      const lightboxPrevBtn = document.getElementById("lightboxPrev");
      const lightboxNextBtn = document.getElementById("lightboxNext");
      const lightboxDialog = document.getElementById("lightbox");
      const toTopButton = document.getElementById("toTopBtn");
      const rsvpQrNode = document.getElementById("rsvpReceiptQr");
      const albumQrNode = document.getElementById("albumQrLink");
      if (galleryPrevBtn) galleryPrevBtn.setAttribute("aria-label", t("Foto anterior"));
      if (galleryNextBtn) galleryNextBtn.setAttribute("aria-label", t("Foto siguiente"));
      if (closeLightboxBtn) closeLightboxBtn.setAttribute("aria-label", t("Cerrar galería"));
      if (lightboxPrevBtn) lightboxPrevBtn.setAttribute("aria-label", t("Multimedia anterior"));
      if (lightboxNextBtn) lightboxNextBtn.setAttribute("aria-label", t("Multimedia siguiente"));
      if (lightboxDialog) lightboxDialog.setAttribute("aria-label", t("Galería ampliada"));
      if (toTopButton) toTopButton.setAttribute("aria-label", t("Volver arriba"));
      if (rsvpQrNode) rsvpQrNode.setAttribute("aria-label", t("Código QR de confirmación"));
      if (albumQrNode) albumQrNode.setAttribute("aria-label", t("Código QR del álbum digital"));
      setText("dressTitle", localizedText(INVITATION_CONFIG.dressCode.title, "Dress Code", "Dress Code"));
      renderDressCodeList(INVITATION_CONFIG.dressCode.value);
      renderDressColorPalette();
      setText("dressNote", INVITATION_CONFIG.dressCode.note);
      setOptionalText("dressExtraNote", INVITATION_CONFIG.dressCode.extraNote, INVITATION_CONFIG.dressCode.extraNoteEnabled === true);
      setText("adultNoticeTitle", localizedText(INVITATION_CONFIG.adultNotice?.title || "Una celebración para adultos", "Una celebración para adultos", "An Adults-Only Celebration"));
      setText("adultNoticeText", localizedText(INVITATION_CONFIG.adultNotice?.text || "", "Con mucho cariño, hemos preparado esta celebración exclusivamente para adultos.\nAgradecemos mucho su comprensión.", "With love, we have planned this celebration exclusively for adults.\nThank you for your understanding."));

      renderGiftTitle();
      setText("giftIntro", localizedText(INVITATION_CONFIG.gifts.intro, "Tu presencia es el regalo más valioso, pero si deseas tener un detalle será recibido con mucho cariño.", "Your presence is the greatest gift, but if you wish to give a detail, it will be received with love."));
      setText("giftOption1Title", localizedText(INVITATION_CONFIG.gifts.option1Title, "Lluvia de sobres", "Envelope Gifts"));
      setText("giftOption1Copy", localizedText(INVITATION_CONFIG.gifts.option1Copy, "Podrás acompañarme con un sobre el día del evento.", "You may bring an envelope gift on the day of the event."));
      setText("giftOption2Title", localizedText(INVITATION_CONFIG.gifts.option2Title, "Regalo sorpresa", "Surprise Gift"));
      setText("giftOption2Copy", localizedText(INVITATION_CONFIG.gifts.option2Copy, "También puedes sorprenderme con un detalle elegido por ti.", "You may also surprise me with a gift of your choice."));
      setText("giftLinksIntro", localizedText(INVITATION_CONFIG.gifts.linksIntro, "Si prefieres elegir un detalle en línea, también puedes apoyarte en estas opciones de mesa de regalos:", "If you prefer to choose a gift online, you can use these gift registry options:"));
      const giftSection = document.getElementById("giftSection");
      giftSection?.classList.toggle("gift-section--editorial", INVITATION_CONFIG.gifts.layoutStyle === "editorial");
      if (giftOption1Card) giftOption1Card.style.display = INVITATION_CONFIG.gifts.showOption1 === false ? "none" : "";
      if (giftOption2Card) giftOption2Card.style.display = INVITATION_CONFIG.gifts.showOption2 === false ? "none" : "";
      const giftOptions = document.querySelector(".gift-options");
      if (giftOptions) {
        const visibleGiftCards = [INVITATION_CONFIG.gifts.showOption1 !== false, INVITATION_CONFIG.gifts.showOption2 !== false].filter(Boolean).length;
        giftOptions.classList.toggle("single-option", visibleGiftCards <= 1);
      }
      renderGiftButtons();
      renderBankTransferCard();
      if (galleryItems.length && (galleryPreviewHydrated || document.documentElement.classList.contains("preview-embed"))) {
        hydrateGalleryPreview(previewIndex);
      }

      setText("albumTitle", localizedText(INVITATION_CONFIG.album?.title || "Álbum digital", "Álbum digital", "Digital Album"));
      setText("albumCopy", localizedText(INVITATION_CONFIG.album?.copy || "", "Comparte las mejores fotos de este gran día.", "Share the best photos from this special day."));
      setText("albumBtn", localizedText(INVITATION_CONFIG.album?.buttonLabel || "Ver álbum digital", "Ver álbum digital", "View digital album"));
      setHref("albumBtn", INVITATION_CONFIG.album?.buttonHref || "#");
      renderAlbumQr();

      setText("closingNote", localizedText(INVITATION_CONFIG.closing.note, "Gracias por ser parte de este momento inolvidable", "Thank you for being part of this unforgettable moment"));
      const brandCaption = document.querySelector(".brand-caption");
      const brandQuestion = document.querySelector(".brand-question");
      if (brandCaption) brandCaption.textContent = t("Invitación creada con amor digital");
      setText("brandLink", localizedText(INVITATION_CONFIG.brand.creditText, "Creado por Digital Invita", "Created by Digital Invita"));
      setHref("brandLink", INVITATION_CONFIG.brand.creditHref);
      if (brandQuestion) brandQuestion.textContent = t("Invitaciones digitales para eventos");
      setText("brandCtaLink", localizedText(INVITATION_CONFIG.brand.ctaLabel, "Contáctanos", "Contact us"));
      setHref("brandCtaLink", INVITATION_CONFIG.brand.ctaHref);

      const personalization = getRsvpPersonalization();
      const familyMode = isFamilyRsvp(personalization);
      const rsvpHeading = document.querySelector("#rsvpSection h2");
      const guestCountLabel = document.querySelector('label[for="guestCount"]');
      const familyMembersTitle = document.querySelector(".family-members__head strong");
      const familyMembersHint = document.querySelector(".family-members__head span");
      const receiptEyebrow = document.querySelector(".rsvp-receipt__eyebrow");
      const receiptQrLabel = document.querySelector(".rsvp-receipt__qr-label");
      const agendaHeading = document.querySelector("#agendaSectionUi h2");
      const rsvpInvalidEyebrow = document.querySelector("#rsvpInvalidNotice span");
      if (rsvpHeading) rsvpHeading.textContent = isEnglish() ? "Confirm Your Attendance" : "Confirma tu presencia";
      if (guestCountLabel) guestCountLabel.textContent = isEnglish() ? "How many people will attend?" : "¿Cuántas personas asistirán?";
      const usesAdultChildTotal = rsvpUsesSelectedTotal(personalization, familyMode);
      if (adultChildCountTitle) adultChildCountTitle.textContent = isEnglish() ? "Guest details" : "Detalle de asistentes";
      if (adultChildCountHint) {
        adultChildCountHint.textContent = usesAdultChildTotal
          ? (isEnglish()
            ? "After selecting the total, let us know if children will be attending."
            : "Después de seleccionar el total, indícanos si asistirán niños.")
          : (isEnglish()
            ? "Let us know how many adults and children will attend."
            : "Indícanos cuántos adultos y niños asistirán.");
      }
      if (adultCountLabel) adultCountLabel.firstChild.textContent = isEnglish() ? "Adults" : "Adultos";
      const childCountLabel = childCount?.closest("label");
      if (childCountLabel) childCountLabel.firstChild.textContent = isEnglish() ? "Children" : "Niños";
      if (familyMembersTitle) familyMembersTitle.textContent = isEnglish() ? "Names of attendees" : "Nombres de quienes asistirán";
      if (familyMembersHint) familyMembersHint.textContent = isEnglish() ? "Write the full name of each person attending." : "Escribe el nombre de cada persona que asistirá.";
      if (receiptEyebrow) receiptEyebrow.textContent = isEnglish() ? "Confirmation registered" : "Confirmación registrada";
      if (receiptQrLabel) receiptQrLabel.textContent = isEnglish() ? "Digital access pass" : "Pase digital de acceso";
      if (rsvpInvalidEyebrow) rsvpInvalidEyebrow.textContent = t("Invitación no válida");
      if (agendaHeading) agendaHeading.textContent = isEnglish() ? "Quick Access" : "Accesos rápidos";
      setText("agendaGalleryBtn", isEnglish() ? "View gallery" : "Ver galería");
      setText("verCuenta", isEnglish() ? "View countdown" : "Ver cuenta regresiva");
      if (confirmYes) confirmYes.textContent = t("Confirmar asistencia");
      if (confirmNo) confirmNo.textContent = t("No podré asistir");
      renderRsvpContactButtons();
      renderRsvpDeadlineNote();
      guestCount.dataset.pases = String(personalization.active ? personalization.passes : (INVITATION_CONFIG.rsvp.maxGuests || 1));
      guestNameLabel.textContent = t(familyMode ? "Apellido o nombre de la familia" : "Tu nombre");
      guestName.placeholder = t(familyMode ? "Ej. Hernández García" : "Escríbelo aquí");
      guestNameField.style.display = personalization.active ? "none" : "";
      guestCountField.style.display = !personalization.active && !familyMode && INVITATION_CONFIG.rsvp.showGuestCount === false ? "none" : "";
      if (personalization.active) {
        guestName.value = personalization.recipient || "";
        guestName.readOnly = true;
        guestName.dataset.personalized = "true";
        rsvpPersonalization.hidden = false;
        rsvpPersonalization.classList.toggle("is-dynamic", personalization.dynamic === true);
        rsvpPersonalizationRecipient.textContent = personalization.dynamic
          ? getDynamicRsvpGreeting(personalization.passes)
          : personalization.recipient;
        rsvpPersonalizationText.textContent = personalization.dynamic
          ? ""
          : formatReservedPassesText(personalization);
        rsvpPersonalizationText.hidden = personalization.dynamic === true;
        rsvpPersonalizationPasses.textContent = passLabel(personalization.passes);
        rsvpPersonalization.querySelector(".rsvp-personalization__eyebrow").textContent = personalization.dynamic
          ? t("Con mucho cariño")
          : t("Invitación preparada especialmente para");
        rsvpPersonalization.querySelector(".rsvp-personalization__passes span").textContent = personalization.dynamic
          ? t("Cupo reservado")
          : t("Cupo reservado");
      } else {
        if (guestName.dataset.personalized === "true") guestName.value = "";
        guestName.readOnly = false;
        delete guestName.dataset.personalized;
        rsvpPersonalization.hidden = true;
        rsvpPersonalization.classList.remove("is-dynamic");
        rsvpPersonalizationRecipient.textContent = "";
        rsvpPersonalizationText.textContent = "";
        rsvpPersonalizationText.hidden = false;
        rsvpPersonalizationPasses.textContent = "";
        rsvpPersonalization.querySelector(".rsvp-personalization__eyebrow").textContent = t("Invitación preparada especialmente para");
        rsvpPersonalization.querySelector(".rsvp-personalization__passes span").textContent = t("Cupo reservado");
      }
      if (!familyMode) {
        familyMembersField.hidden = true;
        familyMembersList.innerHTML = "";
      }
      renderCustomSections();
      applySectionStyles();
      applySectionOrder();
      applySectionRevealEffects();
      applySectionVisibility();
      requestAnimationFrame(updateAppleHeroScroll);
      populateGuestOptions();
      restoreRsvpReceipt();
      scheduleRsvpValidation();
    }

    function applyPreviewOpenState() {
      if (!document.documentElement.classList.contains("preview-embed")) return;

      const skipOpening = readStorageItem(PREVIEW_SKIP_OPENING_KEY) !== "false";
      document.documentElement.classList.toggle("preview-live", skipOpening);
      overlay.classList.remove("opening", "elegant-opening");
      openBtn.disabled = false;
      warpFlash?.classList.remove("active", "elegant");
      missionAccepted?.classList.remove("active");

      if (!skipOpening) {
        overlay.classList.remove("hidden");
        overlay.setAttribute("aria-hidden", "false");
        setScrollLocked(true);
        musicBtn.classList.remove("show");
        return;
      }

      overlay.classList.add("hidden");
      overlay.setAttribute("aria-hidden", "true");
      setScrollLocked(false);
      if (INVITATION_CONFIG.audio?.showControl !== false) {
        musicBtn.classList.add("is-paused");
      }
      updateFloatingButtons();
      heroLabel.classList.add("animate");
      heroName.classList.add("animate");
      fechaEvento.classList.add("animate");
      requestAnimationFrame(updateAppleHeroScroll);
      scheduleHeroScrollCue();

      const scrollY = Number(readStorageItem(PREVIEW_SCROLL_KEY) || 0);
      if (scrollY > 0) {
        requestAnimationFrame(() => {
          window.scrollTo(0, scrollY);
          requestAnimationFrame(updateAppleHeroScroll);
        });
      }
    }

    function exposePreviewBridge() {
      if (!document.documentElement.classList.contains("preview-embed")) return;

      window.digitalInvitaPreviewApply = (nextConfig, scrollY = window.scrollY) => {
        replaceConfig(deepMerge(DEFAULT_CONFIG, nextConfig || {}));
        storyStarted = true;
        applyInvitationConfig();
        applyPreviewOpenState();
        updateCountdown();
        revealOnScroll();
        requestAnimationFrame(() => {
          window.scrollTo(0, Math.max(0, Number(scrollY) || 0));
          requestAnimationFrame(updateAppleHeroScroll);
        });
      };

      window.addEventListener("scroll", () => {
        try {
          localStorage.setItem(PREVIEW_SCROLL_KEY, String(window.scrollY || 0));
        } catch {}
      }, { passive: true });
    }

    loadSavedConfig();
    applyInvitationConfig();
    applyPreviewOpenState();
    exposePreviewBridge();
    updateOverlayScale();
    setScrollLocked(!overlay.classList.contains("hidden"));

    function populateGuestOptions() {
      const personalization = getRsvpPersonalization();
      const familyMode = isFamilyRsvp(personalization);
      if (personalization.active) {
        guestCount.innerHTML = `<option value="" disabled selected>${t("Selecciona una opción")}</option>`;
        for (let total = 1; total <= personalization.passes; total += 1) {
          const option = document.createElement("option");
          option.value = String(total);
          option.textContent = peopleLabel(total);
          guestCount.appendChild(option);
        }
        renderFamilyMemberFields();
        renderAdultChildFields();
        return;
      }
      if (!familyMode && INVITATION_CONFIG.rsvp.showGuestCount === false) {
        guestCount.innerHTML = `<option value="">${t("No aplica")}</option>`;
        renderAdultChildFields();
        return;
      }

      const maxPases = Number(guestCount.dataset.pases) || 1;
      guestCount.innerHTML = `<option value="" disabled selected>${t("Selecciona una opción")}</option>`;

      for (let i = 0; i < maxPases; i += 1) {
        const option = document.createElement("option");
        if (familyMode) {
          const total = i + 1;
          option.value = String(total);
          option.textContent = peopleLabel(total);
        } else if (i === 0) {
          option.value = "Asistiré solo";
          option.textContent = t("Asistiré solo");
        } else {
          option.value = companionOptionValue(i);
          option.textContent = companionOptionLabel(i);
        }
        guestCount.appendChild(option);
      }
      renderFamilyMemberFields();
      renderAdultChildFields();
    }

    function setRsvpNumberInput(input, max, value) {
      if (!input) return 0;
      const limit = Math.max(0, Number(max) || 0);
      const current = Math.min(limit, Math.max(0, Number.parseInt(value, 10) || 0));
      input.max = String(Math.min(99, limit || 99));
      input.value = current ? String(current) : "";
      return current;
    }

    function sanitizeRsvpNumberInput(input, max = 99) {
      if (!input) return 0;
      const limit = Math.min(99, Math.max(0, Number(max) || 99));
      const digits = String(input.value || "").replace(/\D/g, "").slice(0, 2);
      const value = Math.min(limit, Math.max(0, Number.parseInt(digits, 10) || 0));
      input.value = value ? String(value) : "";
      input.max = String(limit);
      return value;
    }

    function rsvpUsesSelectedTotal(personalization, familyMode) {
      return personalization.active || familyMode || INVITATION_CONFIG.rsvp.showGuestCount !== false;
    }

    function renderAdultChildFields() {
      if (!adultChildCountField || !adultCount || !childCount) return;
      const enabled = INVITATION_CONFIG.rsvp?.adultChildCountEnabled === true;
      adultChildCountField.hidden = !enabled;
      if (!enabled) return;

      const personalization = getRsvpPersonalization();
      const familyMode = isFamilyRsvp(personalization);
      const usesSelectedTotal = rsvpUsesSelectedTotal(personalization, familyMode);
      const maxGuests = Math.max(1, Number(personalization.active ? personalization.passes : guestCount.dataset.pases) || INVITATION_CONFIG.rsvp.maxGuests || 1);
      const selectedTotal = usesSelectedTotal && guestCount.value ? resolveAttendanceCount(guestCount.value, familyMode) : 0;

      adultCount.disabled = usesSelectedTotal;
      childCount.disabled = usesSelectedTotal && !selectedTotal;
      if (usesSelectedTotal) {
        const childLimit = selectedTotal || maxGuests;
        sanitizeRsvpNumberInput(childCount, childLimit);
        if (!selectedTotal) {
          setRsvpNumberInput(adultCount, maxGuests, 0);
          if (adultChildSummary) {
            adultChildSummary.textContent = isEnglish()
              ? "Select the total number of attendees first."
              : "Primero selecciona el total de asistentes.";
          }
          return;
        }
        const children = sanitizeRsvpNumberInput(childCount, selectedTotal);
        const adults = Math.max(0, selectedTotal - children);
        setRsvpNumberInput(adultCount, selectedTotal, adults);
        if (adultChildSummary) {
          adultChildSummary.textContent = isEnglish()
            ? `Attendance detail: ${adults} ${adults === 1 ? "adult" : "adults"} · ${children} ${children === 1 ? "child" : "children"}`
            : `Detalle confirmado: ${adults} ${adults === 1 ? "adulto" : "adultos"} · ${children} ${children === 1 ? "niño" : "niños"}`;
        }
        return;
      }

      adultCount.disabled = false;
      childCount.disabled = false;
      const manualAdults = sanitizeRsvpNumberInput(adultCount, 99);
      const manualChildren = sanitizeRsvpNumberInput(childCount, 99);
      const manualTotal = manualAdults + manualChildren;
      if (adultChildSummary) {
        adultChildSummary.textContent = isEnglish()
          ? `Total registered: ${manualTotal} ${manualTotal === 1 ? "person" : "people"}`
          : `Total registrado: ${manualTotal} ${manualTotal === 1 ? "persona" : "personas"}`;
      }
    }

    function renderFamilyMemberFields() {
      const personalization = getRsvpPersonalization();
      if (!isFamilyRsvp(personalization)) {
        familyMembersField.hidden = true;
        familyMembersList.innerHTML = "";
        return;
      }
      const count = Math.max(0, Number(guestCount.value) || 0);
      const existingNames = Array.from(familyMembersList.querySelectorAll("input")).map((input) => input.value);
      familyMembersList.innerHTML = "";
      familyMembersField.hidden = count === 0;
      for (let index = 0; index < count; index += 1) {
        const wrapper = document.createElement("label");
        wrapper.className = "family-member-field";
        wrapper.innerHTML = `<span>${escapeHtml(t("Integrante"))} ${index + 1}</span><input type="text" autocomplete="name" placeholder="${escapeAttribute(t("Nombre completo"))}" value="${escapeAttribute(existingNames[index] || "")}">`;
        familyMembersList.appendChild(wrapper);
      }
    }

    function getFamilyMemberNames() {
      return Array.from(familyMembersList.querySelectorAll("input")).map((input) => input.value.trim());
    }

    function getAdultChildBreakdown({ count, familyMode }) {
      if (INVITATION_CONFIG.rsvp?.adultChildCountEnabled !== true) return null;
      const personalization = getRsvpPersonalization();
      const usesSelectedTotal = rsvpUsesSelectedTotal(personalization, familyMode);
      if (usesSelectedTotal) {
        if (!count) return null;
        const total = resolveAttendanceCount(count, familyMode);
        const children = Math.min(total, Math.max(0, Number(childCount?.value) || 0));
        return { adults: Math.max(0, total - children), children, total };
      }
      const adults = Math.max(0, Number(adultCount?.value) || 0);
      const children = Math.max(0, Number(childCount?.value) || 0);
      const total = adults + children;
      return total > 0 ? { adults, children, total } : null;
    }

    function formatAdultChildBreakdown(breakdown) {
      if (!breakdown) return "";
      if (isEnglish()) {
        return [
          `Adults: ${breakdown.adults}`,
          `Children: ${breakdown.children}`
        ].join("\n");
      }
      return [
        `Adultos: ${breakdown.adults}`,
        `Niños: ${breakdown.children}`
      ].join("\n");
    }

    function getRsvpPersonalization() {
      if (rsvpValidatedPersonalization?.active) return rsvpValidatedPersonalization;
      const previewMode = document.documentElement.classList.contains("preview-embed");
      const params = new URLSearchParams(window.location.search);
      if (INVITATION_CONFIG.rsvp.dynamicPassesEnabled === true) {
        const accessCode = String(
          params.get("acceso")
          || params.get("pase")
          || params.get("rsvp")
          || (previewMode ? INVITATION_CONFIG.rsvp.previewDynamicAccess : "")
          || ""
        ).toUpperCase().replace(/[^A-Z0-9_-]/g, "").slice(0, 24);
        const match = INVITATION_CONFIG.rsvp.dynamicPasses.find((item) => item.code === accessCode);
        return {
          active: Boolean(match),
          recipient: "",
          passes: match?.passes || 0,
          code: accessCode,
          dynamic: true,
          source: match ? "dynamic" : ""
        };
      }
      if (INVITATION_CONFIG.rsvp.personalizedPassesEnabled !== true && INVITATION_CONFIG.rsvp.dynamicPassesEnabled !== true) {
        return { active: false, recipient: "", passes: 0 };
      }
      const recipient = String(params.get("para") || (previewMode ? INVITATION_CONFIG.rsvp.previewRecipient : "") || "").trim().slice(0, 120);
      const parsedPasses = Number.parseInt(params.get("pases") || (previewMode ? INVITATION_CONFIG.rsvp.previewPasses : "") || "", 10);
      const passes = Number.isFinite(parsedPasses) ? Math.max(1, Math.min(100, parsedPasses)) : 0;
      const code = String(params.get("codigo") || params.get("id") || params.get("token") || "").trim().slice(0, 80);
      return { active: Boolean(recipient && passes), recipient, passes, code };
    }

    function isFamilyRsvp(personalization = getRsvpPersonalization()) {
      return personalization.dynamic !== true && INVITATION_CONFIG.rsvp.familyMode === true;
    }

    function requiresRsvpInviteValidation() {
      const cfg = INVITATION_CONFIG.rsvp?.firebase || {};
      return (INVITATION_CONFIG.rsvp.personalizedPassesEnabled === true || INVITATION_CONFIG.rsvp.dynamicPassesEnabled === true)
        && cfg.enabled === true
        && cfg.validateInvites === true;
    }

    function scheduleRsvpValidation() {
      rsvpValidationObserver?.disconnect();
      rsvpValidationObserver = null;
      rsvpValidationScheduled = false;
      if (!requiresRsvpInviteValidation() || document.documentElement.classList.contains("preview-embed")) {
        validateRsvpAccess();
        return;
      }
      const section = document.getElementById("rsvpSection");
      if (!section || typeof IntersectionObserver !== "function") {
        window.setTimeout(validateRsvpAccess, 1200);
        return;
      }
      rsvpValidationScheduled = true;
      rsvpValidationObserver = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        rsvpValidationObserver?.disconnect();
        rsvpValidationObserver = null;
        rsvpValidationScheduled = false;
        validateRsvpAccess();
      }, { rootMargin: "700px 0px", threshold: 0.01 });
      rsvpValidationObserver.observe(section);
    }

    function setRsvpBlocked(message, detail = "Este enlace no contiene los datos necesarios o ya no está registrado para este evento.") {
      if (!rsvpInvalidNotice) return;
      rsvpValidatedPersonalization = null;
      rsvpCard.hidden = true;
      rsvpReceipt.hidden = true;
      rsvpPersonalization.hidden = true;
      rsvpInvalidNotice.hidden = false;
      const title = rsvpInvalidNotice.querySelector("strong");
      const text = rsvpInvalidNotice.querySelector("p");
      if (title) title.textContent = t(message || INVITATION_CONFIG.rsvp.firebase.invalidInviteMessage);
      if (text) text.textContent = t(detail);
    }

    function clearRsvpBlocked() {
      if (rsvpInvalidNotice) rsvpInvalidNotice.hidden = true;
    }

    function applyValidatedRsvpPersonalization(personalization) {
      rsvpValidatedPersonalization = personalization;
      guestCount.dataset.pases = String(personalization.passes || 1);
      guestName.value = personalization.recipient || "";
      rsvpPersonalization.hidden = false;
      rsvpPersonalization.classList.toggle("is-dynamic", personalization.dynamic === true);
      rsvpPersonalizationRecipient.textContent = personalization.dynamic
        ? getDynamicRsvpGreeting(personalization.passes)
        : personalization.recipient;
      rsvpPersonalizationText.textContent = personalization.dynamic
        ? ""
        : formatReservedPassesText(personalization);
      rsvpPersonalizationText.hidden = personalization.dynamic === true;
      rsvpPersonalizationPasses.textContent = passLabel(personalization.passes);
      rsvpPersonalization.querySelector(".rsvp-personalization__eyebrow").textContent = personalization.dynamic
        ? t("Con mucho cariño")
        : t("Invitación preparada especialmente para");
      rsvpPersonalization.querySelector(".rsvp-personalization__passes span").textContent = personalization.dynamic
        ? t("Cupo reservado")
        : t("Cupo reservado");
      populateGuestOptions();
      showRsvpForm();
    }

    async function validateRsvpAccess() {
      const run = ++rsvpValidationRun;
      if (INVITATION_CONFIG.rsvp.personalizedPassesEnabled !== true && INVITATION_CONFIG.rsvp.dynamicPassesEnabled !== true) {
        clearRsvpBlocked();
        return;
      }
      const personalization = getRsvpPersonalization();
      const invalidMessage = INVITATION_CONFIG.rsvp.firebase?.invalidInviteMessage || "Solicita una invitación válida para poder confirmar.";
      if (!personalization.active) {
        setRsvpBlocked(invalidMessage);
        return;
      }
      if (!requiresRsvpInviteValidation() || document.documentElement.classList.contains("preview-embed")) {
        clearRsvpBlocked();
        return;
      }
      if (!personalization.code) {
        setRsvpBlocked(invalidMessage, "Este enlace no contiene un código de invitación válido.");
        return;
      }
      const db = await getRsvpFirestore();
      if (!db) {
        setRsvpBlocked("No fue posible validar esta invitación.", "Intenta nuevamente más tarde o solicita apoyo al anfitrión.");
        return;
      }
      setRsvpBlocked("Validando invitación...", "Estamos revisando que este enlace corresponda al evento.");
      try {
        const cfg = INVITATION_CONFIG.rsvp.firebase;
        const snapshot = await db.collection(cfg.collectionRoot)
          .doc(cfg.eventId)
          .collection("invitados")
          .doc(personalization.code)
          .get();
        if (run !== rsvpValidationRun) return;
        if (!snapshot.exists) {
          setRsvpBlocked(invalidMessage);
          return;
        }
        const data = snapshot.data() || {};
        if (data.active === false) {
          setRsvpBlocked("Esta invitación ya no está activa.", "Solicita apoyo al anfitrión para confirmar tu asistencia.");
          return;
        }
        const dynamicAccess = personalization.dynamic === true;
        const recipient = String(data.recipient || data.para || data.name || "").trim().slice(0, 120);
        const passes = Math.max(1, Math.min(100, Number.parseInt(data.passes || data.pases || "", 10) || 0));
        if ((!dynamicAccess && !recipient) || !passes || (dynamicAccess && passes !== personalization.passes)) {
          setRsvpBlocked(invalidMessage);
          return;
        }
        const currentStatus = String(data.status || "sent");
        const openUpdate = {
          lastOpenedAt: window.firebase.firestore.FieldValue.serverTimestamp()
        };
        if (!["confirmed", "declined"].includes(currentStatus)) {
          openUpdate.status = "opened";
          openUpdate.openedAt = window.firebase.firestore.FieldValue.serverTimestamp();
        }
        db.collection(cfg.collectionRoot)
          .doc(cfg.eventId)
          .collection("invitados")
          .doc(personalization.code)
          .set(openUpdate, { merge: true })
          .catch((error) => console.warn("No se pudo marcar apertura RSVP.", error));
        clearRsvpBlocked();
        applyValidatedRsvpPersonalization({
          active: true,
          recipient: dynamicAccess ? "" : recipient,
          passes,
          code: personalization.code,
          dynamic: dynamicAccess,
          source: "firebase"
        });
      } catch (error) {
        console.warn("No se pudo validar la invitación RSVP.", error);
        if (run === rsvpValidationRun) {
          setRsvpBlocked("No fue posible validar esta invitación.", "Intenta nuevamente más tarde o solicita apoyo al anfitrión.");
        }
      }
    }

    function formatReservedPassesText(personalization) {
      const reserved = passLabel(personalization.passes);
      const template = isEnglish() && (INVITATION_CONFIG.rsvp.reservedPassesText || DEFAULT_RESERVED_PASSES_TEXT) === DEFAULT_RESERVED_PASSES_TEXT
        ? "We will be delighted to share this moment with you."
        : (INVITATION_CONFIG.rsvp.reservedPassesText || DEFAULT_RESERVED_PASSES_TEXT);
      return template
        .replaceAll("{destinatario}", personalization.recipient)
        .replaceAll("{reservados}", reserved);
    }

    function getDynamicRsvpGreeting(passes) {
      const total = Math.max(1, Number.parseInt(passes, 10) || 1);
      if (isEnglish()) {
        return total === 1
          ? "We will be delighted to share this moment with you."
          : "We will be delighted to share this moment with you all.";
      }
      return total === 1
        ? "Nos hará mucha ilusión compartir este momento contigo."
        : "Nos hará mucha ilusión compartir este momento con ustedes.";
    }

    function escapeAttribute(value) {
      return String(value || "").replace(/[&<>"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character]));
    }

    function setCountdownCaption(fallbackText) {
      if (!countdownCaption) return;
      const text = String(INVITATION_CONFIG.countdown?.caption || "").trim();
      const displayText = text || fallbackText || "";
      countdownCaption.textContent = t(displayText);
      countdownCaption.hidden = !displayText;
    }

    function placeCountdownDateCard(style) {
      if (!countdownDateCard) return;
      const countdownTitle = document.getElementById("countdownTitle");
      const countdownShell = countdownEl?.closest(".countdown-shell");
      if (style === "date-card" && countdownTitle?.parentElement) {
        countdownTitle.parentElement.insertBefore(countdownDateCard, countdownTitle);
        return;
      }
      if (countdownShell && countdownEl && countdownDateCard.parentElement !== countdownShell) {
        countdownShell.insertBefore(countdownDateCard, countdownEl);
      }
    }

    function renderCountdownDateCard() {
      if (!countdownDateCard) return;
      const style = normalizeCountdownStyle(INVITATION_CONFIG.countdown?.style);
      placeCountdownDateCard(style);
      const visible = INVITATION_CONFIG.countdown?.dateDisplayEnabled === true;
      const validDate = !Number.isNaN(EVENT_DATE.getTime());
      countdownDateCard.hidden = !visible || !validDate;
      if (!visible || !validDate) return;
      const dateParts = new Intl.DateTimeFormat(isEnglish() ? "en-US" : "es-MX", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: INVITATION_CONFIG.event.timeZone || "America/Mexico_City"
      }).formatToParts(EVENT_DATE);
      const part = (type) => dateParts.find((item) => item.type === type)?.value || "";
      if (countdownDateMonth) countdownDateMonth.textContent = part("month").toUpperCase();
      if (countdownDateWeekday) countdownDateWeekday.textContent = part("weekday").toUpperCase();
      if (countdownDateDay) {
        const day = part("day");
        const suffix = eventDaySuffix(day);
        countdownDateDay.innerHTML = `${escapeHtml(day)}${suffix ? `<sup>${escapeHtml(suffix)}</sup>` : ""}`;
      }
      if (countdownDateYear) countdownDateYear.textContent = part("year");
    }

    function updateCountdown() {
      renderCountdownDateCard();
      if (Number.isNaN(EVENT_DATE.getTime())) {
        countdownEl.innerHTML = [
          ["--", t("Días")],
          ["--", t("Horas")],
          ["--", t("Min")],
          ["--", t("Seg")]
        ].map(([value, label]) => `
          <div class="count-box">
            <strong>${value}</strong>
            <span>${label}</span>
          </div>
        `).join("");
        setCountdownCaption(t("Fecha por definir."));
        previousParts = [];
        return;
      }

      const now = new Date();
      const diff = EVENT_DATE - now;
      const militaryMode = INVITATION_CONFIG.theme.styleMode === "military";
      const spaceMode = ["space-ranger", "military"].includes(INVITATION_CONFIG.theme.styleMode);

      if (diff <= 0) {
        const ended = [
          ["00", t("Días")],
          ["00", t("Horas")],
          ["00", t("Min")],
          ["00", t("Seg")]
        ];
        countdownEl.innerHTML = ended.map(([value, label]) => `
          <div class="count-box tick">
            <strong>${value}</strong>
            <span>${label}</span>
          </div>
        `).join("");
        setCountdownCaption(militaryMode
          ? t("Objetivo cumplido. El escuadrón ya está reunido.")
          : t("Gracias por formar parte de este momento."));
        previousParts = ended.map(([value]) => value);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      const parts = spaceMode
        ? [
          [String(days), "Días", "D-"],
          [String(hours).padStart(2, "0"), "Horas", "H-"],
          [String(minutes).padStart(2, "0"), "Min", "M-"],
          [String(seconds).padStart(2, "0"), "Seg", "S-"]
        ]
        : [
          [String(days), "Días", ""],
          [String(hours).padStart(2, "0"), "Horas", ""],
          [String(minutes).padStart(2, "0"), "Min", ""],
          [String(seconds).padStart(2, "0"), "Seg", ""]
        ];

      countdownEl.innerHTML = parts.map(([value, label, code]) => `
        <div class="count-box">
          ${code ? `<em>${code}</em>` : ""}
          <strong>${value}</strong>
          <span>${t(label)}</span>
        </div>
      `).join("");

      Array.from(countdownEl.querySelectorAll(".count-box")).forEach((box, index) => {
        if (!previousParts.length || previousParts[index] !== parts[index][0]) {
          box.classList.add("tick");
        }
      });

      previousParts = parts.map(([value]) => value);

      if (militaryMode && days > 30) {
        setCountdownCaption(t("Operación programada. La unidad inicia preparativos."));
      } else if (militaryMode && days > 7) {
        setCountdownCaption(t("La fecha señalada se aproxima. Todo marcha según el plan."));
      } else if (militaryMode && days > 0) {
        setCountdownCaption(t("Formación final. El escuadrón está por reunirse."));
      } else if (militaryMode) {
        setCountdownCaption(t("Día de celebración. Presentarse en el punto de encuentro."));
      } else if (spaceMode && days > 30) {
        setCountdownCaption(t("La nave ya está en preparación para el gran despegue."));
      } else if (spaceMode && days > 7) {
        setCountdownCaption(t("La misión está cada vez más cerca."));
      } else if (spaceMode && days > 0) {
        setCountdownCaption(t("Entramos en la recta final de lanzamiento."));
      } else if (spaceMode) {
        setCountdownCaption(t("Todo está listo para despegar."));
      } else if (days > 30) {
        setCountdownCaption(t("Cada día suma emoción para esta noche especial."));
      } else if (days > 7) {
        setCountdownCaption(t("La emoción empieza a sentirse cada vez más cerca."));
      } else if (days > 0) {
        setCountdownCaption(t("Entramos en la recta final para celebrar en grande."));
      } else {
        setCountdownCaption(t("Todo está listo para una noche inolvidable."));
      }
    }

    function revealOnScroll() {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 1;
      const topHasEnteredViewport = (element, visibleRatio = 0.14, bottomRatio = 0.06) => {
        const rect = element.getBoundingClientRect();
        return rect.top < viewportHeight * (1 - visibleRatio) && rect.bottom > viewportHeight * bottomRatio;
      };

      document.querySelectorAll(".section").forEach((section) => {
        if (topHasEnteredViewport(section, 0.14, 0.06)) {
          section.classList.add("show");
        }
      });

      const timelineItems = document.querySelectorAll(".timeline-item");
      timelineItems.forEach((item, index) => {
        if (topHasEnteredViewport(item, 0.14, 0.04)) {
          setTimeout(() => item.classList.add("show"), index * 120);
        }
      });

      document.querySelectorAll(".separator.reveal-effect-enabled").forEach((separator) => {
        if (topHasEnteredViewport(separator, 0.12, 0.04)) {
          separator.classList.add("show");
        }
      });

      document.querySelectorAll(".section.reveal-effect-enabled.show .section-reveal-item").forEach((item) => {
        if (item.classList.contains("is-revealed")) return;
        if (item.hidden || item.closest("[hidden]")) return;
        if (topHasEnteredViewport(item, 0.18, 0.04)) {
          item.classList.add("is-revealed");
        }
      });

      if (!storyStarted && storySection && topHasEnteredViewport(storySection, 0.16, 0.08)) {
        storyStarted = true;
        typeStoryParagraphs();
      }
    }

    function typeText(element, text, speed = 20) {
      return new Promise((resolve) => {
        let index = 0;
        element.textContent = "";
        element.classList.add("is-typing");

        function step() {
          if (index < text.length) {
            element.textContent += text.charAt(index);
            index += 1;
            setTimeout(step, speed);
          } else {
            element.classList.remove("is-typing");
            resolve();
          }
        }

        step();
      });
    }

    async function typeStoryParagraphs() {
      for (const paragraph of storyParagraphs) {
        if (paragraph.hidden) continue;
        const fullText = paragraph.dataset.fulltext || "";
        await typeText(paragraph, fullText, 18);
        await new Promise((resolve) => setTimeout(resolve, 220));
      }
    }

    function showToast(message) {
      toast.textContent = message;
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toast.classList.remove("show");
      }, 2200);
    }

    function shouldShowMusicButton(agendaVisible) {
      if (!musicBtn || INVITATION_CONFIG.audio?.showControl === false) return false;
      if (!overlay.classList.contains("hidden")) return false;
      if ((window.scrollY || document.documentElement.scrollTop || 0) < 96) return false;
      if (agendaVisible) return false;
      return true;
    }

    function updateFloatingButtons() {
      const shouldShow = window.scrollY > 420;
      const agendaVisible = agendaSection && getComputedStyle(agendaSection).display !== "none";
      const agendaTop = agendaVisible ? agendaSection.getBoundingClientRect().top : Number.POSITIVE_INFINITY;
      const isAtAgenda = agendaTop < window.innerHeight * 0.78;

      toTopBtn.classList.toggle("show", shouldShow && !isAtAgenda);
      musicBtn.classList.toggle("show", shouldShowMusicButton(isAtAgenda));
    }

	    function updateAppleHeroScroll() {
	      if (!heroSection) return;
	      const enabled = INVITATION_CONFIG.theme?.appleHeroScrollEnabled !== false;
	      document.documentElement.classList.toggle("apple-hero-scroll", enabled);
	      if (!enabled) {
	      [
          "--apple-hero-media-scale",
	          "--apple-hero-media-y",
	          "--apple-hero-media-opacity",
	          "--apple-hero-media-blur",
	          "--apple-hero-media-mask-start",
	          "--apple-hero-media-mask-end",
	          "--apple-hero-content-scale",
          "--apple-hero-content-y",
          "--apple-hero-content-opacity",
          "--hero-scroll-hint-apple-opacity",
          "--apple-hero-content-blur",
          "--apple-hero-overlay-opacity",
          "--hero-readable-gradient-opacity",
          "--apple-hero-light-opacity",
          "--apple-hero-light-scale",
          "--apple-hero-light-y"
	        ].forEach((property) => heroSection.style.removeProperty(property));
	        return;
	      }
	      const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true;
	      const openingVisible = overlay && !overlay.classList.contains("hidden");
	      const visualViewport = window.visualViewport;
	      const viewportWidth = Math.max(
	        1,
	        visualViewport?.width || 0,
	        window.innerWidth || 0,
	        document.documentElement.clientWidth || 0
	      );
	      const viewportHeight = Math.max(
	        1,
	        visualViewport?.height || 0,
	        window.innerHeight || 0,
	        document.documentElement.clientHeight || 0
	      );
	      const compactViewport = viewportWidth < 560;
	      const tabletViewport = viewportWidth >= 560 && viewportWidth < 1024;
	      const heroHeight = Math.max(heroSection.offsetHeight || 0, viewportHeight);
	      const scrollRange = heroHeight * (compactViewport ? 1.02 : tabletViewport ? 1.08 : 1.14);
	      const mediaZoomAmount = compactViewport ? 0.4 : tabletViewport ? 0.35 : 0.3;
	      const mediaLiftAmount = compactViewport ? 44 : tabletViewport ? 52 : 60;
	      const mediaBlurAmount = compactViewport ? 1.8 : tabletViewport ? 1.65 : 1.45;
	      const contentScaleAmount = compactViewport ? 0.48 : tabletViewport ? 0.38 : 0.3;
	      const contentLiftAmount = compactViewport ? 108 : tabletViewport ? 92 : 78;
	      const contentBlurAmount = compactViewport ? 6 : tabletViewport ? 5.2 : 4.4;
	      const textStart = compactViewport ? 0.18 : tabletViewport ? 0.2 : 0.22;
	      const textDuration = compactViewport ? 0.58 : tabletViewport ? 0.56 : 0.54;
	      const edgeStart = compactViewport ? 0.66 : tabletViewport ? 0.67 : 0.69;
	      const edgeDuration = compactViewport ? 0.22 : tabletViewport ? 0.21 : 0.2;
	      const finalStart = compactViewport ? 0.75 : tabletViewport ? 0.76 : 0.78;
	      const rawProgress = reduceMotion || openingVisible
	        ? 0
	        : Math.min(1, Math.max(0, window.scrollY / scrollRange));
	      const smoothProgress = rawProgress * rawProgress * rawProgress * (rawProgress * (rawProgress * 6 - 15) + 10);
	      const mediaEase = 1 - Math.pow(1 - smoothProgress, 2.4);
	      const textProgress = Math.min(1, Math.max(0, (rawProgress - textStart) / textDuration));
	      const textEase = textProgress * textProgress * (3 - 2 * textProgress);
	      const mediaFadeProgress = Math.min(1, Math.max(0, (rawProgress - 0.1) / 0.78));
	      const mediaFade = mediaFadeProgress * mediaFadeProgress * (3 - 2 * mediaFadeProgress);
	      const edgeFadeProgress = Math.min(1, Math.max(0, (rawProgress - edgeStart) / edgeDuration));
	      const edgeFade = edgeFadeProgress * edgeFadeProgress * (3 - 2 * edgeFadeProgress);
	      const lightEase = 1 - Math.pow(1 - Math.min(1, rawProgress / 0.9), 2);
	      const lightExitProgress = Math.min(1, Math.max(0, (rawProgress - 0.52) / 0.36));
	      const lightExit = lightExitProgress * lightExitProgress * (3 - 2 * lightExitProgress);
	      const finalExitProgress = Math.min(1, Math.max(0, (rawProgress - finalStart) / (1 - finalStart)));
	      const finalVisibility = 1 - finalExitProgress * finalExitProgress * (3 - 2 * finalExitProgress);
	      const lightOpacity = lightEase * Math.pow(1 - lightExit, 1.8);
	      const contentOpacity = Math.max(0, (1 - textEase * 0.96) * finalVisibility);
	      const mediaOpacity = Math.max(0, Math.max(0.28, 1 - mediaFade * 0.72) * finalVisibility);
	      const readableGradientOpacity = Math.max(0, (1 - mediaFade * 0.7) * finalVisibility);

	      heroSection.style.setProperty("--apple-hero-media-scale", (1.03 + mediaEase * mediaZoomAmount).toFixed(3));
	      heroSection.style.setProperty("--apple-hero-media-y", `${(-mediaLiftAmount * mediaEase).toFixed(2)}px`);
	      heroSection.style.setProperty("--apple-hero-media-opacity", mediaOpacity.toFixed(3));
	      heroSection.style.setProperty("--apple-hero-media-blur", `${(mediaFade * mediaBlurAmount).toFixed(2)}px`);
	      heroSection.style.setProperty("--apple-hero-media-mask-start", `${(100 - edgeFade * 55).toFixed(2)}%`);
	      heroSection.style.setProperty("--apple-hero-media-mask-end", `${(112 - edgeFade * 20).toFixed(2)}%`);
	      heroSection.style.setProperty("--apple-hero-content-scale", (1 + textEase * contentScaleAmount).toFixed(3));
      heroSection.style.setProperty("--apple-hero-content-y", `${(-contentLiftAmount * textEase).toFixed(2)}px`);
      heroSection.style.setProperty("--apple-hero-content-opacity", contentOpacity.toFixed(3));
      heroSection.style.setProperty("--hero-scroll-hint-apple-opacity", contentOpacity.toFixed(3));
      heroSection.style.setProperty("--apple-hero-content-blur", `${(textEase * contentBlurAmount).toFixed(2)}px`);
	      heroSection.style.setProperty("--apple-hero-overlay-opacity", Math.max(0, Math.max(0.02, 1 - mediaFade * 0.98) * finalVisibility).toFixed(3));
	      heroSection.style.setProperty("--hero-readable-gradient-opacity", readableGradientOpacity.toFixed(3));
	      heroSection.style.setProperty("--apple-hero-light-opacity", (lightOpacity * 0.58 * finalVisibility).toFixed(3));
	      heroSection.style.setProperty("--apple-hero-light-scale", (1 + lightEase * 0.52).toFixed(3));
	      heroSection.style.setProperty("--apple-hero-light-y", `${(-44 * lightEase).toFixed(2)}px`);
	    }

    function renderThumbs() {
      if (!galleryItems.length) {
        thumbs.innerHTML = "";
        return;
      }
      thumbs.innerHTML = "";
      galleryItems.forEach((item, index) => {
        const thumb = document.createElement("button");
        thumb.type = "button";
        thumb.className = "thumb-item";
        thumb.classList.toggle("active", index === currentIndex);
        thumb.setAttribute("aria-label", `${t("Ver")} ${item.alt}`);
        const media = createGalleryMedia(item, { autoplay: false });
        media.removeAttribute("class");
        thumb.appendChild(media);
        if (item.type === "video") {
          const badge = document.createElement("span");
          badge.className = "thumb-video-badge";
          badge.setAttribute("aria-hidden", "true");
          thumb.appendChild(badge);
        }
        thumb.addEventListener("click", () => {
          currentIndex = index;
          updateLightbox();
        });
        thumbs.appendChild(thumb);
      });
    }

    function clampZoomOffsets() {
      const maxOffsetX = ((zoomScale - 1) * lightboxMain.clientWidth) / 2;
      const maxOffsetY = ((zoomScale - 1) * lightboxMain.clientHeight) / 2;
      zoomX = Math.max(-maxOffsetX, Math.min(maxOffsetX, zoomX));
      zoomY = Math.max(-maxOffsetY, Math.min(maxOffsetY, zoomY));
    }

    function applyImageZoom() {
      if (lightboxMain.classList.contains("is-video")) return;
      clampZoomOffsets();
      lightboxImg.style.transform = `translate3d(${zoomX}px, ${zoomY}px, 0) scale(${zoomScale})`;
      lightboxMain.classList.toggle("is-zoomed", zoomScale > 1.01);
    }

    function resetImageZoom(animate = false) {
      zoomScale = 1;
      zoomX = 0;
      zoomY = 0;
      if (animate) {
        lightboxImg.style.transition = "opacity 0.25s ease, transform 0.25s ease, filter 0.25s ease";
      }
      applyImageZoom();
      if (animate) {
        setTimeout(() => {
          lightboxImg.style.transition = "opacity 0.25s ease, transform 0.25s ease, filter 0.25s ease";
        }, 260);
      }
    }

    function getTouchDistance(touches) {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.hypot(dx, dy);
    }

    function updateGalleryPreview(index) {
      if (!galleryItems.length) return;
      galleryPreviewHydrated = true;
      galleryPreviewLoadObserver?.disconnect();
      galleryPreviewLoadObserver = null;
      previewIndex = (index + galleryItems.length) % galleryItems.length;
      const activeItem = galleryItems[previewIndex];
      const isVideo = activeItem.type === "video";

      galleryPreviewImg.style.opacity = "0";
      galleryPreviewImg.style.transform = "scale(0.97)";
      if (galleryPreviewVideo) {
        galleryPreviewVideo.style.opacity = "0";
        galleryPreviewVideo.style.transform = "scale(0.97)";
        galleryPreviewVideo.pause();
      }

      if (isVideo && galleryPreviewVideo) {
        galleryPreviewImg.hidden = true;
        galleryPreviewVideo.hidden = false;
        configureInlineVideo(galleryPreviewVideo, activeItem.src, {
          controls: true,
          muted: false,
          loop: false,
          preload: "metadata",
          autoplay: overlay.classList.contains("hidden")
        });
      } else {
        if (galleryPreviewVideo) {
          galleryPreviewVideo.hidden = true;
          galleryPreviewVideo.removeAttribute("src");
          galleryPreviewVideo.load();
        }
        galleryPreviewImg.hidden = false;
        galleryPreviewImg.src = activeItem.src;
        galleryPreviewImg.alt = activeItem.alt || `Galería ${previewIndex + 1}`;
      }
      galleryMetaIndex.textContent = `${mediaLabel(activeItem.type)} ${previewIndex + 1} ${isEnglish() ? "of" : "de"} ${galleryItems.length}`;
      galleryMetaHint.textContent = isEnglish() ? "Use the arrows or tap a thumbnail to explore." : "Usa las flechas o toca una miniatura para explorar.";

      galleryItems.forEach((item, imageIndex) => {
        item.element?.classList.toggle("is-active", imageIndex === previewIndex);
      });

      requestAnimationFrame(() => {
        const activeNode = isVideo ? galleryPreviewVideo : galleryPreviewImg;
        if (!activeNode) return;
        activeNode.style.opacity = "1";
        activeNode.style.transform = "scale(1)";
      });
    }

    function updateLightbox() {
      if (!galleryItems.length) return;
      const activeItem = galleryItems[currentIndex];
      const isVideo = activeItem.type === "video";
      resetImageZoom();
      lightboxMain.classList.toggle("is-video", isVideo);
      lightboxImg.style.opacity = "0";
      lightboxImg.style.transform = "translate3d(0, 0, 0) scale(0.97)";
      if (lightboxVideo) {
        lightboxVideo.style.opacity = "0";
        lightboxVideo.pause();
      }

      if (isVideo && lightboxVideo) {
        lightboxImg.hidden = true;
        lightboxVideo.hidden = false;
        configureInlineVideo(lightboxVideo, activeItem.src, { controls: true, muted: false, loop: false, preload: "metadata", autoplay: true });
      } else {
        if (lightboxVideo) {
          lightboxVideo.hidden = true;
          lightboxVideo.removeAttribute("src");
          lightboxVideo.load();
        }
        lightboxImg.hidden = false;
        lightboxImg.src = activeItem.src;
        lightboxImg.alt = activeItem.alt || "Imagen ampliada";
      }
      viewerCounter.textContent = `${currentIndex + 1} / ${galleryItems.length}`;
      Array.from(thumbs.querySelectorAll(".thumb-item")).forEach((thumb, index) => {
        thumb.classList.toggle("active", index === currentIndex);
      });
      requestAnimationFrame(() => {
        if (isVideo && lightboxVideo) {
          lightboxVideo.style.opacity = "1";
        } else {
          lightboxImg.style.opacity = "1";
          applyImageZoom();
        }
      });
    }

    function openLightbox(index) {
      if (!galleryItems.length) return;
      currentIndex = index;
      renderThumbs();
      lightbox.classList.add("show");
      lightbox.setAttribute("aria-hidden", "false");
      setScrollLocked(true);
      updateLightbox();
      closeLightbox.focus();
    }

    function closeGallery() {
      resetImageZoom();
      if (lightboxVideo) lightboxVideo.pause();
      lightbox.classList.remove("show");
      lightbox.setAttribute("aria-hidden", "true");
      if (overlay.classList.contains("hidden")) {
        setScrollLocked(false);
      }
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      updateLightbox();
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      updateLightbox();
    }

    function nextPreview() {
      updateGalleryPreview(previewIndex + 1);
    }

    function prevPreview() {
      updateGalleryPreview(previewIndex - 1);
    }

    function normalizeWhatsAppPhone(phone, countryCode = "52") {
      let digits = String(phone || "").replace(/\D/g, "");
      const cleanCountryCode = String(countryCode || "").replace(/\D/g, "");
      if (digits.startsWith("00")) digits = digits.slice(2);
      if (digits.length === 10 && cleanCountryCode) digits = `${cleanCountryCode}${digits}`;
      return digits;
    }

    function cleanRsvpContactLabel(label, fallback) {
      return String(label || fallback || "").trim().slice(0, 32) || fallback;
    }

    function formatRsvpContactPhrase(label) {
      const cleanLabel = cleanRsvpContactLabel(label, "");
      const normalized = cleanLabel.toLowerCase();
      if (isEnglish()) {
        if (normalized === "bride") return "the bride";
        if (normalized === "groom") return "the groom";
        return cleanLabel;
      }
      if (normalized === "novia") return "la novia";
      if (normalized === "novio") return "el novio";
      return cleanLabel;
    }

    function rsvpContactActionText(attending, label) {
      const cleanLabel = formatRsvpContactPhrase(label);
      if (isEnglish()) {
        return attending ? `Confirm with ${cleanLabel}` : `Notify ${cleanLabel}`;
      }
      return attending ? `Confirmar con ${cleanLabel}` : `Avisar a ${cleanLabel}`;
    }

    function getRsvpContacts() {
      const fallbackCountry = RSVP_COUNTRY_CODE || INVITATION_CONFIG.event?.rsvpCountryCode || "52";
      const primaryPhone = String(INVITATION_CONFIG.rsvp?.contact1Phone || RSVP_PHONE || "").trim();
      const contacts = [
        {
          key: "contact1",
          label: cleanRsvpContactLabel(INVITATION_CONFIG.rsvp?.contact1Label, isEnglish() ? "Bride" : "Novia"),
          phone: normalizeWhatsAppPhone(primaryPhone, INVITATION_CONFIG.rsvp?.contact1CountryCode || fallbackCountry)
        },
        {
          key: "contact2",
          label: cleanRsvpContactLabel(INVITATION_CONFIG.rsvp?.contact2Label, isEnglish() ? "Groom" : "Novio"),
          phone: normalizeWhatsAppPhone(INVITATION_CONFIG.rsvp?.contact2Phone, INVITATION_CONFIG.rsvp?.contact2CountryCode || fallbackCountry)
        }
      ].filter((contact) => contact.phone);
      return contacts;
    }

    function getDefaultRsvpTarget() {
      return {
        key: "primary",
        label: "",
        phone: normalizeWhatsAppPhone(RSVP_PHONE, RSVP_COUNTRY_CODE)
      };
    }

    function renderRsvpContactButtons() {
      if (!rsvpContactButtons) return;
      const contacts = INVITATION_CONFIG.rsvp?.dualContactEnabled === true ? getRsvpContacts() : [];
      const showChoices = contacts.length > 1;
      rsvpContactButtons.hidden = !showChoices;
      rsvpContactButtons.innerHTML = "";
      if (confirmYes?.parentElement) confirmYes.parentElement.hidden = showChoices;
      if (!showChoices) return;
      contacts.forEach((contact) => {
        const confirmButton = document.createElement("button");
        confirmButton.type = "button";
        confirmButton.dataset.rsvpAction = "confirm";
        confirmButton.dataset.rsvpContactKey = contact.key;
        confirmButton.textContent = rsvpContactActionText(true, contact.label);
        rsvpContactButtons.appendChild(confirmButton);
      });
    }

    function rsvpReceiptStorageKey() {
      const personalization = getRsvpPersonalization();
      const identity = [
        window.location.pathname,
        INVITATION_CONFIG.meta?.pageTitle || "",
        personalization.recipient,
        personalization.passes
      ].join("|");
      let hash = 2166136261;
      for (let index = 0; index < identity.length; index += 1) {
        hash ^= identity.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
      }
      return `${RSVP_RECEIPT_KEY_PREFIX}:${(hash >>> 0).toString(36)}`;
    }

    function resolveAttendanceCount(count, familyMode) {
      const numericCount = Number.parseInt(count, 10);
      if (Number.isFinite(numericCount)) return Math.max(1, numericCount);
      if (familyMode) return 1;
      if (count === "Asistiré solo") return 1;
      const companions = Number.parseInt(String(count || "").match(/\d+/)?.[0] || "0", 10);
      return Math.max(1, companions + 1);
    }

    function createConfirmationFolio() {
      const alphabet = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
      const randomBytes = new Uint8Array(10);
      crypto.getRandomValues(randomBytes);
      const token = Array.from(randomBytes, (byte) => alphabet[byte & 31]).join("");
      return `DI-${token.slice(0, 5)}-${token.slice(5)}`;
    }

    function buildConfirmationQrPayload(receipt) {
      const attendees = Array.isArray(receipt.memberNames) ? receipt.memberNames.filter(Boolean) : [];
      const breakdownText = formatAdultChildBreakdown(receipt.breakdown);
      return [
        t("Confirmación de asistencia"),
        "",
        receipt.name,
        receipt.count === 1 ? `1 ${t("persona confirmada")}` : `${receipt.count} ${t("personas confirmadas")}`,
        ...(breakdownText ? ["", breakdownText] : []),
        ...(attendees.length ? ["", ...attendees] : []),
        ...(receipt.event ? ["", receipt.event] : []),
        "",
        receipt.folio
      ].join("\n");
    }

    async function getRsvpFirestore() {
      const cfg = INVITATION_CONFIG.rsvp?.firebase || {};
      const hasBaseConfig = cfg.enabled === true
        && cfg.apiKey
        && cfg.authDomain
        && cfg.projectId
        && cfg.appId;
      if (!hasBaseConfig) return null;
      if (rsvpFirestore) return rsvpFirestore;
      const loaded = await ensureFirebaseLibraries();
      if (!loaded) return null;
      const appName = `digital-invita-rsvp-${cfg.projectId}`;
      try {
        rsvpFirebaseApp = window.firebase.apps.find((app) => app.name === appName)
          || window.firebase.initializeApp({
            apiKey: cfg.apiKey,
            authDomain: cfg.authDomain,
            projectId: cfg.projectId,
            appId: cfg.appId
          }, appName);
        rsvpFirestore = rsvpFirebaseApp.firestore();
        return rsvpFirestore;
      } catch (error) {
        console.warn("No se pudo inicializar Firebase RSVP.", error);
        return null;
      }
    }

    function buildRsvpFirebaseRecord({ attending, name, count, familyMode, memberNames, eventCopy, message, receipt, targetContact, breakdown }) {
      const personalization = getRsvpPersonalization();
      const totalCount = breakdown?.total || resolveAttendanceCount(count, familyMode);
      return {
        attending: Boolean(attending),
        name: String(name || "").trim(),
        mode: familyMode ? "family" : "personal",
        count: totalCount,
        adults: breakdown?.adults ?? null,
        children: breakdown?.children ?? null,
        memberNames: Array.isArray(memberNames) ? memberNames.filter(Boolean) : [],
        personalized: personalization.active,
        recipient: personalization.recipient || "",
        reservedPasses: personalization.passes || 0,
        event: eventCopy.celebrationText || eventCopy.eventHeader || "",
        message,
        sentToLabel: targetContact?.label || "",
        sentToPhone: targetContact?.phone || "",
        folio: receipt?.folio || "",
        confirmedAt: receipt?.confirmedAt || new Date().toISOString(),
        userAgent: navigator.userAgent || "",
        page: window.location.href.split("#")[0]
      };
    }

    async function saveRsvpConfirmationToFirebase(payload) {
      const db = await getRsvpFirestore();
      if (!db) return false;
      const cfg = INVITATION_CONFIG.rsvp.firebase;
      const record = {
        ...payload,
        createdAt: window.firebase.firestore.FieldValue.serverTimestamp()
      };
      try {
        await db.collection(cfg.collectionRoot)
          .doc(cfg.eventId)
          .collection("confirmaciones")
          .add(record);
        const personalization = getRsvpPersonalization();
        if (personalization.code) {
          await db.collection(cfg.collectionRoot)
            .doc(cfg.eventId)
            .collection("invitados")
            .doc(personalization.code)
            .set({
              status: payload.attending ? "confirmed" : "declined",
              attending: payload.attending,
              confirmedAt: payload.attending ? window.firebase.firestore.FieldValue.serverTimestamp() : null,
              declinedAt: payload.attending ? null : window.firebase.firestore.FieldValue.serverTimestamp(),
              lastResponseAt: window.firebase.firestore.FieldValue.serverTimestamp(),
              responseName: payload.name,
              responseCount: payload.count,
              responseAdults: payload.adults,
              responseChildren: payload.children,
              folio: payload.folio || ""
            }, { merge: true });
        }
        return true;
      } catch (error) {
        console.warn("No se pudo guardar la confirmación RSVP en Firebase.", error);
        return false;
      }
    }

    function saveRsvpReceipt(receipt) {
      if (document.documentElement.classList.contains("preview-embed")) return;
      writeStorageItem(rsvpReceiptStorageKey(), JSON.stringify(receipt));
    }

    function clearRsvpReceipt() {
      if (!document.documentElement.classList.contains("preview-embed")) {
        try {
          localStorage.removeItem(rsvpReceiptStorageKey());
        } catch {}
      }
      activeRsvpReceipt = null;
    }

    function restoreRsvpReceipt() {
      if (INVITATION_CONFIG.rsvp.advancedConfirmationEnabled !== true) {
        activeRsvpReceipt = null;
        showRsvpForm();
        return;
      }
      if (document.documentElement.classList.contains("preview-embed")) {
        if (!activeRsvpReceipt) showRsvpForm();
        return;
      }
      try {
        const raw = readStorageItem(rsvpReceiptStorageKey());
        if (!raw) {
          showRsvpForm();
          return;
        }
        renderRsvpReceipt(JSON.parse(raw));
      } catch {
        clearRsvpReceipt();
        showRsvpForm();
      }
    }

    function showRsvpForm() {
      rsvpReceipt.hidden = true;
      rsvpCard.hidden = false;
      const personalization = getRsvpPersonalization();
      rsvpPersonalization.hidden = !personalization.active;
    }

    function renderRsvpReceipt(receipt) {
      if (!receipt?.folio || !receipt?.name) return;
      activeRsvpReceipt = receipt;
      rsvpCard.hidden = true;
      rsvpPersonalization.hidden = true;
      rsvpReceipt.hidden = false;
      rsvpReceiptTitle.textContent = localizedText(INVITATION_CONFIG.rsvp.receiptTitle, "¡Gracias por confirmar!", "Thank you for confirming!");
      rsvpReceiptText.textContent = localizedText(INVITATION_CONFIG.rsvp.receiptText, "Nos dará mucho gusto compartir este momento con ustedes. Nos vemos pronto.", "We will be delighted to share this moment with you. See you soon.");
      rsvpReceiptName.textContent = receipt.name;
      rsvpReceiptCount.textContent = isEnglish()
        ? receipt.count === 1 ? "1 person confirmed" : `${receipt.count} people confirmed`
        : receipt.count === 1 ? "1 persona confirmada" : `${receipt.count} personas confirmadas`;
      rsvpReceiptFolio.textContent = `${isEnglish() ? "Confirmation ID" : "Folio"} · ${receipt.folio}`;
      rsvpReceiptAttendees.innerHTML = "";
      const visibleMembers = Array.isArray(receipt.memberNames) ? receipt.memberNames.filter(Boolean) : [];
      rsvpReceiptAttendees.hidden = visibleMembers.length === 0;
      visibleMembers.forEach((memberName) => {
        const item = document.createElement("span");
        item.textContent = memberName;
        rsvpReceiptAttendees.appendChild(item);
      });

      if (typeof window.QRCodeStyling !== "function") {
        rsvpReceiptQr.textContent = t("Preparando código QR...");
        ensureQrLibrary().then((loaded) => {
          if (loaded) saveRsvpReceipt(receipt);
          else rsvpReceiptQr.textContent = t("No fue posible generar el código QR.");
        });
        return;
      }
      const qrBackgroundColor = INVITATION_CONFIG.rsvp.qrBackgroundColor;
      const qrSize = Math.max(128, Math.floor(rsvpReceiptQr.getBoundingClientRect().width - 16));
      rsvpReceiptQr.style.setProperty("--rsvp-qr-size", `${qrSize}px`);
      rsvpReceiptQr.style.backgroundColor = qrBackgroundColor;
      const qrOptions = {
        width: qrSize,
        height: qrSize,
        type: "svg",
        data: buildConfirmationQrPayload(receipt),
        margin: Math.max(8, Math.round(qrSize * .055)),
        qrOptions: { errorCorrectionLevel: "Q" },
        dotsOptions: { color: INVITATION_CONFIG.rsvp.qrColor, type: INVITATION_CONFIG.rsvp.qrDotStyle },
        cornersSquareOptions: { color: INVITATION_CONFIG.rsvp.qrColor, type: "extra-rounded" },
        cornersDotOptions: { color: INVITATION_CONFIG.rsvp.qrAccentColor, type: "dot" },
        backgroundOptions: { color: qrBackgroundColor }
      };
      if (!confirmationQrCode) {
        confirmationQrCode = new window.QRCodeStyling(qrOptions);
        rsvpReceiptQr.innerHTML = "";
        confirmationQrCode.append(rsvpReceiptQr);
      } else {
        confirmationQrCode.update(qrOptions);
      }
      requestAnimationFrame(() => centerRenderedQr(rsvpReceiptQr, qrSize));
    }

    function centerRenderedQr(container, size) {
      const mount = container?.firstElementChild;
      if (!mount) return;
      Object.assign(mount.style, {
        position: "static",
        display: "grid",
        placeItems: "center",
        width: `${size}px`,
        height: `${size}px`,
        minWidth: "0",
        minHeight: "0",
        margin: "0",
        padding: "0",
        overflow: "visible",
        transform: "none"
      });
      const graphic = mount.querySelector("svg, canvas");
      if (!graphic) return;
      Object.assign(graphic.style, {
        position: "static",
        display: "block",
        width: `${size}px`,
        height: `${size}px`,
        maxWidth: "none",
        maxHeight: "none",
        margin: "0",
        transform: "none"
      });
    }

    function createRsvpReceipt({ name, count, familyMode, memberNames, eventCopy, message, breakdown }) {
      const confirmedAt = new Date().toISOString();
      const totalCount = breakdown?.total || resolveAttendanceCount(count, familyMode);
      const receipt = {
        name,
        count: totalCount,
        familyMode,
        memberNames: memberNames.filter(Boolean),
        breakdown: breakdown || null,
        event: eventCopy.celebrationText || eventCopy.eventHeader,
        confirmedAt,
        folio: createConfirmationFolio(),
        message
      };
      saveRsvpReceipt(receipt);
      renderRsvpReceipt(receipt);
      return receipt;
    }

    function sendReceiptByWhatsApp(targetContact = getDefaultRsvpTarget()) {
      if (!activeRsvpReceipt) return;
      const phone = targetContact?.phone || normalizeWhatsAppPhone(RSVP_PHONE, RSVP_COUNTRY_CODE);
      if (!phone) {
        showToast(t("Revisa el número de WhatsApp en el panel."));
        return;
      }
      activeRsvpReceipt.sentAt = new Date().toISOString();
      saveRsvpReceipt(activeRsvpReceipt);
      const message = `${activeRsvpReceipt.message}\n\n${isEnglish() ? "Confirmation ID" : "Folio de confirmación"}: ${activeRsvpReceipt.folio}`;
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    }

    function downloadConfirmationQr() {
      if (!confirmationQrCode || !activeRsvpReceipt) return;
      confirmationQrCode.download({
        name: `confirmacion-${slugifyText(activeRsvpReceipt.name)}-${activeRsvpReceipt.folio.toLowerCase()}`,
        extension: "png"
      });
    }

    function resolveRsvpTargetContact(contactKey) {
      if (!contactKey) return getDefaultRsvpTarget();
      return getRsvpContacts().find((contact) => contact.key === contactKey) || getDefaultRsvpTarget();
    }

    async function sendConfirmation(attending, targetContact = getDefaultRsvpTarget(), triggerButton = null) {
      const personalization = getRsvpPersonalization();
      const dynamicMode = personalization.dynamic === true;
      if ((INVITATION_CONFIG.rsvp.personalizedPassesEnabled === true || INVITATION_CONFIG.rsvp.dynamicPassesEnabled === true) && !personalization.active) {
        setRsvpBlocked(INVITATION_CONFIG.rsvp.firebase?.invalidInviteMessage);
        return;
      }
      if (requiresRsvpInviteValidation() && personalization.source !== "firebase") {
        setRsvpBlocked("Esta invitación necesita validación.", "Abre el enlace personalizado que recibiste para poder confirmar.");
        return;
      }
      const name = dynamicMode ? t("Pases reservados") : (personalization.active ? personalization.recipient : guestName.value.trim());
      const count = guestCount.value;
      const familyMode = isFamilyRsvp(personalization);
      const memberNames = familyMode ? getFamilyMemberNames() : [];
      const eventCopy = getEventCopy();
      const breakdown = getAdultChildBreakdown({ count, familyMode });

      if (!dynamicMode && !name) {
        showToast(t(familyMode ? "Escribe el apellido o nombre de la familia." : "Por favor escribe tu nombre."));
        if (!personalization.active) guestName.focus();
        return;
      }

      if (attending) {
        if ((familyMode || INVITATION_CONFIG.rsvp.showGuestCount !== false) && !count) {
          showToast(t("Selecciona cuántas personas asistirán."));
          guestCount.focus();
          return;
        }
        if (INVITATION_CONFIG.rsvp.adultChildCountEnabled === true && !breakdown) {
          showToast(isEnglish() ? "Select how many adults and children will attend." : "Indica cuántos adultos y niños asistirán.");
          adultCount?.focus();
          return;
        }
        if (familyMode) {
          const missingMemberIndex = memberNames.findIndex((memberName) => !memberName);
          if (missingMemberIndex !== -1) {
            showToast(isEnglish() ? `Write attendee ${missingMemberIndex + 1}'s name.` : `Escribe el nombre del integrante ${missingMemberIndex + 1}.`);
            familyMembersList.querySelectorAll("input")[missingMemberIndex]?.focus();
            return;
          }
        }
      }

      const message = dynamicMode
        ? buildDynamicRsvpMessage(attending, { count, eventCopy, breakdown })
        : buildRsvpMessage(attending, {
        name,
        count,
        familyMode,
        memberNames,
        eventCopy,
        breakdown
        });

      if (attending && INVITATION_CONFIG.rsvp.advancedConfirmationEnabled === true) {
        try {
          const qrReady = await ensureQrLibrary();
          if (!qrReady) {
            showToast(isEnglish() ? "The QR could not be prepared. Please try again." : "No fue posible preparar el QR. Intenta nuevamente.");
            return;
          }
          const receipt = createRsvpReceipt({ name, count, familyMode, memberNames, eventCopy, message, breakdown });
          saveRsvpConfirmationToFirebase(buildRsvpFirebaseRecord({
            attending,
            name,
            count,
            familyMode,
            memberNames,
            eventCopy,
            message,
            receipt,
            targetContact,
            breakdown
          }));
          sendReceiptByWhatsApp(targetContact);
          downloadConfirmationQr();
        } catch (error) {
          console.error("No se pudo generar el comprobante RSVP.", error);
          showToast(isEnglish() ? "The QR could not be generated. Please try again." : "No fue posible generar el QR. Intenta nuevamente.");
        }
        return;
      }

      const button = triggerButton || (attending ? confirmYes : confirmNo);
      const originalText = button.textContent;
      button.disabled = true;
      button.textContent = t(attending ? "Preparando mensaje..." : "Avisando...");
      showToast(t(attending ? "Estamos preparando tu confirmación." : "Estamos preparando tu mensaje."));

      setTimeout(() => {
        const phone = targetContact?.phone || normalizeWhatsAppPhone(RSVP_PHONE, RSVP_COUNTRY_CODE);
        if (!phone) {
          showToast(t("Revisa el número de WhatsApp en el panel."));
          button.disabled = false;
          button.textContent = originalText;
          return;
        }
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
        saveRsvpConfirmationToFirebase(buildRsvpFirebaseRecord({
          attending,
          name,
          count,
          familyMode,
          memberNames,
          eventCopy,
          message,
          targetContact,
          breakdown
        }));
        button.disabled = false;
        button.textContent = originalText;
      }, 520);
    }

    function buildRsvpMessage(attending, { name, count, familyMode, memberNames, eventCopy, breakdown }) {
      let template = familyMode
        ? attending
          ? (INVITATION_CONFIG.rsvp.familyConfirmMessage || DEFAULT_FAMILY_CONFIRM_MESSAGE)
          : (INVITATION_CONFIG.rsvp.familyDeclineMessage || DEFAULT_FAMILY_DECLINE_MESSAGE)
        : attending
          ? (INVITATION_CONFIG.rsvp.confirmMessage || DEFAULT_CONFIRM_MESSAGE)
          : (INVITATION_CONFIG.rsvp.declineMessage || DEFAULT_DECLINE_MESSAGE);
      if (isEnglish()) {
        if (template === DEFAULT_CONFIRM_MESSAGE) template = DEFAULT_CONFIRM_MESSAGE_EN;
        if (template === DEFAULT_DECLINE_MESSAGE) template = DEFAULT_DECLINE_MESSAGE_EN;
        if (template === DEFAULT_FAMILY_CONFIRM_MESSAGE) template = DEFAULT_FAMILY_CONFIRM_MESSAGE_EN;
        if (template === DEFAULT_FAMILY_DECLINE_MESSAGE) template = DEFAULT_FAMILY_DECLINE_MESSAGE_EN;
      }
      const personalization = getRsvpPersonalization();
      const passes = personalization.active
        ? isEnglish()
          ? (Number(count) === 1 ? "1 reserved pass" : `${count} reserved passes`)
          : (Number(count) === 1 ? "1 pase reservado" : `${count} pases reservados`)
        : familyMode || INVITATION_CONFIG.rsvp.showGuestCount !== false ? attendanceSelectionLabel(count, familyMode) : "";
      const breakdownText = formatAdultChildBreakdown(breakdown);
      const familyCount = peopleLabel(count);
      const members = memberNames.map((memberName, index) => `${index + 1}. ${memberName}`).join("\n");
      const familyName = String(name || "").replace(/^familia\s+/i, "").trim() || name;
      const message = template
        .replaceAll("{nombre}", name)
        .replaceAll("{familia}", familyName)
        .replaceAll("{cantidad}", familyCount)
        .replaceAll("{integrantes}", members)
        .replaceAll("{desglose}", breakdownText)
        .replaceAll("{adultos}", breakdown ? String(breakdown.adults) : "")
        .replaceAll("{ninos}", breakdown ? String(breakdown.children) : "")
        .replaceAll("{niños}", breakdown ? String(breakdown.children) : "")
        .replaceAll("{evento}", eventCopy.eventHeader)
        .replaceAll("{festejada}", INVITATION_CONFIG.event.celebrantName || "")
        .replaceAll("{celebracion}", eventCopy.celebrationText)
        .replaceAll("{pases}", passes)
        .split("\n")
        .filter((line) => line.trim() || (!line.includes("{pases}") && !line.includes("{integrantes}")))
        .join("\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
      return attending && breakdownText && !template.includes("{desglose}") && !template.includes("{adultos}") && !template.includes("{ninos}") && !template.includes("{niños}")
        ? `${message}\n\n${breakdownText}`
        : message;
    }

    function buildDynamicRsvpMessage(attending, { count, eventCopy, breakdown }) {
      const total = breakdown?.total || Math.max(1, Number.parseInt(count, 10) || 1);
      const people = peopleLabel(total);
      const breakdownText = formatAdultChildBreakdown(breakdown);
      if (attending) {
        if (isEnglish()) {
          return `Attendance confirmation\n\nWith joy, we confirm the attendance of ${people} to celebrate ${eventCopy.celebrationText}.${breakdownText ? `\n\n${breakdownText}` : ""}\n\nIt will be an honor to share this special day.`;
        }
        return `Confirmación de asistencia\n\nCon mucha alegría confirmamos la asistencia de ${people} para celebrar ${eventCopy.celebrationText}.${breakdownText ? `\n\n${breakdownText}` : ""}\n\nSerá un honor compartir este día tan especial.`;
      }
      if (isEnglish()) {
        return `${eventCopy.eventHeader}\n\nWith love, we want to let you know that we will not be able to attend this time.\n\nWe wish you a wonderful celebration filled with unforgettable moments.`;
      }
      return `${eventCopy.eventHeader}\n\nCon mucho cariño avisamos que en esta ocasión no podremos acompañarles.\n\nLes deseamos una celebración maravillosa y llena de momentos inolvidables.`;
    }

    function fadeInAudio() {
      if (INVITATION_CONFIG.audio?.showControl === false) return;
      applyAudioSource();
      audio.volume = 0;
      audio.play().then(() => {
        let volume = 0;
        const interval = setInterval(() => {
          volume = Math.min(1, volume + 0.08);
          audio.volume = volume;
          if (volume >= 1) clearInterval(interval);
        }, 120);
      }).catch(() => {});
    }

    function applyMusicControlState() {
      if (!musicBtn) return;
      const enabled = INVITATION_CONFIG.audio?.showControl !== false;
      musicBtn.hidden = !enabled;
      musicBtn.classList.toggle("is-disabled", !enabled);
      if (!enabled) {
        audio.pause();
        musicBtn.classList.remove("show");
        musicBtn.classList.add("is-paused");
        musicBtn.setAttribute("aria-label", t("Música desactivada"));
      } else {
        musicBtn.setAttribute("aria-label", t(audio.paused ? "Reproducir música" : "Pausar música"));
      }
    }

    function escapeICSValue(value) {
      return String(value || "")
        .replace(/\\/g, "\\\\")
        .replace(/\r?\n/g, "\\n")
        .replace(/,/g, "\\,")
        .replace(/;/g, "\\;");
    }

    function foldICSLine(line) {
      const limit = 74;
      if (line.length <= limit) return line;
      let output = "";
      for (let index = 0; index < line.length; index += limit) {
        const chunk = line.slice(index, index + limit);
        output += index === 0 ? chunk : `\r\n ${chunk}`;
      }
      return output;
    }

    function getCalendarTimeZone() {
      return INVITATION_CONFIG.event.timeZone || "America/Mexico_City";
    }

    function getConfiguredDateParts(value) {
      const match = String(value || "").match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
      if (match) {
        return {
          year: match[1],
          month: match[2],
          day: match[3],
          hour: match[4],
          minute: match[5],
          second: "00"
        };
      }

      const date = new Date(value);
      return {
        year: String(date.getFullYear()).padStart(4, "0"),
        month: String(date.getMonth() + 1).padStart(2, "0"),
        day: String(date.getDate()).padStart(2, "0"),
        hour: String(date.getHours()).padStart(2, "0"),
        minute: String(date.getMinutes()).padStart(2, "0"),
        second: "00"
      };
    }

    function formatCalendarLocalDate(value) {
      const parts = getConfiguredDateParts(value);
      return `${parts.year}${parts.month}${parts.day}T${parts.hour}${parts.minute}${parts.second}`;
    }

    function formatUrlLocalDate(value) {
      const parts = getConfiguredDateParts(value);
      return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}`;
    }

    function formatUTCStamp(date) {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    }

    function buildICSFile(title, details, location) {
      const uidBase = `${slugifyText(title || "evento")}-${EVENT_DATE.getTime()}`;
      const timeZone = getCalendarTimeZone();
      const lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        `PRODID:-//Digital Invita//${isEnglish() ? "Digital Invitation//EN" : "Invitacion Digital//ES"}`,
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        foldICSLine(`X-WR-CALNAME:${escapeICSValue(title)}`),
        "BEGIN:VEVENT",
        foldICSLine(`UID:${escapeICSValue(uidBase)}@digitalinvita`),
        `DTSTAMP:${formatUTCStamp(new Date())}`,
        `DTSTART;TZID=${timeZone}:${formatCalendarLocalDate(INVITATION_CONFIG.event.eventDate)}`,
        `DTEND;TZID=${timeZone}:${formatCalendarLocalDate(INVITATION_CONFIG.event.eventEnd)}`,
        foldICSLine(`SUMMARY:${escapeICSValue(title)}`),
        foldICSLine(`DESCRIPTION:${escapeICSValue(details)}`),
        foldICSLine(`LOCATION:${escapeICSValue(location)}`),
        "STATUS:CONFIRMED",
        "TRANSP:OPAQUE",
        foldICSLine(`URL:${escapeICSValue(window.location.href)}`),
        "END:VEVENT",
        "END:VCALENDAR"
      ];
      return lines.join("\r\n");
    }

    function downloadICSFile(filename, content) {
      try {
        const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 1200);
        return true;
      } catch (error) {
        console.warn("No se pudo generar el archivo de calendario.", error);
        return false;
      }
    }

    function buildGoogleCalendarUrl(title, details, location) {
      const start = formatCalendarLocalDate(INVITATION_CONFIG.event.eventDate);
      const end = formatCalendarLocalDate(INVITATION_CONFIG.event.eventEnd);
      const timeZone = getCalendarTimeZone();
      return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&ctz=${encodeURIComponent(timeZone)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    }

    function buildOutlookCalendarUrl(title, details, location) {
      const start = formatUrlLocalDate(INVITATION_CONFIG.event.eventDate);
      const end = formatUrlLocalDate(INVITATION_CONFIG.event.eventEnd);
      return `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(title)}&startdt=${encodeURIComponent(start)}&enddt=${encodeURIComponent(end)}&body=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    }

    function openCalendarProvider(url) {
      try {
        const opened = window.open(url, "_blank", "noopener,noreferrer");
        return Boolean(opened);
      } catch (error) {
        console.warn("No se pudo abrir el proveedor de calendario.", error);
        return false;
      }
    }

    function addToCalendar(event) {
      event.preventDefault();

      const eventCopy = getEventCopy();
      const title = eventCopy.calendarTitle;
      const details = eventCopy.calendarDetails;
      const userAgent = navigator.userAgent;
      const isApple = /iPad|iPhone|iPod|Mac/i.test(userAgent);
      const isWindows = /Windows/i.test(userAgent);
      const isAndroid = /Android/i.test(userAgent);
      const icsContent = buildICSFile(title, details, EVENT_LOCATION);
      const filename = `${slugifyText(eventCopy.calendarTitle)}.ics`;
      const downloaded = downloadICSFile(filename, icsContent);

      if (isApple) {
        showToast(t(downloaded ? "Calendario listo para Apple Calendar." : "Calendario listo. Si no se descargó, intenta de nuevo."));
        return;
      }

      const providerUrl = isWindows
        ? buildOutlookCalendarUrl(title, details, EVENT_LOCATION)
        : buildGoogleCalendarUrl(title, details, EVENT_LOCATION);
      const opened = openCalendarProvider(providerUrl);

      if (opened) {
        showToast(t(isWindows
          ? "Se abrió Outlook y también se descargó respaldo .ics."
          : "Se abrió Google Calendar y también se descargó respaldo .ics."));
        return;
      }

      showToast(t(isAndroid
        ? "Se descargó un archivo .ics compatible con Samsung Calendar."
        : "Se descargó un archivo .ics compatible con tu calendario."));
    }

    function initParticles() {
      const canvas = document.getElementById("particles");
      if (!canvas) return null;
      const ctx = canvas.getContext("2d", { alpha: true });
      if (!ctx) return null;
      const frontCanvas = document.getElementById("particlesFront");
      const frontCtx = frontCanvas?.getContext("2d", { alpha: true }) || null;
      const heroCanvas = document.getElementById("heroParticles");
      const heroCtx = heroCanvas?.getContext("2d", { alpha: true }) || null;

      let width = 0;
      let height = 0;
      let particles = [];
      let animationId = 0;
      let lastFrameTime = 0;
      const lowPower = IS_LOW_POWER_DEVICE
        || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)
        || (navigator.deviceMemory && navigator.deviceMemory <= 4);

      function particlesEnabled() {
        return INVITATION_CONFIG.theme.particlesEnabled !== false;
      }

      function particlesOverSectionsEnabled() {
        return INVITATION_CONFIG.theme.particlesOverSectionsEnabled !== false;
      }

      function particleSetting(name, min, max, fallback = 100) {
        return clampNumber(INVITATION_CONFIG.theme[name], min, max, fallback) / 100;
      }

      function particleFastPercent() {
        return clampNumber(INVITATION_CONFIG.theme.particleFastPercent, 0, 50, 18);
      }

      function createParticle(index) {
        const depth = Math.random();
        const angle = Math.random() * Math.PI * 2;
        const speedRatio = particleSetting("particleSpeed", 35, 240);
        const isFast = particleFastPercent() > 0 && ((index * 37) % 100) < particleFastPercent();
        const baseSpeed = lowPower
          ? 0.035 + depth * 0.065
          : 0.045 + depth * 0.115;
        const hasTrail = index % (lowPower ? 8 : 5) === 0;
        const isLarge = index % (lowPower ? 11 : 6) === 2;
        const speed = hasTrail
          ? (lowPower ? 0.08 + depth * 0.1 : 0.14 + depth * 0.24)
          : baseSpeed;
        const finalSpeed = speed * speedRatio * (isFast ? 1.85 : 1);
        const radiusBase = isLarge
          ? 1.9 + Math.random() * 1.45
          : 0.46 + Math.pow(depth, 1.35) * 1.45;
        const radius = radiusBase * particleSetting("particleSize", 50, 180);
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          r: radius,
          vx: Math.cos(angle) * finalSpeed,
          vy: Math.sin(angle) * finalSpeed * (hasTrail ? 0.72 : 1),
          orbitX: ((isLarge ? 1.5 : 3) + Math.random() * (isLarge ? 5 : 11)) * (isFast ? 1.22 : 1),
          orbitY: ((isLarge ? 1.5 : 2) + Math.random() * (isLarge ? 4 : 8)) * (isFast ? 1.18 : 1),
          orbitSpeedX: (0.00045 + Math.random() * 0.0007) * speedRatio * (isFast ? 1.45 : 1),
          orbitSpeedY: (0.00035 + Math.random() * 0.00055) * speedRatio * (isFast ? 1.45 : 1),
          phase: Math.random() * Math.PI * 2,
          alpha: isLarge ? Math.random() * 0.08 + 0.08 : Math.random() * 0.2 + 0.14,
          trail: hasTrail,
          trailLimit: hasTrail ? Math.round(30 + Math.random() * 16) : 0,
          history: hasTrail ? [] : null,
          overSections: index % (lowPower ? 4 : 3) === 1,
          fast: isFast,
          depth,
          drawX: 0,
          drawY: 0
        };
      }

      function wrapParticle(particle) {
        const margin = 34;
        let wrapped = false;
        if (particle.x < -margin) {
          particle.x = width + margin;
          wrapped = true;
        }
        if (particle.x > width + margin) {
          particle.x = -margin;
          wrapped = true;
        }
        if (particle.y < -margin) {
          particle.y = height + margin;
          wrapped = true;
        }
        if (particle.y > height + margin) {
          particle.y = -margin;
          wrapped = true;
        }
        if (wrapped && particle.history) particle.history.length = 0;
      }

      function getFrontParticleZones() {
        return Array.from(document.querySelectorAll(".page > .section, .page > .closing-note, .page > .brand-footer"))
          .map((node) => node.getBoundingClientRect())
          .filter((rect) => rect.bottom > 0 && rect.top < height && rect.width > 0 && rect.height > 0)
          .map((rect) => ({
            left: Math.max(0, rect.left - 12),
            right: Math.min(width, rect.right + 12),
            top: Math.max(0, rect.top - 12),
            bottom: Math.min(height, rect.bottom + 12)
          }));
      }

      function isInsideFrontZone(x, y, zones) {
        return zones.some((zone) => x >= zone.left && x <= zone.right && y >= zone.top && y <= zone.bottom);
      }

      function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, USE_MOBILE_BEHAVIOR ? 1.15 : 1.6);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        if (frontCanvas && frontCtx) {
          frontCanvas.width = canvas.width;
          frontCanvas.height = canvas.height;
          frontCanvas.style.width = `${width}px`;
          frontCanvas.style.height = `${height}px`;
          frontCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        if (heroCanvas && heroCtx) {
          heroCanvas.width = canvas.width;
          heroCanvas.height = canvas.height;
          heroCanvas.style.width = `${width}px`;
          heroCanvas.style.height = `${height}px`;
          heroCtx.setTransform(1, 0, 0, 1, 0, 0);
        }

        const baseTotal = USE_MOBILE_BEHAVIOR
          ? (width < 768 ? 16 : 24)
          : (lowPower
            ? (width < 768 ? 16 : 26)
            : (width < 768 ? 36 : 68));
        const total = Math.max(6, Math.round(baseTotal * particleSetting("particleDensity", 25, 180)));
        particles = Array.from({ length: total }, (_, index) => createParticle(index));
      }

      function stopParticles() {
        cancelAnimationFrame(animationId);
        animationId = 0;
        ctx.clearRect(0, 0, width, height);
        if (frontCanvas && frontCtx) frontCtx.clearRect(0, 0, width, height);
        if (heroCanvas && heroCtx) heroCtx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
      }

      function syncParticleState() {
        const enabled = particlesEnabled();
        canvas.hidden = !enabled;
        if (frontCanvas) frontCanvas.hidden = !enabled || !particlesOverSectionsEnabled();
        if (heroCanvas) heroCanvas.hidden = !enabled;
        if (!enabled) {
          stopParticles();
          return;
        }
        if (!width || !height || !particles.length) resize();
        if (!animationId && !document.hidden) {
          lastFrameTime = 0;
          animationId = requestAnimationFrame(animate);
        }
      }

      function updateTrail(particle, x, y) {
        if (!particle.history) return;
        particle.history.push({ x, y });
        while (particle.history.length > particle.trailLimit) particle.history.shift();
      }

      function drawTrail(targetCtx, particle, particleRgb, alpha, radius, layerAlpha = 1) {
        if (!particle.history || particle.history.length < 2) return;
        targetCtx.lineCap = "round";
        targetCtx.lineJoin = "round";
        for (let index = 1; index < particle.history.length; index += 1) {
          const from = particle.history[index - 1];
          const to = particle.history[index];
          const progress = index / (particle.history.length - 1);
          targetCtx.beginPath();
          targetCtx.moveTo(from.x, from.y);
          targetCtx.lineTo(to.x, to.y);
          targetCtx.lineWidth = Math.max(0.4, radius * 0.68 * progress);
          targetCtx.strokeStyle = `rgba(${particleRgb}, ${alpha * 0.42 * progress * layerAlpha})`;
          targetCtx.stroke();
        }
      }

      function drawParticle(targetCtx, particle, particleRgb, time, layerAlpha = 1, updateHistory = true) {
        const breath = Math.sin(time * 0.0012 + particle.phase) * 0.035;
        const brightness = particleSetting("particleBrightness", 40, 180);
        const alpha = Math.min(0.92, Math.max(0.05, (particle.alpha + breath) * brightness));
        const radius = particle.r;
        const drawX = particle.x + Math.sin(time * particle.orbitSpeedX + particle.phase) * particle.orbitX;
        const drawY = particle.y + Math.cos(time * particle.orbitSpeedY + particle.phase) * particle.orbitY;
        if (updateHistory) updateTrail(particle, drawX, drawY);
        drawTrail(targetCtx, particle, particleRgb, alpha, radius, layerAlpha);

        targetCtx.beginPath();
        targetCtx.arc(drawX, drawY, radius * 2.1, 0, Math.PI * 2);
        targetCtx.fillStyle = `rgba(${particleRgb}, ${alpha * 0.08 * layerAlpha})`;
        targetCtx.fill();

        targetCtx.beginPath();
        targetCtx.arc(drawX, drawY, radius * 1.25, 0, Math.PI * 2);
        targetCtx.fillStyle = `rgba(${particleRgb}, ${alpha * 0.22 * layerAlpha})`;
        targetCtx.fill();

        targetCtx.beginPath();
        targetCtx.arc(drawX, drawY, radius, 0, Math.PI * 2);
        targetCtx.fillStyle = `rgba(${particleRgb}, ${alpha * 0.76 * layerAlpha})`;
        targetCtx.fill();

        particle.drawX = drawX;
        particle.drawY = drawY;
      }

      function animate(time = 0) {
        if (!particlesEnabled()) {
          stopParticles();
          return;
        }
        const delta = lastFrameTime ? Math.min(2.2, (time - lastFrameTime) / 16.67) : 1;
        lastFrameTime = time;
        ctx.clearRect(0, 0, width, height);
        if (frontCanvas && frontCtx) frontCtx.clearRect(0, 0, width, height);
        const particleRgb = getComputedStyle(document.documentElement).getPropertyValue("--particle-rgb").trim() || "255, 244, 207";
        const drawFrontLayer = Boolean(frontCtx && particlesOverSectionsEnabled());
        const frontZones = drawFrontLayer ? getFrontParticleZones() : [];
        particles.forEach((particle) => {
          particle.x += particle.vx * delta;
          particle.y += particle.vy * delta;
          wrapParticle(particle);

          drawParticle(ctx, particle, particleRgb, time);
          if (drawFrontLayer && particle.overSections && isInsideFrontZone(particle.drawX, particle.drawY, frontZones)) {
            drawParticle(frontCtx, particle, particleRgb, time, 0.92, false);
          }
        });
        if (heroCanvas && heroCtx) {
          heroCtx.setTransform(1, 0, 0, 1, 0, 0);
          heroCtx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
          heroCtx.drawImage(canvas, 0, 0);
        }
        animationId = requestAnimationFrame(animate);
      }

      resize();
      syncParticleState();
      window.addEventListener("resize", resize, { passive: true });
      window.addEventListener("digitalInvita:visualSettingsChanged", () => {
        if (particlesEnabled()) resize();
        syncParticleState();
      });
      const handleParticleVisibility = () => {
        if (document.hidden) {
          stopParticles();
        } else if (!animationId) {
          syncParticleState();
        }
      };
      document.addEventListener("visibilitychange", handleParticleVisibility);

      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", resize);
        window.removeEventListener("digitalInvita:visualSettingsChanged", syncParticleState);
        document.removeEventListener("visibilitychange", handleParticleVisibility);
      };
    }

    function initLightProtection() {
      document.addEventListener("contextmenu", (event) => {
        const protectedTarget = event.target.closest("img, video, .gallery-stage, .gallery, .lightbox, .hero");
        if (!protectedTarget) return;
        event.preventDefault();
        showToast("Esta vista está protegida.");
      });

      document.addEventListener("dragstart", (event) => {
        if (event.target.closest("img, video")) {
          event.preventDefault();
        }
      });

      document.addEventListener("keydown", (event) => {
        const key = event.key.toLowerCase();
        const isBlockedShortcut =
          key === "f12"
          || (event.ctrlKey && event.shiftKey && (key === "i" || key === "j" || key === "c"))
          || (event.ctrlKey && key === "u")
          || (event.metaKey && event.altKey && key === "i")
          || (event.metaKey && event.altKey && key === "j")
          || (event.metaKey && key === "u");

        if (!isBlockedShortcut) return;

        event.preventDefault();
        showToast("Acción desactivada en esta invitación.");
      });
    }

    function finishOpeningInvitation() {
      const completedEnvelopeScrollReveal = envelopeScrollRevealActive;
      envelopeScrollRevealActive = false;
      envelopeScrollRevealPrimed = false;
      document.documentElement.style.setProperty("--envelope-scroll-progress", "1");
      if (completedEnvelopeScrollReveal) {
        // Este scroll sólo controla la introducción; la portada siempre inicia arriba.
        window.scrollTo({ top: 0, behavior: "auto" });
        document.documentElement.classList.add("envelope-scroll-complete");
      }
      overlay.classList.add("hidden");
      overlay.setAttribute("aria-hidden", "true");
      setScrollLocked(false);
      heroLabel.classList.add("animate");
      heroName.classList.add("animate");
      fechaEvento.classList.add("animate");
      updateFloatingButtons();
      requestAnimationFrame(updateAppleHeroScroll);
      scheduleHeroScrollCue();
      window.setTimeout(() => {
        overlay.classList.remove("opening", "elegant-opening", "envelope-opening-active", "envelope-hero-reveal", "envelope-scroll-ready");
        document.documentElement.classList.remove("envelope-hero-landing", "envelope-scroll-reveal", "envelope-scroll-complete");
        document.documentElement.style.removeProperty("--envelope-scroll-progress");
        document.documentElement.style.removeProperty("--envelope-card-y");
        document.documentElement.style.removeProperty("--envelope-card-scale");
        document.documentElement.style.removeProperty("--envelope-piece-opacity");
        document.documentElement.style.removeProperty("--envelope-paper-y");
        document.documentElement.style.removeProperty("--envelope-paper-scale");
        document.documentElement.style.removeProperty("--envelope-paper-radius");
        document.documentElement.style.removeProperty("--envelope-paper-shadow-y");
        document.documentElement.style.removeProperty("--envelope-paper-shadow-blur");
        document.documentElement.style.removeProperty("--envelope-paper-shadow-alpha");
        document.documentElement.style.removeProperty("--envelope-paper-outline-alpha");
        document.documentElement.style.removeProperty("--envelope-paper-glaze-opacity");
        document.documentElement.style.removeProperty("--envelope-paper-z");
        document.documentElement.style.removeProperty("--envelope-hero-scale");
        document.documentElement.style.removeProperty("--envelope-hero-brightness");
        openBtn.disabled = false;
      }, 900);
    }

    function scheduleHeroScrollCue() {
      window.clearTimeout(heroScrollCueTimer);
      if (INVITATION_CONFIG.theme.heroScrollCueEnabled === false || INVITATION_CONFIG.theme.heroScrollHintEnabled === false) return;
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;
      const delay = clampNumber(INVITATION_CONFIG.theme.heroScrollCueDelay, 1, 3, 2) * 1000;
      heroScrollCueTimer = window.setTimeout(() => {
        if (!overlay.classList.contains("hidden")) return;
        if ((window.scrollY || document.documentElement.scrollTop || 0) > 8) return;
        document.documentElement.classList.add("hero-scroll-cue-active");
        window.setTimeout(() => {
          document.documentElement.classList.remove("hero-scroll-cue-active");
        }, 3900);
      }, delay);
    }

    function finishEnvelopeOpeningInvitation() {
      envelopeScrollRevealActive = false;
      envelopeScrollRevealPrimed = false;
      const revealToHero = () => {
        overlay.classList.add("envelope-hero-reveal");
        window.setTimeout(finishOpeningInvitation, 420);
      };
      // Keep the open envelope on screen until the real hero is ready.
      // This prevents a white frame between the postcard and the invitation.
      if (heroImage && heroImage.src && !heroImage.complete) {
        let revealed = false;
        const revealOnce = () => {
          if (revealed) return;
          revealed = true;
          revealToHero();
        };
        heroImage.addEventListener("load", revealOnce, { once: true });
        window.setTimeout(revealOnce, 1200);
        return;
      }
      revealToHero();
    }

    function updateEnvelopeScrollReveal() {
      if (!envelopeScrollRevealActive || !envelopeScrollRevealPrimed) return;
      const viewportHeight = Math.max(1, window.innerHeight || document.documentElement.clientHeight || 1);
      const viewportWidth = Math.max(1, window.innerWidth || document.documentElement.clientWidth || 1);
      const envelopePaper = document.querySelector(".envelope-paper");
      const paperWidth = Math.max(1, envelopePaper?.offsetWidth || viewportWidth * .78);
      const paperHeight = Math.max(1, envelopePaper?.offsetHeight || viewportHeight * .3);
      const scrollRange = Math.max(340, Math.min(540, viewportHeight * .56));
      const bufferRange = Math.max(130, Math.min(210, viewportHeight * .2));
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const revealProgress = Math.max(0, Math.min(1, scrollTop / scrollRange));
      const totalProgress = Math.max(0, Math.min(1, scrollTop / (scrollRange + bufferRange)));
      const finalPaperScale = Math.max(viewportWidth / paperWidth, viewportHeight / paperHeight) * 1.035;
      const paperScale = 1.06 + ((finalPaperScale - 1.06) * revealProgress);
      const pieceOpacity = Math.max(0, 1 - (revealProgress * 1.22));

      document.documentElement.style.setProperty("--envelope-scroll-progress", totalProgress.toFixed(3));
      document.documentElement.style.setProperty("--envelope-card-y", `${(revealProgress * 64).toFixed(1)}px`);
      document.documentElement.style.setProperty("--envelope-card-scale", (1 - (revealProgress * .08)).toFixed(3));
      document.documentElement.style.setProperty("--envelope-piece-opacity", pieceOpacity.toFixed(3));
      document.documentElement.style.setProperty("--envelope-paper-y", `${(18 - (revealProgress * 18)).toFixed(2)}%`);
      document.documentElement.style.setProperty("--envelope-paper-scale", Math.max(.86, paperScale).toFixed(3));
      document.documentElement.style.setProperty("--envelope-paper-radius", `${Math.max(0, 9 - (revealProgress * 9)).toFixed(1)}px`);
      document.documentElement.style.setProperty("--envelope-paper-shadow-y", `${Math.max(0, 22 - (revealProgress * 18)).toFixed(1)}px`);
      document.documentElement.style.setProperty("--envelope-paper-shadow-blur", `${Math.max(0, 46 - (revealProgress * 30)).toFixed(1)}px`);
      document.documentElement.style.setProperty("--envelope-paper-shadow-alpha", Math.max(.1, .34 - (revealProgress * .2)).toFixed(3));
      document.documentElement.style.setProperty("--envelope-paper-outline-alpha", Math.max(.03, .12 - (revealProgress * .08)).toFixed(3));
      document.documentElement.style.setProperty("--envelope-paper-glaze-opacity", "0");
      document.documentElement.style.setProperty("--envelope-paper-z", revealProgress < .46 ? "1" : "9");
      document.documentElement.style.setProperty("--envelope-hero-scale", (.91 + (revealProgress * .09)).toFixed(3));
      document.documentElement.style.setProperty("--envelope-hero-brightness", (.88 + (revealProgress * .12)).toFixed(3));

      if (totalProgress >= .995) finishOpeningInvitation();
    }

    function triggerWarpFlash() {
      if (!warpFlash) return;
      warpFlash.classList.remove("active");
      void warpFlash.offsetWidth;
      warpFlash.classList.add("active");
      window.setTimeout(() => {
        warpFlash.classList.remove("active");
      }, 1050);
    }

    function triggerElegantOpening() {
      if (!warpFlash) return;
      warpFlash.classList.remove("active");
      warpFlash.classList.add("elegant");
      void warpFlash.offsetWidth;
      warpFlash.classList.add("active");
      window.setTimeout(() => {
        warpFlash.classList.remove("active", "elegant");
      }, 1280);
    }

    function triggerMissionAccepted() {
      if (!missionAccepted) return;
      missionAccepted.classList.remove("active");
      void missionAccepted.offsetWidth;
      missionAccepted.classList.add("active");
      window.setTimeout(() => {
        missionAccepted.classList.remove("active");
      }, 1900);
    }

    openBtn.addEventListener("click", () => {
      if (overlay.classList.contains("hidden")) return;
      fadeInAudio();
      if (INVITATION_CONFIG.audio?.showControl !== false) musicBtn.classList.remove("is-paused");
      if (["space-ranger", "military"].includes(INVITATION_CONFIG.theme.styleMode)) {
        const militaryOpening = INVITATION_CONFIG.theme.styleMode === "military";
        openBtn.disabled = true;
        overlay.classList.add("opening");
        window.setTimeout(triggerWarpFlash, militaryOpening ? 180 : 260);
        window.setTimeout(() => {
          finishOpeningInvitation();
          window.setTimeout(triggerMissionAccepted, militaryOpening ? 260 : 420);
        }, militaryOpening ? 900 : 680);
        return;
      }
      if (INVITATION_CONFIG.theme.openingMode === "envelope" && !window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
        openBtn.disabled = true;
        overlay.classList.add("opening", "envelope-opening-active");
        window.setTimeout(finishEnvelopeOpeningInvitation, 1040);
        return;
      }
      const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true;
      if (INVITATION_CONFIG.theme.openingEffectEnabled !== false && !reduceMotion) {
        openBtn.disabled = true;
        overlay.classList.add("opening", "elegant-opening");
        window.setTimeout(triggerElegantOpening, 70);
        window.setTimeout(finishOpeningInvitation, 920);
        return;
      }
      finishOpeningInvitation();
    });

    musicBtn.addEventListener("click", () => {
      if (INVITATION_CONFIG.audio?.showControl === false) return;
      applyAudioSource();
      if (audio.paused) {
        audio.play().catch(() => {});
        musicBtn.classList.remove("is-paused");
        musicBtn.setAttribute("aria-label", t("Pausar música"));
      } else {
        audio.pause();
        musicBtn.classList.add("is-paused");
        musicBtn.setAttribute("aria-label", t("Reproducir música"));
      }
    });

    toTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    galleryGrid.addEventListener("mouseover", (event) => {
      const item = event.target.closest("[data-gallery-index]");
      if (!item) return;
      const index = Number(item.dataset.galleryIndex);
      if (index >= 0) updateGalleryPreview(index);
    });

    galleryPrev.addEventListener("click", prevPreview);
    galleryNext.addEventListener("click", nextPreview);
    galleryStage.addEventListener("click", (event) => {
      if (event.target.closest("video")) return;
      openLightbox(previewIndex);
    });

    closeLightbox.addEventListener("click", closeGallery);
    lightboxPrev?.addEventListener("click", prevImage);
    lightboxNext?.addEventListener("click", nextImage);
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeGallery();
    });

    document.addEventListener("keydown", (event) => {
      if (!lightbox.classList.contains("show")) return;
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
    });

    lightboxMain.addEventListener("dblclick", (event) => {
      if (lightboxMain.classList.contains("is-video")) return;
      event.preventDefault();
      if (zoomScale > 1.01) {
        resetImageZoom(true);
      } else {
        zoomScale = 2;
        zoomX = 0;
        zoomY = 0;
        applyImageZoom();
      }
    });

    lightboxMain.addEventListener("wheel", (event) => {
      if (lightboxMain.classList.contains("is-video")) return;
      event.preventDefault();
      const direction = event.deltaY < 0 ? 0.22 : -0.22;
      zoomScale = Math.max(1, Math.min(3, zoomScale + direction));
      if (zoomScale <= 1.02) {
        resetImageZoom();
      } else {
        applyImageZoom();
      }
    }, { passive: false });

    lightboxMain.addEventListener("touchstart", (event) => {
      if (lightboxMain.classList.contains("is-video")) {
        if (event.touches.length === 1) {
          panStartX = event.touches[0].clientX;
          panStartY = event.touches[0].clientY;
        }
        return;
      }
      if (event.touches.length === 2) {
        pinchStartDistance = getTouchDistance(event.touches);
        pinchStartScale = zoomScale;
        isPanningImage = false;
        return;
      }

      if (event.touches.length === 1) {
        const now = Date.now();
        if (now - lastTapTime < 280) {
          event.preventDefault();
          if (zoomScale > 1.01) resetImageZoom(true);
          else {
            zoomScale = 2;
            zoomX = 0;
            zoomY = 0;
            applyImageZoom();
          }
        }
        lastTapTime = now;

        if (zoomScale > 1.01) {
          isPanningImage = true;
          lightboxMain.classList.add("is-panning");
          dragOriginX = event.touches[0].clientX - zoomX;
          dragOriginY = event.touches[0].clientY - zoomY;
        } else {
          panStartX = event.touches[0].clientX;
          panStartY = event.touches[0].clientY;
        }
      }
    }, { passive: false });

    lightboxMain.addEventListener("touchmove", (event) => {
      if (lightboxMain.classList.contains("is-video")) return;
      if (event.touches.length === 2) {
        event.preventDefault();
        const distance = getTouchDistance(event.touches);
        zoomScale = Math.max(1, Math.min(3, pinchStartScale * (distance / Math.max(pinchStartDistance, 1))));
        if (zoomScale <= 1.02) {
          zoomScale = 1;
          zoomX = 0;
          zoomY = 0;
        }
        applyImageZoom();
        return;
      }

      if (event.touches.length === 1 && zoomScale > 1.01 && isPanningImage) {
        event.preventDefault();
        zoomX = event.touches[0].clientX - dragOriginX;
        zoomY = event.touches[0].clientY - dragOriginY;
        applyImageZoom();
      }
    }, { passive: false });

    lightboxMain.addEventListener("touchend", (event) => {
      if (lightboxMain.classList.contains("is-video")) {
        if (event.changedTouches.length === 1) {
          const diffX = panStartX - event.changedTouches[0].clientX;
          const diffY = panStartY - event.changedTouches[0].clientY;
          if (Math.abs(diffX) > 64 && Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0) nextImage();
            else prevImage();
          }
        }
        return;
      }
      lightboxMain.classList.remove("is-panning");
      isPanningImage = false;

      if (zoomScale > 1.01) return;

      if (event.changedTouches.length === 1) {
        const diffX = panStartX - event.changedTouches[0].clientX;
        const diffY = panStartY - event.changedTouches[0].clientY;
        if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX > 0) nextImage();
          else prevImage();
        }
      }
    });

    confirmYes.addEventListener("click", () => sendConfirmation(true));
    confirmNo.addEventListener("click", () => sendConfirmation(false));
    rsvpContactButtons?.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-rsvp-action]");
      if (!button) return;
      const targetContact = resolveRsvpTargetContact(button.dataset.rsvpContactKey);
      sendConfirmation(button.dataset.rsvpAction === "confirm", targetContact, button);
    });
    guestCount.addEventListener("change", () => {
      renderFamilyMemberFields();
      renderAdultChildFields();
    });
    adultCount?.addEventListener("input", renderAdultChildFields);
    childCount?.addEventListener("input", renderAdultChildFields);
    adultCount?.addEventListener("change", renderAdultChildFields);
    childCount?.addEventListener("change", renderAdultChildFields);
    agendaGalleryBtn?.addEventListener("click", (event) => {
      event.preventDefault();
      if (galleryItems.length) {
        openLightbox(0);
        return;
      }
      showToast("Aún no hay multimedia en la galería.");
    });
    countdownCalendarBtn?.addEventListener("click", addToCalendar);
    verCuenta.addEventListener("click", (event) => {
      event.preventDefault();
      document.getElementById("countdown-section").scrollIntoView({ behavior: "smooth", block: "center" });
    });
    document.addEventListener("click", async (event) => {
      const button = event.target.closest("[data-copy-bank]");
      if (!button) return;
      const value = button.dataset.copyBank || "";
      if (!value) return;
      try {
        await navigator.clipboard.writeText(value);
        showToast(t("Dato bancario copiado."));
      } catch {
        showToast(t("No se pudo copiar automáticamente."));
      }
    });

    let scrollTicking = false;

    function handleScrollFrame() {
      if (envelopeScrollRevealActive) {
        updateEnvelopeScrollReveal();
        scrollTicking = false;
        return;
      }
      revealOnScroll();
      updateFloatingButtons();
      updateSmartBackgroundLayout();
      updateAppleHeroScroll();
      updateEnvelopeScrollReveal();
      scrollTicking = false;
    }

    updateCountdown();
    revealOnScroll();
    updateFloatingButtons();
    updateAppleHeroScroll();
    const cleanupParticles = initParticles();
    initLightProtection();
    updateOverlayScale();

    const countdownTimer = window.setInterval(updateCountdown, 1000);
	    window.addEventListener("resize", () => {
	      updateOverlayScale();
	      updateSmartBackgroundLayout();
	      updateAppleHeroScroll();
	    }, { passive: true });
	    window.visualViewport?.addEventListener("resize", () => {
	      updateOverlayScale();
	      updateAppleHeroScroll();
	    }, { passive: true });
	    window.addEventListener("scroll", () => {
      if (scrollTicking) return;
      scrollTicking = true;
	      requestAnimationFrame(handleScrollFrame);
	    }, { passive: true });

    window.addEventListener("pagehide", () => {
	      window.clearInterval(countdownTimer);
	      if (typeof cleanupParticles === "function") cleanupParticles();
	    }, { once: true });
})();
