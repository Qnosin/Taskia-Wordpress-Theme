<?php 

function TaskiaStyles(){
    //register
    wp_register_style('css', get_template_directory_uri() . '/css/main.css');
    //ading
    wp_enqueue_style('css');
    
}


add_action('wp_enqueue_scripts','TaskiaStyles');
add_filter( 'show_admin_bar', '__return_false' );