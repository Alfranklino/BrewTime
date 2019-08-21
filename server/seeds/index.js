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
    time: "2019-07-25 10:00:00",
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
    caption: "Pictures of Shitty Wine",
    description:
      "De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.",
    name: "Shitty Wine",
    dimension_id: 1,
    price: 200,
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
    image_id: 1
  },
  {
    product_id: 1,
    image_id: 2
  },
  {
    product_id: 1,
    image_id: 3
  },
  {
    product_id: 1,
    image_id: 4
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
