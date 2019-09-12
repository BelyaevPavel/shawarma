from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.welcomer, name='welcomer'),
    url(r'^menu', views.menu, name='menu'),
    url(r'^order/print/(?P<order_id>[0-9]+)/$', views.print_order, name="order_print"),
    url(r'^order/(?P<order_id>[0-9]+)/$', views.order_content, name="order_content"),
    url(r'^ajax/make_order', views.make_order, name="make_order"),
    url(r'^ajax/buyer_queue', views.buyer_queue_ajax, name="buyer_queue_ajax"),
    url(r'^ajax/close_order', views.close_order, name="close_order"),
    url(r'^ajax/ready_order', views.ready_order, name="ready_order"),
    url(r'^ajax/cancel_item', views.cancel_item, name="cancel_item"),
    url(r'^ajax/cancel_order', views.cancel_order, name="cancel_order"),
    url(r'^ajax/next_to_prepare', views.next_to_prepare, name="next_to_prepare"),
    url(r'^ajax/take', views.take, name="take"),
    url(r'^ajax/to_grill', views.to_grill, name="to_grill"),
    url(r'^ajax/grill_timer', views.grill_timer, name="grill_timer"),
    url(r'^ajax/finish_cooking', views.finish_cooking, name="finish_cooking"),
    url(r'^ajax/finish_supplement', views.finish_supplement, name="finish_supplement"),
    url(r'^ajax/current_queue', views.current_queue_ajax, name="current_queue_ajax"),
    url(r'^current_queue', views.current_queue, name="current_queue"),
    url(r'^production_queue', views.production_queue, name="production_queue"),
    url(r'^cook_interface', views.cook_interface, name="cook_interface"),
    url(r'^redirection', views.redirection, name="redirection"),
    url(r'^buyer_queue', views.buyer_queue, name="buyer_queue")
]