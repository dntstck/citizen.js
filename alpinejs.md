<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alpine.js Cheatsheet</title>
    <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.0.6/dist/cdn.min.js" defer></script>
</head>
<body>

<h1>Alpine.js Cheatsheet</h1>

<div>
  <h2>Basic Syntax</h2>

  <table>
    <thead>
      <tr>
        <th>Directive</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>x-data</code></td>
        <td>Initializes a new Alpine.js component</td>
      </tr>
      <tr>
        <td><code>x-show</code></td>
        <td>Conditionally shows or hides an element</td>
      </tr>
      <tr>
        <td><code>x-bind</code></td>
        <td>Binds an attribute to an Alpine.js expression</td>
      </tr>
      <tr>
        <td><code>x-on</code> / <code>@</code></td>
        <td>Listens for DOM events</td>
      </tr>
      <tr>
        <td><code>x-model</code></td>
        <td>Binds data to form elements (two-way binding)</td>
      </tr>
      <tr>
        <td><code>x-text</code></td>
        <td>Updates text content</td>
      </tr>
      <tr>
        <td><code>x-html</code></td>
        <td>Updates HTML content</td>
      </tr>
      <tr>
        <td><code>x-for</code></td>
        <td>Iterates over a list of items</td>
      </tr>
      <tr>
        <td><code>x-transition</code></td>
        <td>Adds transitions to elements</td>
      </tr>
    </tbody>
  </table>

  <h2>Basic Example</h2>
  <pre><code>&lt;div x-data=&quot;{ message: 'Hello, Alpine!' }&quot;&gt;
    &lt;input x-model=&quot;message&quot;&gt;
    &lt;p x-text=&quot;message&quot;&gt;&lt;/p&gt;
&lt;/div&gt;</code></pre>

  <h2>Conditionals</h2>
  <pre><code>&lt;div x-data=&quot;{ isVisible: true }&quot;&gt;
    &lt;button @click=&quot;isVisible = !isVisible&quot;&gt;Toggle&lt;/button&gt;
    &lt;div x-show=&quot;isVisible&quot;&gt;This is visible&lt;/div&gt;
&lt;/div&gt;</code></pre>

  <h2>Loops</h2>
  <pre><code>&lt;div x-data=&quot;{ items: ['Item 1', 'Item 2', 'Item 3'] }&quot;&gt;
    &lt;ul&gt;
        &lt;template x-for=&quot;item in items&quot; :key=&quot;item&quot;&gt;
            &lt;li x-text=&quot;item&quot;&gt;&lt;/li&gt;
        &lt;/template&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>

  <h2>Transitions</h2>
  <pre><code>&lt;div x-data=&quot;{ show: false }&quot;&gt;
    &lt;button @click=&quot;show = !show&quot;&gt;Toggle&lt;/button&gt;
    &lt;div x-show=&quot;show&quot; x-transition&gt;
        &lt;p&gt;This content will transition in and out.&lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
</div>

</body>
</html>
