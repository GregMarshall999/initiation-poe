<template>
    <div class="container">
        <header>
            <slot name="header"></slot>
        </header>

        <main>
            <slot></slot>
        </main>

        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<style scoped>

.container {
    border: 1px solid rgb(79, 161, 175);
    border-radius: 10px;
    background-color: rgb(130, 206, 206);
    color: rgb(87, 87, 87);
    margin: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 0;
}

main {
    padding: 0 10%
}

</style>