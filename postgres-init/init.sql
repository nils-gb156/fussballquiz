-- Table: public.players

-- DROP TABLE IF EXISTS public.players;

CREATE TABLE IF NOT EXISTS public.players
(
    id serial NOT NULL,
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    created date,
    CONSTRAINT players_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.players
    OWNER to postgres;

INSERT INTO public.players (name, created) VALUES ('test', now());