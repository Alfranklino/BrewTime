const { Pool } = require("pg");
const squel = require("squel").useFlavour("postgres");
const config = require("../config/default.json");

const breweriesSeeds = [
  {
    name: "Red Autumn"
  }
];

const descriptionsSeeds = [
  {
    description:
      "Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis.",
    dorder: 1,
    brewery_id: 1
  },
  {
    description:
      "Whyt zomby Ut fames after death cerebro virus enim carnis grusome, viscera et organa viventium.",
    dorder: 2,
    brewery_id: 1
  },
  {
    description:
      "Avium, brains guts, ghouls, unholy canum, fugere ferae et infecti horrenda monstra.",
    dorder: 3,
    brewery_id: 1
  }
];

const mapsSeeds = [
  {
    latitude: 43.644,
    longitude: -79.39993,
    latitudedelta: 0.001757,
    longitudedelta: 0.003866,
    brewery_id: 1
  }
];

const locationsSeeds = [
  {
    address: "462 Wellington St W #101, Toronto, ON M5V 1E3",
    description:
      "Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis.",
    latitude: 43.644,
    longitude: -79.39993,
    map_id: 1
  },
  {
    address: "520 Wellington St W, Toronto, ON M5V 1E3",
    description:
      "Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis.",
    latitude: 43.64331,
    longitude: -79.40156,
    map_id: 1
  },
  {
    address: "609 King St W, Toronto, ON M5V 1M5",
    description:
      "Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis.",
    latitude: 43.64411,
    longitude: -79.40289,
    map_id: 1
  }
];

const bookingsSeeds = [
  {
    title: "Brewery Tour",
    description:
      "Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.",
    location_id: 3,
    guide: "Simon Stern",
    time: "2019-08-25 10:00:00",
    brewery_id: 1
  },
  {
    title: "Brewery Tour",
    description:
      "Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.",
    location_id: 3,
    guide: "Will 6ix",
    time: "2019-08-25 10:00:00",
    brewery_id: 1
  },
  {
    title: "Brewery Tour",
    description:
      "Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.",
    location_id: 3,
    guide: "Difranklino",
    time: "2019-08-25 10:00:00",
    brewery_id: 1
  },
  {
    title: "Brewery Tour",
    description:
      "Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.",
    location_id: 3,
    guide: "Eunice Queen",
    time: "2019-09-15 10:00:00",
    brewery_id: 1
  },
  {
    title: "Brewery Tour",
    description:
      "Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.",
    location_id: 3,
    guide: "Kylian Aymrick",
    time: "2019-09-18 10:00:00",
    brewery_id: 1
  },
  {
    title: "Brewery Tour",
    description:
      "Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.",
    location_id: 3,
    guide: "Timon Pumba",
    time: "2019-09-18 10:00:00",
    brewery_id: 1
  },
  {
    title: "Brewery Tour",
    description:
      "Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.",
    location_id: 3,
    guide: "Simon Stern",
    time: "2019-09-10 10:00:00",
    brewery_id: 1
  },
  {
    title: "Brewery Tour",
    description:
      "Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.",
    location_id: 3,
    guide: "AlCom",
    time: "2019-09-12 10:00:00",
    brewery_id: 1
  },
  {
    title: "Brewery Tour",
    description:
      "Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.",
    location_id: 3,
    guide: "Privero",
    time: "2019-09-20 10:00:00",
    brewery_id: 1
  },
  {
    title: "Brewery Tour",
    description:
      "Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.",
    location_id: 3,
    guide: "Hero Banner",
    time: "2019-09-24 10:00:00",
    brewery_id: 1
  }
];

