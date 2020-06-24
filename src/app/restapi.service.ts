import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  washingtonweatherurl:string = 'https://api.weather.gov/gridpoints/LWX/95,70/forecast';
  washingtoniconurl:string='https://api.weather.gov/icons/land/night/few?size=medium';

  tucsonweatherurl:string='https://api.weather.gov/gridpoints/TWC/91,48/forecast';
  tucsoniconurl:string='https://api.weather.gov/icons/land/night/skc?size=medium';

  los_angelesweatherurl:string='https://api.weather.gov/gridpoints/LOX/153,38/forecast';
  los_angelesiconurl:string='https://api.weather.gov/icons/land/night/fog?size=medium';

  houstonweatherurl:string='https://api.weather.gov/gridpoints/HGX/61,98/forecast';
  houstoniconurl:string='https://api.weather.gov/icons/land/night/few?size=medium';

  denverweatherurl:string='https://api.weather.gov/gridpoints/BOU/60,62/forecast';
  denvericonurl:string='https://api.weather.gov/icons/land/night/tsra_sct,30/tsra_sct,20?size=medium';

  miamiweatherurl:string='https://api.weather.gov/gridpoints/MFL/109,50/forecast';
  miamiiconurl:string='https://api.weather.gov/icons/land/night/tsra,50?size=medium';

  atlantaweatherurl:string='https://api.weather.gov/gridpoints/FFC/50,85/forecast';
  atlantaiconurl:string='https://api.weather.gov/icons/land/night/few?size=medium';

  colombusweatherurl:string='https://api.weather.gov/gridpoints/ILN/85,80/forecast';
  colombusiconurl:string='https://api.weather.gov/icons/land/night/bkn?size=medium';

  rayleighweatherurl:string='https://api.weather.gov/gridpoints/RAH/72,56/forecast';
  rayleighiconurl:string='https://api.weather.gov/icons/land/night/few?size=medium';

  bostonweatherurl:string='https://api.weather.gov/gridpoints/BOX/56,71/forecast';
  bostoniconurl:string='https://api.weather.gov/icons/land/night/sct?size=medium';

  louisvilleweatherurl:string='https://api.weather.gov/gridpoints/LMK/49,74/forecast';
  louisvilleiconurl:string='https://api.weather.gov/icons/land/night/sct?size=medium';

  portlandweatherurl:string='https://api.weather.gov/gridpoints/PQR/117,101/forecast';
  portlandiconurl:string='https://api.weather.gov/icons/land/night/rain_showers,30?size=medium';
  constructor(public httpclient : HttpClient) { }

public washingtonweather()
{
  return this.httpclient.get(this.washingtonweatherurl);
}
public washingtonicon()
{
  return this.httpclient.get(this.washingtoniconurl);
}

public tucsonweather()
{
  return this.httpclient.get(this.tucsonweatherurl);
}
public tucsonicon()
{
  return this.httpclient.get(this.tucsoniconurl);
}

public losangelesweather()
{
  return this.httpclient.get(this.los_angelesweatherurl);
}
public losangelesicon()
{
  return this.httpclient.get(this.los_angelesiconurl);
}

public houstonweather()
{
  return this.httpclient.get(this.houstonweatherurl);
}
public houstonicon()
{
  return this.httpclient.get(this.houstoniconurl);
}

public denverweather()
{
  return this.httpclient.get(this.denverweatherurl);
}
public denvericon()
{
  return this.httpclient.get(this.denvericonurl);
}

public miamiweather()
{
  return this.httpclient.get(this.miamiweatherurl);
}
public miamiicon()
{
  return this.httpclient.get(this.miamiiconurl);
}

public atlantaweather()
{
  return this.httpclient.get(this.atlantaweatherurl);
}
public atlantaicon()
{
  return this.httpclient.get(this.atlantaiconurl);
}

public colombusweather()
{
  return this.httpclient.get(this.colombusweatherurl);
}
public colombusicon()
{
  return this.httpclient.get(this.colombusiconurl);
}

public rayleighweather()
{
  return this.httpclient.get(this.rayleighweatherurl);
}
public rayleighicon()
{
  return this.httpclient.get(this.rayleighiconurl);
}

public bostonweather()
{
  return this.httpclient.get(this.bostonweatherurl);
}
public bostonicon()
{
  return this.httpclient.get(this.bostoniconurl);
}

public louisvilleweather()
{
  return this.httpclient.get(this.louisvilleweatherurl);
}
public louisvilleicon()
{
  return this.httpclient.get(this.louisvilleiconurl);
}

public portlandweather()
{
  return this.httpclient.get(this.portlandweatherurl);
}
public portlandicon()
{
  return this.httpclient.get(this.portlandiconurl);
}
}
