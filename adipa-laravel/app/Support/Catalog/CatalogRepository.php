<?php

namespace App\Support\Catalog;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class CatalogRepository
{
    protected function data(string $file): array
    {
        return require app_path('Support/Catalog/Data/' . $file . '.php');
    }

    public function featuredTags(): array
    {
        return $this->data('featured_tags');
    }

    public function filterGroups(): array
    {
        return $this->data('filter_groups');
    }

    public function headerNavDesktop(): array
    {
        return $this->data('header_nav_desktop');
    }

    public function headerNavMobile(): array
    {
        return $this->data('header_nav_mobile');
    }

    public function recursosSubItems(): array
    {
        return $this->data('recursos_sub_items');
    }

    public function descubreAdipaItems(): array
    {
        return $this->data('descubre_adipa_items');
    }

    public function footer(): array
    {
        return $this->data('footer');
    }

    public function faqItems(): array
    {
        return $this->data('faq_items');
    }

    public function courses(): array
    {
        return array_map(function (array $course) {
            $course['id'] = Arr::get($course, 'id', Str::slug($course['title']));
            $course['price_value'] = (int) preg_replace('/\D+/', '', $course['price']);
            [$day, $month, $year] = array_map('intval', explode('/', $course['start_date']));
            $course['start_date_value'] = mktime(0, 0, 0, $month, $day, $year);

            return $course;
        }, $this->data('courses'));
    }

    public function courseMap(): array
    {
        $map = [];

        foreach ($this->courses() as $course) {
            $map[$course['id']] = $course;
        }

        return $map;
    }

    public function findCourse(string $id): ?array
    {
        return $this->courseMap()[$id] ?? null;
    }
}
