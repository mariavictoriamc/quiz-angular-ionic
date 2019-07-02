import { Injectable } from '@angular/core';

import { Theme } from '../models/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  private themes: Theme[] = [
    {
      id: '1',
      name: 'História',
      color: 'primary',
      icon: 'boat',
      questions: [
        {
          id: '1',
          question: 'Qual o nome do presidente do Brasil que ficou conhecido como Jango?',
          options: [
            {
              id: '1',
              option: 'Jânio Quadros'
            }, {
              id: '2',
              option: 'João Goulart'
            }, {
              id: '3',
              option: 'Getúlio Vargas'
            }, {
              id: '4',
              option: 'João Figueiredo'
            }
          ],
          answer: '2'
        }
      ]
    }, {
      id: '2',
      name: 'Geografia',
      color: 'secondary',
      icon: 'image',
      questions: [
        {
          id: '1',
          question: 'Quais o menor e o maior país do mundo?',
          options: [
            {
              id: '1',
              option: 'Malta e Estados Unidos'
            }, {
              id: '2',
              option: 'Mônaco e Canadá'
            }, {
              id: '3',
              option: 'Vaticano e Rússia'
            }, {
              id: '4',
              option: 'São Marino e Índia'
            }
          ],
          answer: '3'
        }
      ]
    }, {
      id: '3',
      name: 'Português',
      color: 'tertiary',
      icon: 'school',
      questions: [
        {
          id: '1',
          question: 'Qual o grupo em que todas as palavras foram escritas corretamente?',
          options: [
            {
              id: '1',
              option: 'Asterisco, beneficente, meteorologia, entretido'
            }, {
              id: '2',
              option: 'Asterístico, beneficiente, meteorologia, entertido'
            }, {
              id: '3',
              option: 'Asterisco, beneficente, metereologia, entretido'
            }, {
              id: '4',
              option: 'Asterisco, beneficiente, metereologia, entretido'
            }
          ],
          answer: '1'
        }
      ]
    }, {
      id: '4',
      name: 'Literatura',
      color: 'success',
      icon: 'paper',
      questions: [
        {
          id: '1',
          question: 'Qual o livro mais vendido no mundo a seguir à Bíblia?',
          options: [
            {
              id: '1',
              option: 'O Senhor dos Anéis'
            }, {
              id: '2',
              option: 'Dom Quixote'
            }, {
              id: '3',
              option: 'O Pequeno Príncipe'
            }, {
              id: '4',
              option: 'Um Conto de Duas Cidades'
            }
          ],
          answer: '2'
        }
      ]
    }, {
      id: '5',
      name: 'Ciências',
      color: 'warning',
      icon: 'planet',
      questions: [
        {
          id: '1',
          question: 'Quanto tempo a luz do Sol demora para chegar à Terra?',
          options: [
            {
              id: '1',
              option: '8 minutos'
            }, {
              id: '2',
              option: '12 minutos'
            }, {
              id: '3',
              option: '1 dia'
            }, {
              id: '4',
              option: 'Segundos'
            }
          ],
          answer: '1'
        }
      ]
    }, {
      id: '6',
      name: 'Física',
      color: 'danger',
      icon: 'magnet',
      questions: [
        {
          id: '1',
          question: 'Qual a velocidade da luz?',
          options: [
            {
              id: '1',
              option: '300 000 000 metros por segundo (m/s)'
            }, {
              id: '2',
              option: '150 000 000 metros por segundo (m/s)'
            }, {
              id: '3',
              option: '299 792 458 metros por segundo (m/s)'
            }, {
              id: '4',
              option: '199 792 458 metros por segundo (m/s)'
            }
          ],
          answer: '3'
        }
      ]
    }, {
      id: '7',
      name: 'Química',
      color: 'light',
      icon: 'thermometer',
      questions: [
        {
          id: '1',
          question: 'Atualmente, quantos elementos químicos a tabela periódica possui?',
          options: [
            {
              id: '1',
              option: '113'
            }, {
              id: '2',
              option: '109'
            }, {
              id: '3',
              option: '108'
            }, {
              id: '4',
              option: '118'
            }
          ],
          answer: '4'
        }
      ]
    }, {
      id: '8',
      name: 'Matemática',
      color: 'medium',
      icon: 'pie',
      questions: [
        {
          id: '1',
          question: 'Quantas casas decimais tem o número pi?',
          options: [
            {
              id: '1',
              option: 'Duas'
            }, {
              id: '2',
              option: 'Centenas'
            }, {
              id: '3',
              option: 'Trilhares'
            }, {
              id: '4',
              option: 'Milhares'
            }
          ],
          answer: '3'
        }
      ]
    }
  ];

  constructor() { }

  getListThemes() {
    return [...this.themes];
  }

  getTheme(themeId: string) {
    return {
      ...this.themes.find(theme => {
        return theme.id === themeId;
      })
    };
  }

}