const imagesSeeds = [
  {
    uri:
      "https://images.squarespace-cdn.com/content/v1/5825e780ff7c50364e59d2ef/1565963290824-XK75PPACHJH81U8O2G50/ke17ZwdGBToddI8pDm48kEpVg-ILAPna1wRh-xAJ9fRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEv36x-EUL2-BSQ5feDhwGCbXuJBFqZ-erYzVouT8yOb9TwqchglLQOCYTRn7ZGxI/image-asset.jpeg?format=300w",
    description:
      "Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.",
    width: 480,
    height: 480
  },
  {
    uri:
      "https://images.squarespace-cdn.com/content/v1/5825e780ff7c50364e59d2ef/1564692935867-7B8GZZV8BD5I4T6MV4G4/ke17ZwdGBToddI8pDm48kHem505q6McQd8XRhQc9zkRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxpEURhgSBEh9ILe0HKIG3CcOCklsxWwam3CdWF6Xw7jwVv5P97BEtB5XaVnmvMtTA/image-asset.jpeg?format=300w",
    description:
      "Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.",
    width: 480,
    height: 480
  },
  {
    uri:
      "https://images.squarespace-cdn.com/content/v1/5825e780ff7c50364e59d2ef/1564090327009-TSCVT18HNM77FL24SWVS/ke17ZwdGBToddI8pDm48kHem505q6McQd8XRhQc9zkRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxpEURhgSBEh9ILe0HKIG3CcOCklsxWwam3CdWF6Xw7jwVv5P97BEtB5XaVnmvMtTA/image-asset.jpeg?format=300w",
    description:
      "Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.",
    width: 480,
    height: 480
  },
  {
    uri:
      "https://images.squarespace-cdn.com/content/v1/5825e780ff7c50364e59d2ef/1565665217930-2KEM1Q3O7KA1P73316AJ/ke17ZwdGBToddI8pDm48kICZhzhlpkTfZgBvAXFSxyhZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw5opcnmBGTrSvl2qRMpP26yA6cXWreZBPZk6SUOsPorfERqjnAqscnEdqlY2BJvs0/image-asset.jpeg?format=300w",
    description:
      "Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead.",
    width: 480,
    height: 480
  },
  // ========== Products ==========
  {
    uri:
      "https://images.squarespace-cdn.com/content/v1/5825e780ff7c50364e59d2ef/1541618480852-LH63PEV4EYXFN0N34R29/ke17ZwdGBToddI8pDm48kHxzJ8UlFjC3o-foiNqh4qZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Uf6p9FyzJf3poAQBSJviksB6VgYnlO70ozsr6VJpQDoaFqn2fz-xtOXAAFF7WvTPzw/KZAN3783.JPG?format=2500w",
    description: "Green Suede 5-Panel - Img Product - 35",
    width: 480,
    height: 480
  },
  {
    uri:
      "https://images.squarespace-cdn.com/content/v1/5825e780ff7c50364e59d2ef/1541621794968-O8OXOW5YR1GUCOV0H04P/ke17ZwdGBToddI8pDm48kJUUe_qDBAZLGkrq3WFUu3x7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmoJKo7K7P-K3iDKcb1IjyB53ZD2zOfo9yPQP967I175VYUOh9Kqzs9--VGcYxQ0wg/XBOG3002.JPG?format=1500w",
    description: "Shoreman Toque - Img Product - 25",
    width: 480,
    height: 480
  },
  {
    uri:
      "https://images.squarespace-cdn.com/content/v1/5825e780ff7c50364e59d2ef/1541625169032-TXKAKWG5S59JB9HK28MN/ke17ZwdGBToddI8pDm48kEdZcfxD36xQA3tfSwCujg97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQ0yxE2agH-gxyYDIM5c4QtrjcohhtGycMte29eszwi2St77TItKBW4w6acZtl3b0Q/RHWR9502.JPG?format=2500w",
    description: "Session Seven Tee - Img Product - 19.92",
    width: 480,
    height: 480
  },
  {
    uri:
      "https://images.squarespace-cdn.com/content/v1/5825e780ff7c50364e59d2ef/1541627826003-QJ18B54LJKLJW1F0GPDT/ke17ZwdGBToddI8pDm48kC7D0V8n_Z2Ps9j4SJMrV617gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQvacxd9SkFpE46xU8HfDtcjIQqepWtKEsSpVWWapo8dqXhizW0eHxlc5z4ij1SDig/CXYX2090.JPG?format=1500w",
    description: "20oz Pint Glass - Img Product - 5",
    width: 480,
    height: 480
  },
  {
    uri:
      "https://images.squarespace-cdn.com/content/v1/5825e780ff7c50364e59d2ef/1541697132561-962XYQ49IESDE6ZF1Y6V/ke17ZwdGBToddI8pDm48kAT0Ao5b1FUgz3y6qshUlI4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKckaxbhYsh71oqRMc1KyRRiWOZSje9PMnkOfv4IN4jVeZVxWfpAtXZvtaRvb-ke9d1/VPZG5635+%281%29.JPG?format=2500w",
    description: "Tall-Boy Koozie - Img Product - 5",
    width: 480,
    height: 480
  },
  {
    uri:
      "https://images.squarespace-cdn.com/content/v1/5825e780ff7c50364e59d2ef/1566487855905-EIEULJQ6QMUM5JIZSM4K/ke17ZwdGBToddI8pDm48kBUDAxm-FLUF-OJf9moK1kV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UT_TXfTUFcrrnRvtinoH4JYxq5g0UB9t65pVePltZrd1IKYY7Qu0iTZQJ-GJ4dsqLQ/IMG-0006.jpg?format=1500w",
    description: "Hibiscus Tradesman Hat - Img Product - 29.95",
    width: 480,
    height: 480
  },
  {
    uri:
      "https://images.squarespace-cdn.com/content/v1/5825e780ff7c50364e59d2ef/1541701056018-GO7JUMUFUV0598BIX2TT/ke17ZwdGBToddI8pDm48kKWzpxfEaHoHPfNTefRoCCYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKchloAJiSerj51aOf0YpPiKtsGlPqkLawK7CM5eg608PtdN2ERVeNjiPAiFoZzhaMw/YLGD8753+%281%29.JPG?format=2500w",
    description: "Beer Soap - Img Product - 5.50",
    width: 480,
    height: 480
  }
];

