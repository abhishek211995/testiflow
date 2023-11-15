<?php
/**
 * Testiflow
 *
 * @package       TESTIFLOW
 * @author        Abhishek Potdar
 * @version       1.0.0
 *
 * @wordpress-plugin
 * Plugin Name:   Testiflow - Best Testimonials Slider / Carousel Plugin
 * Plugin URI:    https://www.purecss.co.in
 * Description:   Simple & Reliable Plugin to showcase testimonials using modern slider designs.
 * Version:       1.0.0
 * Author:        Abhishek Potdar
 * Author URI:    https://www.purecss.co.in
 * Text Domain:   testiflow
 * Domain Path:   /languages
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * HELPER COMMENT START
 * 
 * This file contains the main information about the plugin.
 * It is used to register all components necessary to run the plugin.
 * 
 * The comment above contains all information about the plugin 
 * that are used by WordPress to differenciate the plugin and register it properly.
 * It also contains further PHPDocs parameter for a better documentation
 * 
 * The function TESTIFLOW() is the main function that you will be able to 
 * use throughout your plugin to extend the logic. Further information
 * about that is available within the sub classes.
 * 
 * HELPER COMMENT END
 */

// Plugin name
define( 'TESTIFLOW_NAME', 'Testiflow' );

// Plugin version
define( 'TESTIFLOW_VERSION', '1.0.0' );

// Files Version
define('TESTIFLOW_FILE_VERSION', '1.0.0');

define('TESTIFLOW_DB_VERSION', '1.0.0');

// Plugin Root File
define( 'TESTIFLOW_PLUGIN_FILE', __FILE__ );

// Plugin base
define( 'TESTIFLOW_PLUGIN_BASE', plugin_basename( TESTIFLOW_PLUGIN_FILE ) );

// Plugin Folder Path
define( 'TESTIFLOW_PLUGIN_DIR',	plugin_dir_path( TESTIFLOW_PLUGIN_FILE ) );

// Plugin Folder URL
define( 'TESTIFLOW_PLUGIN_URL',	plugin_dir_url( TESTIFLOW_PLUGIN_FILE ) );

/**
 * Load the main class for the core functionality
 */
require_once TESTIFLOW_PLUGIN_DIR . 'core/class-testiflow.php';

/**
 * The main function to load the only instance
 * of our master class.
 *
 * @author  Abhishek Potdar
 * @since   1.0.0
 * @return  object|Testiflow
 */
function TESTIFLOW() {
	return Testiflow::instance();
}

TESTIFLOW();