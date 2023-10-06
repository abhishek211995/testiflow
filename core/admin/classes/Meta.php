<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Class Testiflow_Run
 *
 * Thats where we bring the plugin to life
 *
 * @package		TESTIFLOW
 * @subpackage	Classes/Testiflow_Meta
 * @author		Abhishek Potdar
 * @since		1.0.0
 */

class Testiflow_Meta{
    function __construct(){
        add_action( 'add_meta_boxes', [ $this, 'tf_add_meta_boxes' ] );
        add_action( 'save_post', [ $this, 'tf_save_metafields' ], 99, 3 );
    }

    public function tf_add_meta_boxes($post_type){

		$post_types = array( 'tf_testimonials' );

		if ( in_array( $post_type, $post_types ) ) {
			add_meta_box(
				'tf_user_testimonial_details',
				__( 'Testimonial Details', 'testiflow' ),
				array( $this, 'tf_render_metafields' ),
				$post_type,
				'advanced',
				'high'
			);
		}
    }

    public function tf_metafields_array(){
        $meta_array = array(
            array(
                'name' => 'tf_testimonial_rating',
                'label' => 'Rating',
                'id' => 'tf_testimonial_rating',
                'class' => '',
                'type' => 'rating'
            ),
            array(
                'name' => 'tf_testimonial_name',
                'label' => 'Name',
                'id' => 'tf_testimonial_name',
                'class' => '',
                'type' => 'text'
            ),
            array(
                'name' => 'tf_testimonial_designation',
                'label' => 'Designation',
                'id' => 'tf_testimonial_designation',
                'class' => '',
                'type' => 'text'
            ),            
            array(
                'name' => 'tf_testimonial_email',
                'label' => 'Email',
                'id' => 'tf_testimonial_email',
                'class' => '',
                'type' => 'email'
            ),
        );

        return $meta_array;
    }

    public static function render_input_meta_fields($data, $value){
        switch ($data['type']){
            case 'text':
                echo '<div class="tf_form_field_wrap">
                    <label for="'.esc_attr($data['id']).'">
                        '.esc_html( __( $data['label'] , 'testiflow' ) ).'
                    </label>
                    <input type="text" class="tf_form_field tf_form_field_text"
                    id="'.esc_attr($data['id']).'" name="'.esc_attr($data['name']).'"
                    value="'.esc_attr( $value ).'" />
                    </div>';
            break;
            case 'email':
                echo '<div class="tf_form_field_wrap">
                    <label for="'.esc_attr($data['id']).'">
                        '.esc_html( __( $data['label'] , 'testiflow' ) ).'
                    </label>
                    <input type="email" class="tf_form_field tf_form_field_text"
                    id="'.esc_attr($data['id']).'" name="'.esc_attr($data['name']).'"
                    value="'.esc_attr( $value ).'" />
                    </div>';
            break;
            case 'rating':
                echo '<div class="tf_form_field_wrap">
                <label for="">Rating</label>
                <div class="tf_rating" data-score-name="'.$data['name'].'" data-score="'.$value.'"></div></div>';
                break;
            default: 
                echo 'No Input Type found';
        }
    }

    public function tf_render_metafields($post){

		wp_nonce_field( 'tf_testimonials_details', 'tf_testimonials_details_nonce' );

        $metafield_array = $this->tf_metafields_array();

        foreach($metafield_array as $m_array){
            $value = get_post_meta( $post->ID, $m_array['name'], true );
            self::render_input_meta_fields($m_array, $value);
        }
    }

    public function tf_save_metafields($post_id, $post, $update){

        if ( 'tf_testimonials' !== $post->post_type ) return;

        $metafield_array = $this->tf_metafields_array();
        foreach($metafield_array as $m_array){
            $post_value = (isset($_POST[$m_array['name']])) ? sanitize_text_field($_POST[$m_array['name']]) : '';
            update_post_meta( $post_id, $m_array['name'], $post_value );
        }
        

    }
}