const dimensionsSeeds = [
  {
    height: 19.0,
    length: 15.0,
    weight: 32.0,
    width: 15.0
  }
];

const productsSeeds = [
  {
    caption: "Pictures of Green Suede 5",
    description:
      "De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.",
    name: "Green Suede 5",
    dimension_id: 1,
    price: 35.0,
    brewery_id: 1
  },
  {
    caption: "Pictures of Shoreman Toque",
    description:
      "De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.",
    name: "Shoreman Toque",
    dimension_id: 1,
    price: 25.5,
    brewery_id: 1
  },
  {
    caption: "Pictures of Session Seven Tee",
    description:
      "De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.",
    name: "Session Seven Tee",
    dimension_id: 1,
    price: 19.92,
    brewery_id: 1
  },
  {
    caption: "Pictures of 20oz Pint Glass",
    description:
      "De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.",
    name: "20oz Pint Glass",
    dimension_id: 1,
    price: 5.0,
    brewery_id: 1
  },
  {
    caption: "Pictures of Tall-Boy Koozie",
    description:
      "De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.",
    name: "Tall-Boy Koozie",
    dimension_id: 1,
    price: 5.0,
    brewery_id: 1
  },
  {
    caption: "Pictures of Hibiscus Tradesman Hat",
    description:
      "De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.",
    name: "Hibiscus Tradesman Hat",
    dimension_id: 1,
    price: 29.95,
    brewery_id: 1
  },
  {
    caption: "Pictures of Beer Soap",
    description:
      "De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.",
    name: "Beer Soap",
    dimension_id: 1,
    price: 5.5,
    brewery_id: 1
  }
];

const metadataSeeds = [{ product_id: 1 }];

const breweriesImagesSeeds = [
  {
    brewery_id: 1,
    image_id: 1
  },
  {
    brewery_id: 1,
    image_id: 2
  },
  {
    brewery_id: 1,
    image_id: 3
  },
  {
    brewery_id: 1,
    image_id: 4
  }
];

const bookingsImagesSeeds = [
  {
    booking_id: 1,
    image_id: 1
  },
  {
    booking_id: 1,
    image_id: 2
  },
  {
    booking_id: 1,
    image_id: 3
  },
  {
    booking_id: 1,
    image_id: 4
  }
];

const productsImagesSeeds = [
  {
    product_id: 1,
    image_id: 5
  },
  {
    product_id: 2,
    image_id: 6
  },
  {
    product_id: 3,
    image_id: 7
  },
  {
    product_id: 4,
    image_id: 8
  },
  {
    product_id: 5,
    image_id: 9
  },
  {
    product_id: 6,
    image_id: 10
  },
  {
    product_id: 7,
    image_id: 11
  }
];

