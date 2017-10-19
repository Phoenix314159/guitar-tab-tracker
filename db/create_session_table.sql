create table "session" (
    id serial,
    "sid" varchar not null collate "default",
	"sess" json not null,
	"expire" timestamp(6) not null
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;
