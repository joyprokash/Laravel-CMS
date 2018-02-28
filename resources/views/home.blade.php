@extends('backend.layouts.admin')

@section('content')

	<div class="card">
		<div class="card-header">
			<h4>Dashboard</h4>
		</div>
		<div class="card-body card-block">
			 @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!
		</div>
	</div>
@endsection
