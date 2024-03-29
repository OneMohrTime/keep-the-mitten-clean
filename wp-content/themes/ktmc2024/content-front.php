<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package storefront
 */

$banner = get_field('homepage_banner');
$bannerHeadline = $banner['headline'];
$bannerTagline = $banner['tagline'];
$bannerBtn1 = $banner['primary_button'];
$bannerBtn2 = $banner['secondary_button'];
$bannerBg = $banner['background_image'];
$slideshow = get_field('homepage_slideshow');
$slideshow_size = 'large'; // (thumbnail, medium, large, full or custom size)
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <?php if($slideshow): ?>
        <section class="banner">

        </section>
    <?php endif; ?>
    <?php if($slideshow): ?>
    <section class="swiper" data-module-slideshow>
        <ul class="swiper-wrapper">
            <?php foreach( $slideshow as $image ): ?>
                <li class="swiper-slide">
                    <img src="<?php echo esc_url($image['sizes']['thumbnail']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
                </li>
            <?php endforeach; ?>
        </ul>
    </section>
    <?php endif; ?>
</article>
