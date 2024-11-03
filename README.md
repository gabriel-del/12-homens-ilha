# 12 Homens numa ilha

<details>
<summary open>Enunciado</summary>

Uma ilha tem 12 homens.

Todos têm o mesmo peso, exceto 1, que é ligeiramente mais leve ou pesado que os demais.

Nessa ilha não há nenhuma balança, mas há uma gangorra.

Como descobrir quem tem o peso diferente usando a gangorra apenas 3 vezes?
</details>

<details>
<summary>Resolução: </summary>

Vamos supor que os 12 homens se chamam: A, B, C, D, E, F, G, H, I, J, K, L.

A primeira pesagem é (ABCD) com (EFGH) e ficando de fora (IJKL).

Resulta em 3 possibilidades
</details>

<details>
<summary>(ABCD) = (EFGH)</summary>
Conclusão: o diferente está entre (IJKL)

Segunda pesagem: IJ ? KA

* IJ = KA:

  Conclusão: L (+) ou L(-)

  Terceira pesagem: L ? A

  * L > A => L(+)
  * L < A => L(-)
* IJ > KA:

  Conclusão: IJ (+) ou K (-)

  Terceira pesagem: I ? J

  * I > J: I (+)
  * I < J: J (+)
  * I = J: K (-)
* IJ < KA:

  Conclusão: IJ (-) ou K (+)

  Terceira pesagem: I ? J

  * I > J: J (-)
  * I < J: I (-)
  * I = J: K (+)

</details>

<details>
<summary>1. (ABCD) > (EFGH)</summary>
Conclusão: (ABCD) (+) ou (EFGH) (-)

Segunda pesagem: ABE ? CFI
* ABE = CFI:
  Conclusão: D (+), G (-) ou H (-)

  Terceira Pesagem: G ? H
  * G = H: D (+)
  * G < H: G (-)
  * G > H: H (-)
* ABE > CFI:
  Conclusão: A (+), B (+) ou F (-)

  Terceira Pesagem: A ? B
  * A = B: F (-)
  * A < B: B (+)
  * A > B: A (+)
* ABE < CFI:
  Conclusão: E (-) ou  C (+)

  Terceira Pesagem: EC ? IJ
  * EC < IJ: E (-)
  * EC > IJ: C (+)


</details>

<details open>
<summary>2. (ABCD) > (EFGH)</summary>
Conclusão: (ABCD) (+) ou (EFGH) (-)

Segunda pesagem: ABE ? CFG
* ABE = CFG:
  Conclusão: D (+) ou H (-)

  Terceira Pesagem: DH ? IJ
  * DH > IJ: D (+)
  * DH < IJ: H (-)
* ABE > CFG:
  Conclusão: A (+), B (+), F (-) ou G (-)
* ABE < CFG:
  Conclusão: E (-), C (+)

</details>

<details>
<summary >(ABCD) < (EFGH)</summary>
Conclusão (ABCD) (-) ou (EFGH) (+)

</details>
