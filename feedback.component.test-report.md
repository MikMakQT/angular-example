## Yksikkötestiraportti

Tarkasteltu testitiedosto: `feedback.component.spec.ts`  
Testattava komponentti: `feedback.component.ts`

Suoritin tiedoston testit Chrome -selaimella. **Testejä suoritettiin 9: kahdeksan onnistui ja yksi epäonnistui.**

| Testi | Tarkoitus | Tulos |
|---|---|---|
| `should create` | Varmistaa, että komponentti alustuu. | **Hyväksytty** |
| `cancel-button should navigate to home page` | Varmistaa, että peruutustoiminto navigoi `home`-reitille. | **Hyväksytty** |
| `should mark phone as invalid if it has less than 10 characters` | Tarkistaa, että alle 10 merkin puhelinnumero saa `minlength`-virheen. | **Hyväksytty** |
| `should mark phone as invalid if it has more than 10 characters` | Tarkistaa, että yli 10 merkin puhelinnumero saa `maxlength`-virheen. | **Epäonnistui** |
| `should mark email as invalid if it is not a valid email address` | Varmistaa, että virheellinen sähköpostiosoite hylätään. | **Hyväksytty** |
| `should require a description` | Varmistaa, että kuvauskenttä on pakollinen. | **Hyväksytty** |
| `should clear the form after submit` | Tarkistaa, että lomake tyhjentyy lähetyksen jälkeen. | **Hyväksytty** |
| `should mark name as invalid if it has less than 2 characters` | Tarkistaa, että alle kaksimerkkinen nimi saa `minlength`-virheen. | **Hyväksytty** |
| `should mark title as invalid if it contains numbers` | Varmistaa, että numeron sisältävä otsikko hylätään. | **Hyväksytty** |

### Huomio epäonnistuneesta testistä

Puhelinnumerotesti odottaa `maxlength`-validointia, mutta komponentin `phone`-kentälle on määritelty vain `required`- ja `minlength(10)`-validoinnit. Siksi yli 10 merkin arvosta ei synny odotettua virhettä. 

**Testitulos: 1 epäonnistunut, 8 hyväksyttyä.**