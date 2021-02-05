# Automated Temporal Verification via Timed Synchronous Effects
## Towards a Mixed Synchronous and Asynchronous Concurrency

HipHop.js is the first reactive language that integrates Esterel’s synchrony and preemption with JavaScript’s asynchrony. Existing temporal verification techniques haven’t been designed to handle such a blending of two concurrency models. We propose a novel solution via a compositional Hoare-style forward verifier and a term rewriting system (TRS) on Timed Synchronous Effects. Our first contribution is a new effects logic that extends Kleene Algebra with value-dependent constraints, providing real-time bounds for synchronous traces. As a second contribution, we avoid complex translation into (timed-)automata by using an algebraic TRS, to efficiently support language inclusions checking between expressive timed effects. To demonstrate the feasibility of our proposals, we build an entailment checker for this logic; prove its correctness and provide experimental results via some case studies.

### To Compile:

```
git clone https://github.com/songyahui/VerifySyncAsync.git
cd SyncedEffects
chmod 755 clean 
chmod 755 compile 
./compile
```

### Dependencies:

```
opam switch create 4.07.1
eval $(opam env)
sudo apt-get install menhir
sudo apt-get install z3
```

{A, B , C} /\ {B, C} |- {A}

{A} |- {A, B , C} /\ {B, C}
{A} |- {B} -> false

emp |- 
-------------------------------------------
{A}  |- {A} || O  and O  |- {A} || O
-----------------------------
{A} || O  |- {A} || O  true  
