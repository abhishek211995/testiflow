<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Class Testiflow_Run
 *
 * Thats where we bring the plugin to life
 *
 * @package		TESTIFLOW
 * @subpackage	Classes/Testiflow_PostType
 * @author		Abhishek Potdar
 * @since		1.0.0
 */


class Testiflow_PostType {
	public function tf_register_testimonial_post_type(){
        $labels = array(
            'name'                  => _x( 'Testimonials', 'Post Type General Name', 'testiflow' ),
            'singular_name'         => _x( 'Testimonial', 'Post Type Singular Name', 'testiflow' ),
            'menu_name'             => __( 'Testiflow', 'testiflow' ),
            'name_admin_bar'        => __( 'Testiflow', 'testiflow' ),
            'archives'              => __( 'Testimonial Archives', 'testiflow' ),
            'attributes'            => __( 'Testimonial Attributes', 'testiflow' ),
            'parent_item_colon'     => __( 'Parent Testimonial:', 'testiflow' ),
            'all_items'             => __( 'All Testimonials', 'testiflow' ),
            'add_new_item'          => __( 'Add New Testimonial', 'testiflow' ),
            'add_new'               => __( 'Add Testimonial', 'testiflow' ),
            'new_item'              => __( 'New Testimonial', 'testiflow' ),
            'edit_item'             => __( 'Edit Testimonial', 'testiflow' ),
            'update_item'           => __( 'Update Testimonial', 'testiflow' ),
            'view_item'             => __( 'View Testimonial', 'testiflow' ),
            'view_items'            => __( 'View Testimonial', 'testiflow' ),
            'search_items'          => __( 'Search Testimonial', 'testiflow' ),
            'not_found'             => __( 'Testimonials Not found', 'testiflow' ),
            'not_found_in_trash'    => __( 'Not found in Trash', 'testiflow' ),
            'featured_image'        => __( 'Testimonial Image', 'testiflow' ),
            'set_featured_image'    => __( 'Set Testimonial image', 'testiflow' ),
            'remove_featured_image' => __( 'Remove Testimonial image', 'testiflow' ),
            'use_featured_image'    => __( 'Use as Testimonial image', 'testiflow' ),
            'insert_into_item'      => __( 'Insert into Testimonial', 'testiflow' ),
            'uploaded_to_this_item' => __( 'Uploaded to this Testimonial', 'testiflow' ),
            'items_list'            => __( 'Testimonials list', 'testiflow' ),
            'items_list_navigation' => __( 'Testimonials list navigation', 'testiflow' ),
            'filter_items_list'     => __( 'Filter Testimonials list', 'testiflow' ),
        );
        $args = array(
            'label'                 => __( 'Testimonial', 'testiflow' ),
            'description'           => __( 'Post Type Description', 'testiflow' ),
            'labels'                => $labels,
            'supports'              => array( 'title', 'editor', 'thumbnail' ),
            'hierarchical'          => false,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'menu_position'         => 5,
            'show_in_admin_bar'     => true,
            'show_in_nav_menus'     => true,
            'query_var'             => true,
            'rewrite'            => [
                'slug' => 'tf_testimonials',
            ],
            'can_export'            => true,
            'has_archive'           => true,
            'exclude_from_search'   => false,
            'publicly_queryable'    => true,
            'capability_type'       => 'page',
            'show_in_rest'          => true,
        );
        register_post_type( 'tf_testimonials', $args );
        if(get_option('testiflow_permalinks_flushed') == 'no'){
            flush_rewrite_rules();
            update_option('testiflow_permalinks_flushed', 'yes');
        }       
    }
}