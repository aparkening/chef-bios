<?php

namespace Drupal\migration_dashboard\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\Response;

class DashboardController extends ControllerBase {

  public function dash() {
    // $shoutGenerator = new ShoutGenerator();
    // $shout = 'Y'.str_repeat('O', $count).'!!!!!';
    
    $shout = $this->shoutGenerator->getShout($count);
    
    return new Response($shout);
  }

  public static function create(ContainerInterface $container) {
    $shoutGenerator = $container->get('test_module_2.shout_generator');
    return new static($shoutGenerator);
  }

}