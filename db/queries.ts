import { cache } from "react";
import db from "@/db/drizzle";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";
import { courses, userProgress } from "@/db/schema";

export const getUserProgress = cache(async () => {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    },
  });
  return data;
});

export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany();

  return data;
});

// create user progress whenever a course is clicked
export const getCourseById = cache(async (courseId: number) => {
  const data = await db.query.courses.findFirst({
    where: eq(courses.id, courseId),
    // populates units and courses
  });

  return data;
});
