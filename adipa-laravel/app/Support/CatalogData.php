<?php

namespace App\Support;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class CatalogData
{
    public static function courses(): array
    {
        return array_map(function (array $course) {
            $course['id'] = Arr::get($course, 'id', Str::slug($course['title']));
            $course['price_value'] = (int) preg_replace('/\D+/', '', $course['price']);
            [$day, $month, $year] = array_map('intval', explode('/', $course['start_date']));
            $course['start_date_value'] = mktime(0, 0, 0, $month, $day, $year);

            return $course;
        }, config('catalog.courses', []));
    }

    public static function courseMap(): array
    {
        $map = [];

        foreach (self::courses() as $course) {
            $map[$course['id']] = $course;
        }

        return $map;
    }

    public static function findCourse(string $id): ?array
    {
        return self::courseMap()[$id] ?? null;
    }

    public static function cartCourses(array $ids): array
    {
        $map = self::courseMap();

        return array_values(array_filter(array_map(fn ($id) => $map[$id] ?? null, $ids)));
    }

    public static function cartSummary(array $ids): array
    {
        $courses = self::cartCourses($ids);
        $total = array_sum(array_column($courses, 'price_value'));

        return [
            'items' => $courses,
            'count' => count($courses),
            'total' => $total,
            'total_formatted' => '$' . number_format($total, 0, ',', '.') . ' COP',
        ];
    }
}
