<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Class Testiflow_Run
 *
 * Thats where we bring the plugin to life
 *
 * @package		TESTIFLOW
 * @subpackage	Classes/Testiflow_Admin
 * @author		Abhishek Potdar
 * @since		1.0.0
 */

 class Testiflow_Admin{
    function __construct(){
        
        $this->tf_include_admin_files();

        new Testiflow_Meta();
        
		add_action('admin_enqueue_scripts', array($this, 'tf_register_admin_scripts'), 1);
        add_action('init', array($this, 'tf_register_testimonial_post_type'), 0);
        add_action( 'admin_menu', array($this, 'tf_add_admin_menu'));

        add_filter('use_block_editor_for_post_type', array($this, 'tf_disable_gutenberg_editor_for_custom_post_type'), 10, 2);
	}

    public function preload(){
        
    }

    public function tf_include_admin_files(){
        require_once TESTIFLOW_PLUGIN_DIR . 'core/admin/classes/Meta.php';
        require_once TESTIFLOW_PLUGIN_DIR . 'core/admin/classes/DB.php';
    }

    public function tf_register_admin_scripts(){

        wp_register_script('testiflow-admin', TESTIFLOW_PLUGIN_URL.'core/admin/js/testiflow-main.js', array('jquery'), TESTIFLOW_FILE_VERSION);
        wp_localize_script( 'testiflow-admin', 'tfadminVars',
            array( 
                'admin_images_path' => TESTIFLOW_PLUGIN_URL.'core/admin/images/',
            )
        );
        wp_enqueue_script('testiflow-admin');

        $current_screen = get_current_screen();

	    if ( $current_screen->id == 'tf_testimonials_page_tf_shortcodes' ) {
		    wp_enqueue_script('react-settings-page-menu-options', TESTIFLOW_PLUGIN_URL . 'build/index.js', array('wp-element', 'wp-api-fetch'), TESTIFLOW_FILE_VERSION, true);
            wp_enqueue_style( 'react-settings-page-menu-options', TESTIFLOW_PLUGIN_URL.'build/index.css', array('wp-components'), TESTIFLOW_FILE_VERSION, 'all' );
        }

        wp_enqueue_script( 'testiflow-raty', TESTIFLOW_PLUGIN_URL.'core/admin/js/jquery.raty.js', array('jquery'), TESTIFLOW_FILE_VERSION );
        wp_enqueue_style( 'testiflow-raty', TESTIFLOW_PLUGIN_URL.'core/admin/css/jquery.raty.css', array(), TESTIFLOW_FILE_VERSION );
        wp_enqueue_style( 'testiflow-admin', TESTIFLOW_PLUGIN_URL.'core/admin/css/testiflow-plugin.css', array(), TESTIFLOW_FILE_VERSION );
        //wp_enqueue_script( 'testiflow-admin', TESTIFLOW_PLUGIN_URL.'core/admin/js/testiflow-main.js', array('jquery', 'testiflow-raty'), TESTIFLOW_FILE_VERSION );

    }

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

    public function tf_disable_gutenberg_editor_for_custom_post_type($use_block_editor, $post_type) {
        if ($post_type === 'tf_testimonials') {
            return false;
        }
        return $use_block_editor;
    }

    public function tf_add_admin_menu() {
        add_submenu_page(
            'edit.php?post_type=tf_testimonials',
            __( 'Generate Shortcode', 'testiflow' ),
            __( 'Shortcodes', 'testiflow' ),
            'manage_options',
            'tf_shortcodes',
            array($this, 'tf_shortcode_settings_page_display')
        );
    }

    public function tf_shortcode_settings_page_display() {
        include_once(TESTIFLOW_PLUGIN_DIR . 'core/admin/views/GenerateShortcodes.php');
    }

 }