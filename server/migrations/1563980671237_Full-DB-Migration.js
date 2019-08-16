exports.up = pgm => {
  //1. Breweries Table
  pgm.sql(`
    CREATE TABLE "brewtime"."breweries" (
      "id" SERIAL PRIMARY KEY,
      "name" TEXT UNIQUE NOT NULL
    );
  `),
    //2. Descriptions Table
    pgm.sql(`
    CREATE TABLE "brewtime"."descriptions" (
      "id" SERIAL PRIMARY KEY,
      "description" TEXT NOT NULL,
      "dorder" INTEGER NOT NULL,
      "brewery_id" INTEGER REFERENCES breweries(id)
    );
  `),
    //3. Regions Table
    pgm.sql(`
    CREATE TABLE "brewtime"."maps" (
      "id" SERIAL PRIMARY KEY,
      "latitude" NUMERIC(8, 5) NOT NULL,
      "longitude" NUMERIC(8, 5) NOT NULL,
      "latitudedelta" NUMERIC(6, 4) NOT NULL,
      "longitudedelta" NUMERIC(6, 4) NOT NULL,
      "brewery_id" INTEGER REFERENCES breweries(id)
    );
  `),
    //4. Locations Table
    pgm.sql(`
    CREATE TABLE "brewtime"."locations" (
      "id" SERIAL PRIMARY KEY,
      "address" TEXT NOT NULL,
      "description" TEXT,
      "latitude" NUMERIC(8, 5) NOT NULL,
      "longitude" NUMERIC(8, 5) NOT NULL,
      "map_id" INTEGER REFERENCES maps(id) NOT NULL
    );
  `),
    //5. Bookings Table
    pgm.sql(`
    CREATE TABLE "brewtime"."bookings" (
      "id" SERIAL PRIMARY KEY,
      "title" TEXT NOT NULL,
      "description" TEXT NOT NULL,
      "location_id" INTEGER REFERENCES locations(id) NOT NULL,
      "guide" TEXT NOT NULL,
      "time" TIMESTAMP NOT NULL,
      "brewery_id" INTEGER REFERENCES breweries(id)
    );
  `),
    //4. Images Table
    pgm.sql(`
    CREATE TABLE "brewtime"."images" (
      "id" SERIAL PRIMARY KEY,
      "uri" TEXT NOT NULL,
      "description" TEXT NOT NULL,
      "width" INTEGER NOT NULL,
      "height" INTEGER NOT NULL
    );
  `),
    //Dimensions Table
    pgm.sql(`
    CREATE TABLE "brewtime"."dimensions" (
      "id" SERIAL PRIMARY KEY,
      "height" NUMERIC(5,2) NOT NULL,
      "length" NUMERIC(5,2) NOT NULL,
      "weight" NUMERIC(5,2) NOT NULL,
      "width" NUMERIC(5,2) NOT NULL
    );
  `),
    //5. Products Table
    pgm.sql(`
    CREATE TABLE "brewtime"."products" (
      "id" SERIAL PRIMARY KEY,
      "object" TEXT NOT NULL DEFAULT 'product',
      "active" BOOLEAN DEFAULT false,
      "caption" TEXT,
      "created" TIMESTAMP NOT NULL DEFAULT NOW(),
      "deactivate_on" TIMESTAMP,
      "description" TEXT NOT NULL,
      "livemode" BOOLEAN DEFAULT false,
      "name" TEXT NOT NULL,
      "dimension_id" INTEGER REFERENCES dimensions(id),
      "shippable" BOOLEAN DEFAULT false,
      "updated" TIMESTAMP NOT NULL DEFAULT NOW(),
      "price" INTEGER NOT NULL,
      "brewery_id" INTEGER REFERENCES breweries(id)
    );
  `),
    //Metadata Table
    pgm.sql(`
    CREATE TABLE "brewtime"."metadata" (
      "id" SERIAL PRIMARY KEY,
      "order_id" INTEGER NOT NULL DEFAULT (floor(random()*(9999-1000+1))+1000),
      "product_id" INTEGER NOT NULL REFERENCES products(id)
    );
  `),
    //Brewery Images Join Table
    pgm.sql(`
    CREATE TABLE "brewtime"."breweries_images" (
      "brewery_id" INTEGER REFERENCES breweries(id),
      "image_id" INTEGER REFERENCES images(id)
    );
  `),
    //Bookings Images Join Table
    pgm.sql(`
    CREATE TABLE "brewtime"."bookings_images" (
      "booking_id" INTEGER REFERENCES bookings(id),
      "image_id" INTEGER REFERENCES images(id)
    );
  `),
    //Products Images Join Table
    pgm.sql(`
    CREATE TABLE "brewtime"."products_images" (
      "product_id" INTEGER REFERENCES products(id),
      "image_id" INTEGER REFERENCES images(id)
    );
  `)
}
