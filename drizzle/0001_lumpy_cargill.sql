ALTER TABLE "uits" RENAME TO "units";--> statement-breakpoint
ALTER TABLE "lessons" DROP CONSTRAINT "lessons_unit_id_uits_id_fk";
--> statement-breakpoint
ALTER TABLE "units" DROP CONSTRAINT "uits_courseId_courses_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "lessons" ADD CONSTRAINT "lessons_unit_id_units_id_fk" FOREIGN KEY ("unit_id") REFERENCES "public"."units"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "units" ADD CONSTRAINT "units_courseId_courses_id_fk" FOREIGN KEY ("courseId") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
