import { Component, OnInit, EventEmitter} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ErrorStateMatcher } from '@angular/material/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
  ReactiveFormsModule} from '@angular/forms';
import { DadosPessoaisService } from 'src/app/shared/dados-pessoais.service';
import { PersonalDataFactoryService } from 'src/app/core/factories/personal-data-factory.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss']
})

export class DadosPessoaisComponent implements OnInit{
  dataPersonal!: FormGroup;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  inputName!: string;
  inputSurName!: string;
  formIsValidator = new EventEmitter();
  formIsValid!: boolean;
  matcher = new MyErrorStateMatcher();
  public phoneModel = '';
  public cpfModel = '';
  public maskPhone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskCPF = [/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.',  /\d/, /\d/, /\d/, '-', /\d/, /\d/, ]
  constructor(
    private formBuilder: FormBuilder,
    private personalData: DadosPessoaisService,
    private personalDataFactory: PersonalDataFactoryService,
  ) {


  }
  ngOnInit():void {
    this._createFormDataPersonal();
    this._setPersonalData();
    this.validatorForm();

  }
  public validatorFormNotNumber(value: any, name: any){
    if (name === 'name') {
      this.inputName = value.target.value.replace(/[0-9]/g, '');
    }else{
      this.inputSurName = value.target.value.replace(/[0-9]/g, '');
    }

  }
  public validatorForm(): any {
    this.formIsValidator.emit(this.dataPersonal.valid);
    this.formIsValidator.subscribe(res => {
      this.personalData.allInputsFilled.emit(res);
      this.personalDataFactory.createPersonalData(this.dataPersonal.value);
    });
  }
  private _setPersonalData(): any  {
    this.personalData.personalDataSave(this.dataPersonal.controls);
    this.personalData.nextStepClicked.subscribe(res => {
      this.personalDataFactory.createPersonalData(this.dataPersonal.value);
    });

  }
  private _createFormDataPersonal(): void {
    this.dataPersonal = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['',[Validators.required]],
      cpf: ['', [
        Validators.required,
        Validators.maxLength(14)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      phone: ['', [
        Validators.required,
        Validators.minLength(13),
        Validators.maxLength(15),
      ]]
    });
  }
}