const seed = async () => {
  const pg = await new Pool(config.db).connect();

  try {
    await pg.query("BEGIN");

    console.log("Seeding Breweries...");

    await Promise.all(
      breweriesSeeds.map(breweriesSeed =>
        pg.query(
          squel
            .insert()
            .into("brewtime.breweries")
            .setFields(breweriesSeed)
            .toParam()
        )
      )
    );

    console.log("Seeding Breweries... [DONE]");

    console.log("Seeding Descriptions...");

    await Promise.all(
      descriptionsSeeds.map(descriptionsSeed =>
        pg.query(
          squel
            .insert()
            .into("brewtime.descriptions")
            .setFields(descriptionsSeed)
            .toParam()
        )
      )
    );

    console.log("Seeding Descriptions... [DONE]");

    console.log("Seeding Maps...");

    await Promise.all(
      mapsSeeds.map(mapsSeed =>
        pg.query(
          squel
            .insert()
            .into("brewtime.maps")
            .setFields(mapsSeed)
            .toParam()
        )
      )
    );

    console.log("Seeding Maps... [DONE]");

    console.log("Seeding Locations...");

    await Promise.all(
      locationsSeeds.map(locationSeed =>
        pg.query(
          squel
            .insert()
            .into("brewtime.locations")
            .setFields(locationSeed)
            .toParam()
        )
      )
    );

    console.log("Seeding Locations... [DONE]");

    console.log("Seeding Bookings...");

    await Promise.all(
      bookingsSeeds.map(bookingsSeed =>
        pg.query(
          squel
            .insert()
            .into("brewtime.bookings")
            .setFields(bookingsSeed)
            .toParam()
        )
      )
    );

    console.log("Seeding Bookings... [DONE]");

    console.log("Seeding Images...");

    await Promise.all(
      imagesSeeds.map(imagesSeed =>
        pg.query(
          squel
            .insert()
            .into("brewtime.images")
            .setFields(imagesSeed)
            .toParam()
        )
      )
    );

    console.log("Seeding Images... [DONE]");

    console.log("Seeding Dimensions...");

    await Promise.all(
      dimensionsSeeds.map(dimensionsSeed =>
        pg.query(
          squel
            .insert()
            .into("brewtime.dimensions")
            .setFields(dimensionsSeed)
            .toParam()
        )
      )
    );

    console.log("Seeding Dimensions... [DONE]");

    console.log("Seeding Products...");

    await Promise.all(
      productsSeeds.map(productsSeed =>
        pg.query(
          squel
            .insert()
            .into("brewtime.products")
            .setFields(productsSeed)
            .toParam()
        )
      )
    );

    console.log("Seeding Products... [DONE]");

    console.log("Seeding Metadata...");

    await Promise.all(
      metadataSeeds.map(metadataSeed =>
        pg.query(
          squel
            .insert()
            .into("brewtime.metadata")
            .setFields(metadataSeed)
            .toParam()
        )
      )
    );

    console.log("Seeding Metadata... [DONE]");

    console.log("Seeding Brewery Images...");

    await Promise.all(
      breweriesImagesSeeds.map(breweriesImagesSeed =>
        pg.query(
          squel
            .insert()
            .into("brewtime.breweries_images")
            .setFields(breweriesImagesSeed)
            .toParam()
        )
      )
    );

    console.log("Seeding Brewery Images... [DONE]");

    console.log("Seeding Bookings Images...");

    await Promise.all(
      bookingsImagesSeeds.map(bookingsImagesSeed =>
        pg.query(
          squel
            .insert()
            .into("brewtime.bookings_images")
            .setFields(bookingsImagesSeed)
            .toParam()
        )
      )
    );

    console.log("Seeding Bookings Images... [DONE]");

    console.log("Seeding Products Images...");

    await Promise.all(
      productsImagesSeeds.map(productsImagesSeed =>
        pg.query(
          squel
            .insert()
            .into("brewtime.products_images")
            .setFields(productsImagesSeed)
            .toParam()
        )
      )
    );

    console.log("Seeding Products Images... [DONE]");

    await pg.query("COMMIT");
  } catch (e) {
    await pg.query("ROLLBACK");
    throw e;
  } finally {
    pg.release();
  }
};

seed().catch(e => {
  setImmediate(() => {
    throw e;
  });
});
