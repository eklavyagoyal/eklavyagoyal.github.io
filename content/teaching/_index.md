+++
title = 'Teaching'
date = 2024-10-05T18:33:29+02:00
draft = false
+++
# Courses I Am Tutoring
Here's a list of courses and tutorial sessions I will be tutoring for the upcoming semester.
## Winter Semester 2024/25(WS24/25)
{{< toggle id="ma9202" title="[MA9202] Mathematics for Physicists 2: Analysis 1" class="large-heading" >}}
<ul>
    <li><strong>Room</strong>:  <a href="https://nav.tum.de/room/5503.EG.337">Room 5503.EG.337(Seminarraum)</a> , Maschienenwesen(Mechanical) Building</li>  
    <li><strong>Time</strong>: Thursdays, 12:00 - 14:00</li>
    <li><strong>Description</strong>: This module introduces fundamental concepts and methods of analysis through the study of functions of a single variable. Upon successful completion of the course, students will be well-acquainted with the central concept of approximation and will be equipped to apply their knowledge effectively to solve basic problems.</li>
    <li><strong>Contents</strong>:
     <ul class="custom-bullets">The following topics will be covered during this course.
        <li>Basics of University Mathematics: Sets, Logic, Group Theory etc</li>
        <li>Real and complex numbers</li>
        <li>Limits and convergence of sequences and series</li>
        <li>Continuity and differentiability of functions of a single variable</li>
        <li>Riemann or Darboux integrals</li>
        <li>Convergence of sequences of functions</li>
        <li>Power series, Taylor series, and intro to Fourier series</li>
        <li>Simple ordinary differential equations</li>
        <li>Banach spaces and matrixexponential</li>
    </ul></li>
    <li><strong>Material</strong>:&nbsp;<a href="notes/ma9202/">Download Course Materials</a></li>
</ul>
{{< /toggle >}}

## Summer Semester 2025(SS25)
{{< toggle id="ma9203" title="[MA9203] Mathematics for Physicists 3: Analysis 2" class="large-heading" >}}
<ul>
    <li><strong>Room</strong>: &nbsp;<a href="https://nav.tum.de/room/5503.EG.337">Room 5503.EG.337(Seminarraum)</a> , Maschienenwesen(Mechanical) Building</li>  
    <li><strong>Time</strong>:&nbsp;Fridays, 14:00 - 16:00</li>
    <li><strong>Description</strong>:&nbsp;This module extends the foundations laid in the previous analysis course to functions of multiple variables and introduces key concepts in topology and vector analysis. Emphasis is placed on rigorously understanding differentiability, integration, and approximation in higher dimensions.</li>
    <li><strong>Contents</strong>:
    <ul>
      <li>Parametrized curves, arc length, and reparametrizations</li>
      <li>Differentiability in higher dimensions: total and partial derivatives, gradient</li>
      <li>Curve integrals and geometry of differentiable curves</li>
      <li>Topological foundations: metric spaces, convergence, and continuity</li>
      <li>Compactness and linear maps on Banach spaces</li>
      <li>Higher-order derivatives, Schwarz’s theorem, and Taylor expansion with multi-indices</li>
      <li>Extrema, implicit and inverse function theorems</li>
      <li>Extrema with constraints using Lagrange multipliers</li>
      <li>Vector calculus: divergence, curl, gradient, and the Levi-Civita tensor</li>
      <li>Poincaré lemma and applications to vector fields</li>
      <li>Introduction to (sub) manifolds and outlook toward physics applications (e.g. Noether’s theorem, gauge theory)</li>
</ul></li>
    <li><strong>Material</strong>:&nbsp;<a href="notes/ma9203/">Download Course Materials</a></li>
</ul>
{{< /toggle >}}


<script>
  function toggleDetails(courseId) {
      const details = document.getElementById(courseId);
      if (details.style.display === "none") {
          details.style.display = "block";
      } else {
          details.style.display = "none";
      }
  }
</script>

<style>
.toggle-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
}
.toggle-content.open {
  max-height: 2000px;
}
.toggle-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px 0;
  width: 100%;
}
.toggle-icon {
  transition: transform 0.3s ease;
}
.toggle-content.open + .toggle-btn .toggle-icon {
  transform: rotate(180deg);
}
</style>

