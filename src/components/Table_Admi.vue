<script setup>

</script>

<template>
    <div class="table_becados">
        <h4>Becados</h4>
        <table>
            <tr>
                <td>DNI: 55555555Y</td>
                <td>
                    <img src="../assets/icons/see.svg" alt="">
                    <img src="../assets/icons/edit.svg" alt="">
                    <img src="../assets/icons/delete.svg" alt="">
                </td>
            </tr>
        </table>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped lang="scss">
.table_becados {
    height: 85vh;
    background-color: $gray-form;
    padding: 2% 2%;

    h4 {
        font-weight: 650;
    }

    table {
        border: none;
        height: 90%;
        display: flex;
        flex-direction: column;
        font-size: 0.8em;
        gap: 6px;

        tr {
            height: 5vh;

            td {
                padding: 0.3em;
                width: 1%;
                border: 1px solid $red;
                background-color: white;
                text-align: right;
            }

            img {
                width: 30px;
                padding-right: 3px;
            }
        }
    }

    .pagination {
        display: flex;
        border-radius: 4px;
        justify-content: center;
    }

    .pagination>li {
        display: inline-flex;
    }

    .pagination>li>a,
    .pagination>li>span {
        position: relative;
        line-height: 18px;
        color: $gray;
    }

    .pagination>li.active>a,
    .pagination>li.active>span {
        background-color: $red;
        border-color: $red;
        color: $red;
    }
}
</style>