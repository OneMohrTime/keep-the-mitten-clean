<?php
/**
 * Template part for displaying site info
 *
 * @package Bosa Storefront 1.0.0
 */

?>

<div class="site-info">
	<?php echo wp_kses_post( html_entity_decode( esc_html__( 'Copyright &copy; ' , 'bosa-storefront' ) ) );
		echo esc_html( date( 'Y' ) );
		printf( esc_html__( ' Bosa Storefront. Powered by', 'bosa-storefront' ) );
	?>
	<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'bosa-storefront' ) ); ?>" target="_blank">
		<?php
			printf( esc_html__( 'WordPress', 'bosa-storefront' ) );
		?>
	</a>
</div><!-- .site-info -->