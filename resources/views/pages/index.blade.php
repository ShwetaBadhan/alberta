@extends('layouts.master')
@section('title', 'Home Page | Alberta')
@section('content')

@include('components.home.banner')
@include('components.home.about')
@include('components.home.features')
@include('components.home.services')
{{-- @include('components.home.team') --}}
@include('components.home.video')
@include('components.home.why-choose-us')
@include('components.home.partner')
@include('components.home.process')
@include('components.home.quote')
{{-- @include('components.home.pricing') --}}
@include('components.home.testimonials')
@include('components.home.cta')

@endsection