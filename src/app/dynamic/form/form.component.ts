import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  constructor() { }

  fields: Array<PoDynamicFormField> = [
    {property: 'name', gridColumns: 6, placeholder: 'digite seu nome', label: 'Nome Completo', divider: 'Dados Pessoais'},
    { property: 'date', gridColumns: 6, label: 'Data de Aniversário', type: 'date', format: 'dd/MM/YYYY' },
    { property: 'cpf', gridColumns: 6, label: 'CPF', mask: '999.999.999-99' },
    { property: 'secrets', gridColumns: 6, label: 'Senha', secret: true, pattern: '[a-zA]{5}[Z0-9]{3}', errorMessage: 'São necessários pelo menos 5 caracteres alfabéticos e 3 caracteres numéricos.', placeholder: 'Digite uma senha' },
    { property: 'email', gridColumns: 6, type: 'email', divider: 'CONTATOS', icon: 'po-icon-mail', label: 'E-mail' },
    { property: 'phone', gridColumns: 6, mask: '(99) 99999-9999', label: 'Celular' },
    {
      property: 'hobbies',
      divider: 'MAIS INFORMAÇÕES',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Games', 'Futebol', 'Basquete', 'Ciclismo', 'Yoga', 'Viajar', 'Correr'],
      optionsMulti: true
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Herói Favorito',
      optional: true,
      searchService: 'https://po-sample-api.herokuapp.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    { property: 'comments', gridColumns: 6, rows: 5, label: 'Comentários', placeholder: 'Digite os comentários' },
    { property: 'poui', gridColumns: 6, label: 'Conhecia o PO UI?', type: 'boolean' }
  ]

  ngOnInit(): void {
  }

}
