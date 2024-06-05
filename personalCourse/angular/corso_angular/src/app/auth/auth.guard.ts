import { inject } from '@angular/core';
import { CanActivateFn, CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const AuthGuard : CanActivateFn = (route, state) => {
	const auth = inject(AuthService);
	const router = inject(Router)
	if (auth.isAuthenticated())
	{
		return true;
	}
	console.log("is false")
	// router.navigate(['/'])
	return false;
};

export const AuthGuardChild: CanActivateChildFn = (route, state) =>{
	const auth = inject(AuthService);
	const router = inject(Router)
	if (auth.isSuperUser())
		return true;
	return false;
}
