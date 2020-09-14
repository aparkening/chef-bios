<?php

namespace Drupal\migration_dashboard\Controller;

// use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\Response;

// class DashboardController extends ControllerBase {
class DashboardController {

  public function dash() {
    $shout = 'Testing 1 2 3';
        
    return new Response($shout);
  }

}