import { Component, OnInit } from '@angular/core';
import { JsonpathService } from "../jsonpath.service"

@Component({
  selector: 'app-json2jsonpath',
  templateUrl: './json2jsonpath.component.html',
  styleUrls: ['./json2jsonpath.component.css']
})
export class Json2jsonpathComponent implements OnInit {

  jsonpathService: JsonpathService; 
  jsonPaths: string[];
  json: string;

  constructor(jsonPathService : JsonpathService) { 
    this.jsonpathService = jsonPathService;
  }

  ngOnInit() {
  }

   getJson2jsonpath(){
    this.jsonpathService.generateJsonPaths(this.json).subscribe((data: string[]) => {
      this.jsonPaths = data;
    });
  }
  
}
