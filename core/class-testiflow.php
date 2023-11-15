<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * HELPER COMMENT START
 * 
 * This is the main class that is responsible for registering
 * the core functions, including the files and setting up all features. 
 * 
 * To add a new class, here's what you need to do: 
 * 1. Add your new class within the following folder: core/includes/classes
 * 2. Create a new variable you want to assign the class to (as e.g. public $helpers)
 * 3. Assign the class within the instance() function ( as e.g. self::$instance->helpers = new Testiflow_Helpers();)
 * 4. Register the class you added to core/includes/classes within the includes() function
 * 
 * HELPER COMMENT END
 */

if ( ! class_exists( 'Testiflow' ) ) :

	/**
	 * Main Testiflow Class.
	 *
	 * @package		TESTIFLOW
	 * @subpackage	Classes/Testiflow
	 * @since		1.0.0
	 * @author		Abhishek Potdar
	 */
	final class Testiflow {

		private static $instance;
		public $helpers;
		public $settings;
		public $admin;
		public $db;

		/**
		 * Throw error on object clone.
		 *
		 * Cloning instances of the class is forbidden.
		 *
		 * @access	public
		 * @since	1.0.0
		 * @return	void
		 */
		public function __clone() {
			_doing_it_wrong( __FUNCTION__, __( 'You are not allowed to clone this class.', 'testiflow' ), '1.0.0' );
		}

		/**
		 * Disable unserializing of the class.
		 *
		 * @access	public
		 * @since	1.0.0
		 * @return	void
		 */
		public function __wakeup() {
			_doing_it_wrong( __FUNCTION__, __( 'You are not allowed to unserialize this class.', 'testiflow' ), '1.0.0' );
		}

		/**
		 * Main Testiflow Instance.
		 *
		 * Insures that only one instance of Testiflow exists in memory at any one
		 * time. Also prevents needing to define globals all over the place.
		 *
		 * @access		public
		 * @since		1.0.0
		 * @static
		 * @return		object|Testiflow	The one true Testiflow
		 */
		public static function instance() {
			if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Testiflow ) ) {
				self::$instance					= new Testiflow;
				self::$instance->base_hooks();
				self::$instance->includes();
				self::$instance->helpers		= new Testiflow_Helpers();
				self::$instance->settings		= new Testiflow_Settings();
				self::$instance->admin = new Testiflow_Admin();
				self::$instance->db = new Testiflow_Database();

				//Fire the plugin logic
				new Testiflow_Run();

				/**
				 * Fire a custom action to allow dependencies
				 * after the successful plugin setup
				 */
				do_action( 'TESTIFLOW/plugin_loaded' );
			}

			return self::$instance;
		}

		/**
		 * Include required files.
		 *
		 * @access  private
		 * @since   1.0.0
		 * @return  void
		 */
		private function includes() {
			require_once TESTIFLOW_PLUGIN_DIR . 'core/includes/classes/class-testiflow-helpers.php';
			require_once TESTIFLOW_PLUGIN_DIR . 'core/includes/classes/class-testiflow-settings.php';

			require_once TESTIFLOW_PLUGIN_DIR . 'core/includes/classes/class-testiflow-run.php';
			require_once TESTIFLOW_PLUGIN_DIR . 'core/admin/class-testiflow-admin.php';
		}

		/**
		 * Add base hooks for the core functionality
		 *
		 * @access  private
		 * @since   1.0.0
		 * @return  void
		 */
		private function base_hooks() {
			add_action( 'plugins_loaded', array( self::$instance, 'tf_plugins_loaded' ) );
			register_activation_hook( TESTIFLOW_PLUGIN_FILE, array( self::$instance, 'tf_plugin_activation' ) );
			
		}

		/**
		 * Loads the plugin language files.
		 *
		 * @access  public
		 * @since   1.0.0
		 * @return  void
		 */
		public function tf_plugins_loaded() {
			load_plugin_textdomain( 'testiflow', FALSE, dirname( plugin_basename( TESTIFLOW_PLUGIN_FILE ) ) . '/languages/' );
			$this->db->tf_create_table();
		}


		public function tf_plugin_activation() {
			add_option('testiflow_activated', 'yes');
			add_option('tf_testimonial_db_version', TESTIFLOW_DB_VERSION);
			add_option('testiflow_permalinks_flushed', 'no');
		}

		public function disable_gutenberg_editor_for_custom_post_type($use_block_editor, $post_type) {
			if ($post_type === 'tf_testimonials') {
				return false;
			}
			return $use_block_editor;
		}

	}

endif; // End if class_exists check.