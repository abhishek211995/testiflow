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

class Testiflow_Database{

    public function tf_create_table(){
        global $wpdb;
        $db_version = TESTIFLOW_DB_VERSION;
        $current_version = get_option('tf_testimonial_db_version');


        if($db_version != $current_version && isset($current_version)){
            
            $table_name = $wpdb->prefix . 'tf_testimonials_views';
            
            $charset_collate = $wpdb->get_charset_collate();


            $sql = "CREATE TABLE $table_name (
                id mediumint(50) NOT NULL AUTO_INCREMENT,
                tf_testimonials_settings json NOT NULL,
                added_date varchar(50) DEFAULT NULL,
                updated_date varchar(50) DEFAULT NULL,
                PRIMARY KEY (id)
            ) $charset_collate;";

            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
            dbDelta( $sql );

            update_option( 'tf_testimonial_db_version', $db_version );
        }
    }
}