<?php

namespace Drupal\migration_dashboard\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\migration_dashboard\Routing\JsonapiLimitingRouteSubscriber;
use Symfony\Component\DependencyInjection\ContainerInterface;
// use Symfony\Component\HttpFoundation\Response;

class DashboardController extends ControllerBase {

  public function content() {

    // Set reactDiv
    $reactDiv = '<div id="react-app">React code goes here.</div>';

    return [
      '#theme' => 'migration_dashboard',    
      // '#markup' => $reactDiv,
      '#react_div' => $this->t($reactDiv)
    ]; 
  }
}