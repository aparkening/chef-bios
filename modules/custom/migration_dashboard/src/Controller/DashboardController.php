<?php

namespace Drupal\migration_dashboard\Controller;

use Drupal\Core\Controller\ControllerBase;
// use Symfony\Component\HttpFoundation\Response;

class DashboardController extends ControllerBase {
// class DashboardController {

  public function content() {

    // Set reactDiv
    $reactDiv = '<div id="react-app">React app will load here.</div>';

    return [
      '#theme' => 'migration_dashboard_theme',      
      '#markup' => $reactDiv,
    ];
    
  }


  // public function dash() {
  //   $shout = 'Testing nope';
        
  //   return new Response($shout);
  // }

}