import { Injectable } from "@angular/core";
import { getValue, isDefined, isString, isFunction } from "./util";
import * as i0 from "@angular/core";
export class TranslateParser {
}
export class TranslateDefaultParser extends TranslateParser {
    templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
    interpolate(expr, params) {
        if (isString(expr)) {
            return this.interpolateString(expr, params);
        }
        else if (isFunction(expr)) {
            return this.interpolateFunction(expr, params);
        }
        return undefined;
    }
    interpolateFunction(fn, params) {
        return fn(params);
    }
    interpolateString(expr, params) {
        if (!params) {
            return expr;
        }
        return expr.replace(this.templateMatcher, (substring, b) => {
            const r = getValue(params, b);
            return isDefined(r)
                ? r
                : substring;
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateDefaultParser, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateDefaultParser });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: TranslateDefaultParser, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10cmFuc2xhdGUvc3JjL2xpYi90cmFuc2xhdGUucGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQyxNQUFNLFFBQVEsQ0FBQzs7QUFNakUsTUFBTSxPQUFnQixlQUFlO0NBU3BDO0FBSUQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGVBQWU7SUFFekQsZUFBZSxHQUFHLHVCQUF1QixDQUFDO0lBRW5DLFdBQVcsQ0FBQyxJQUFnQyxFQUFFLE1BQWdDO1FBRW5GLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUNsQixDQUFDO1lBQ0MsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELENBQUM7YUFDSSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFDekIsQ0FBQztZQUNDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQTJCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkUsQ0FBQztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFTyxtQkFBbUIsQ0FBQyxFQUF1QixFQUFFLE1BQWdDO1FBRW5GLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxJQUFZLEVBQUUsTUFBZ0M7UUFFdEUsSUFBSSxDQUFDLE1BQU0sRUFDWCxDQUFDO1lBQ0MsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxTQUFpQixFQUFFLENBQVMsRUFBRSxFQUFFO1lBRXpFLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNaLENBQUMsQ0FBQyxDQUFDO2dCQUNILENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO3dHQXBDVSxzQkFBc0I7NEdBQXRCLHNCQUFzQjs7NEZBQXRCLHNCQUFzQjtrQkFEbEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SW50ZXJwb2xhdGlvblBhcmFtZXRlcnN9IGZyb20gXCIuL3RyYW5zbGF0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQge2dldFZhbHVlLCBpc0RlZmluZWQsIGlzU3RyaW5nLCBpc0Z1bmN0aW9ufSBmcm9tIFwiLi91dGlsXCI7XG5cblxuZXhwb3J0IHR5cGUgSW50ZXJwb2xhdGVGdW5jdGlvbiA9IChwYXJhbXM/OiBJbnRlcnBvbGF0aW9uUGFyYW1ldGVycykgPT4gc3RyaW5nO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUcmFuc2xhdGVQYXJzZXJcbntcbiAgLyoqXG4gICAqIEludGVycG9sYXRlcyBhIHN0cmluZyB0byByZXBsYWNlIHBhcmFtZXRlcnNcbiAgICogXCJUaGlzIGlzIGEge3sga2V5IH19XCIgPT0+IFwiVGhpcyBpcyBhIHZhbHVlXCIsIHdpdGggcGFyYW1zID0geyBrZXk6IFwidmFsdWVcIiB9XG4gICAqIEBwYXJhbSBleHByXG4gICAqIEBwYXJhbSBwYXJhbXNcbiAgICovXG4gIGFic3RyYWN0IGludGVycG9sYXRlKGV4cHI6IEludGVycG9sYXRlRnVuY3Rpb258c3RyaW5nLCBwYXJhbXM/OiBJbnRlcnBvbGF0aW9uUGFyYW1ldGVycyk6IHN0cmluZ3x1bmRlZmluZWQ7XG59XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZURlZmF1bHRQYXJzZXIgZXh0ZW5kcyBUcmFuc2xhdGVQYXJzZXJcbntcbiAgdGVtcGxhdGVNYXRjaGVyID0gL3t7XFxzPyhbXnt9XFxzXSopXFxzP319L2c7XG5cbiAgcHVibGljIGludGVycG9sYXRlKGV4cHI6IEludGVycG9sYXRlRnVuY3Rpb258c3RyaW5nLCBwYXJhbXM/OiBJbnRlcnBvbGF0aW9uUGFyYW1ldGVycyk6IHN0cmluZ3x1bmRlZmluZWRcbiAge1xuICAgIGlmIChpc1N0cmluZyhleHByKSlcbiAgICB7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0ZVN0cmluZyhleHByIGFzIHN0cmluZywgcGFyYW1zKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNGdW5jdGlvbihleHByKSlcbiAgICB7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0ZUZ1bmN0aW9uKGV4cHIgYXMgSW50ZXJwb2xhdGVGdW5jdGlvbiwgcGFyYW1zKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgaW50ZXJwb2xhdGVGdW5jdGlvbihmbjogSW50ZXJwb2xhdGVGdW5jdGlvbiwgcGFyYW1zPzogSW50ZXJwb2xhdGlvblBhcmFtZXRlcnMpOiBzdHJpbmdcbiAge1xuICAgIHJldHVybiBmbihwYXJhbXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnRlcnBvbGF0ZVN0cmluZyhleHByOiBzdHJpbmcsIHBhcmFtcz86IEludGVycG9sYXRpb25QYXJhbWV0ZXJzKTogc3RyaW5nXG4gIHtcbiAgICBpZiAoIXBhcmFtcylcbiAgICB7XG4gICAgICByZXR1cm4gZXhwcjtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwci5yZXBsYWNlKHRoaXMudGVtcGxhdGVNYXRjaGVyLCAoc3Vic3RyaW5nOiBzdHJpbmcsIGI6IHN0cmluZykgPT5cbiAgICB7XG4gICAgICBjb25zdCByID0gZ2V0VmFsdWUocGFyYW1zLCBiKTtcbiAgICAgIHJldHVybiBpc0RlZmluZWQocilcbiAgICAgICAgICAgICA/IHJcbiAgICAgICAgICAgICA6IHN1YnN0cmluZztcbiAgICB9KTtcbiAgfVxufVxuIl19